import React from "react";
import { menuItems } from "@/lib/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

type MenuItemType = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const MenuItems = () => {
  return (
    <div>
      <p className="text-xl font-bold mb-2">All Items</p>
      <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuItems.map((item: MenuItemType) => (
          <Card key={item.name}>
            <div className="relative aspect-video w-full">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                quality={100}
                className="object-fit rounded-t-lg"
                placeholder="blur"
                blurDataURL={item.imageUrl}
              />
            </div>
            <div className="p-2 text-center rounded-lg">
              <div className="font-bold">{item.name}</div>
              <div className="text-orange-600 font-bold">
                {formatPrice(item.price)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
