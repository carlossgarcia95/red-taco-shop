"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const ActionButtons = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row md:justify-end gap-2">
      <Button
        className="py-8 text-lg"
        size={"lg"}
        variant={"secondary"}
        onClick={() => router.push("/menu")}
      >
        See Full Menu
      </Button>
      <Button className="py-8 text-lg" size={"lg"}>
        Order Now
      </Button>
    </div>
  );
};

export default ActionButtons;
