'use client';

import { Dialog } from '@/components/ui';
import React from 'react'
import { Product } from '@prisma/client';
import { cn } from '@/lib/utils';
import { DialogContent } from '@/components/ui/dialog';
import { Title } from '../title';

type Props = {
  className?: string;
  product: Product;

}

export const ChooseProductModal: React.FC<Props> = ({ product,className }) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
        <Title text={product.name}></Title>
      </DialogContent>
    </Dialog>
  )
}