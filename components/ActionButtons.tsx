"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ActionButtons = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row md:justify-end gap-2">
      <Link
        className={buttonVariants({
          size: "lg",
          className: "py-8 text-xl font-bold",
        })}
        target="_blank"
        href={"https://red-taco-shop.square.site"}
      >
       Order online
      </Link>
      <Link
        className={buttonVariants({
          variant: 'secondary',
          size: "lg",
          className: "py-8 text-xl font-bold",
        })}
        target="_blank"
        href="https://www.doordash.com/store/red-taco-shop-food-truck-albuquerque-23580296/"
      >
        <Image
          src="/doordash-logo-transparent.png"
          alt="doordash logo"
          height={50}
          width={50}
        />
        Doordash
      </Link>
    </div>
  );
};

export default ActionButtons;
