"use client";

import { useRouter } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export type NavLink = {
  text: string;
  href: string;
};
const Navbar = () => {
  const router = useRouter();
  const navLinks: NavLink[] = [
    { text: "Location", href: "/#location" },
    { text: "Contact", href: "/#contact" },
    { text: "Menu", href: "/menu" },
    { text: "Events", href: "/events" },
  ];

  return (
    <nav className="absolute w-full z-50 bg-zinc-900 text-white">
      <div className="container flex items-center justify-between font-semibold py-2">
        <Image
          src="/logo-black.png"
          alt="Red Taco Logo"
          width={50}
          height={50}
          className="self-start rounded-full hover:cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="hidden md:flex">
          <DesktopMenu navLinks={navLinks} />
        </div>
        <div className="flex flex-col md:hidden z-50">
          <MobileMenu navLinks={navLinks}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
