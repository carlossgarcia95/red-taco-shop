import React from "react";
import { menuItems } from "@/lib/data";
import MenuItems from "./MenuItems";
import Favorites from "./Favorites";

const page = () => {
  return (
    <main className="py-6 px-2 md:container scroll-mt-32">
      <h1 className="section-heading text-center mb-5 capitalize">MENU</h1>
      <hr />
      <Favorites />
      <MenuItems />
    </main>
  );
};

export default page;
