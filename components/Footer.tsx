import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-300">
      <div className="container flex flex-col items-center py-2 md:flex-row justify-between">
        <div className="flex flex-col items-center gap-4 md:gap-10 md:flex-row mb-4 md:mb-0">
          <Image
            src="/logo-white.png"
            alt="Red Taco Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/events'}>Events</Link>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-row justify-center gap-4">
            <a href="https://www.facebook.com/REDTACOSHOP" target="_blank">
              <FaFacebook size={"25px"} />
            </a>
            <a href="https://www.instagram.com/redtaco_shop/" target="_blank">
              <FaInstagram size={"25px"} />
            </a>
          </div>

          <p className="text-xs self-center">
            &copy; 2024 Red Taco Shop. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
