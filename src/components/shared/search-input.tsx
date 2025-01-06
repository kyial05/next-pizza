"use client";

import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [products, setPrducts] = React.useState<Product[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(() => {
    Api.products.search(searchQuery).then(items => {
      setPrducts(items);
    });
  }, 250, [searchQuery]);

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setPrducts([]);
  }

  return (
    <>
      {focused && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />}
      <div ref={ref} className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div className={cn("absolute w-full bg-white rounded-xl py-2 top-14 shadw-md transition-all duration-200' invisble, opacity-0 z-30", focused && "visible opacity-100 top-12",)}>
            {products.map(product => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className=" flex items-center gap-3 w-full px-3 hoover:bg-primary/10"
                href={`/product/${product.id}`}>
                <img
                  className="rounded-sm h-8 w-8"
                  src={product.imageUrl}
                  alt={product.name}
                  width={32}
                  height={32}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}