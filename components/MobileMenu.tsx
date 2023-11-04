"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "./Navbar";

const MobileMenu = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="flex flex-col items-center">
      {isOpen ? (
        <RxCross1
          className="hover:cursor-pointer self-end mt-4"
          onClick={toggleMenu}
          size={25}
        />
      ) : (
        <RxHamburgerMenu
          className="hover:cursor-pointer"
          onClick={toggleMenu}
          size={25}
        />
      )}

      {isOpen && (
        <div className="flex flex-col gap-8 my-5 items-end grow">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              onClick={closeMenu}
              className="nav-link"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
