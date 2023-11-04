import React from "react";
import { menuItems } from "@/lib/data";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const favorites = menuItems.filter((item) => item.isFavorite);

const Favorites = () => {
  return (
    <div className="mt-5">
      <p className="text-xl font-bold mb-2">Popular Items</p>
      <div className="flex gap-4 overflow-x-auto mb-4">
        {favorites.map((item) => (
          <Card key={item.id}>
            <div className="relative aspect-video w-44 md:w-80">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                quality={100}
                className="object-fit rounded-t-lg"
              />
            </div>
            <div className="p-2 text-center rounded-lg">
              <div className="font-bold">{item.name}</div>
              <div className="text-orange-600 font-bold">${item.price}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
