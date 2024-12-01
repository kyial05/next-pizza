import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";

// import React from 'react';

// interface Props {
//   className?: string,
// }

// export const N: React.FC<Props> = ({ className }) => {
//   return (
//     <div className={className}></div>
//   )
// }
// 2:01
export default function Home() {
  return (
    <>
      <Container className="mt-10" >
        <Title text='Все пиццы' size='lg' className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 2,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 3,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 4,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 5,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 2,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 3,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 4,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 5,
                    name: "Диабло",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D5FFFEF64678F36FEAF9DE80589.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
