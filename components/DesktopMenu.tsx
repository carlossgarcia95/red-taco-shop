import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { NavLink } from "./Navbar";

const DesktopMenu = ({ navLinks }: { navLinks: NavLink[] }) => {
  const router = useRouter();
  return (
    <div className="space-x-8">
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="nav-link">
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;
