"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { buttonVariants } from "./ui/button";

const Menu = () => {
  const images = [
    {
      imageSrc: "/menu/birria-taco.png",
      title: "Birria Taco",
      description:
        "Our signature creation that embodies the essence of Mexico. This is the taste that started it all.",
    },
    {
      imageSrc: "/menu/quesabirria.png",
      title: "Quesabirria",
      description:
        "Elevating comfort food to new heights, our Quesabirria is a fusion of melted cheese and succulent birria.",
    },
    {
      imageSrc: "/menu/birria-ramen-bowl.png",
      title: "Birria Ramen",
      description:
        "In the mood for something different? Our Birria Ramen Bowl won't let you down.",
    },
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="menu"
      className="bg-gradient-to-r from-red-100 to-white w-full scroll-mt-16"
    >
      <div className="container flex flex-col items-center py-5">
        <div className="text-center space-y-6 mb-4">
          <h3 className="section-heading">
            We offer only the{" "}
            <span className="font-black text-red-700">best</span>
          </h3>
          <p className="section-text self-center">
            Our recipes are a fusion of time-honored traditions and innovative
            ideas, resulting in birria tacos that pay homage to our heritage
            while exciting your taste buds.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 mt-4 gap-6">
          <div className="hidden sm:block absolute bg-red-700 w-full top-1/2 border-2 h-2 border-red-700" />
          <div className="block sm:hidden absolute bg-red-700 h-full left-1/2 w-2 border-2 border-red-700" />
          {images.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white shadow-xl rounded-lg flex flex-col z-20`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="relative aspect-video bg-red-300 rounded-lg">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  className="object-fit rounded-t-lg"
                  fill
                  quality={100}
                />
              </div>
              <div className="p-4">
                <h5 className="text-xl font-bold capitalize">{item.title}</h5>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link
            href="/menu"
            className={buttonVariants({ variant: "secondary" })}
          >
            See full menu <AiOutlineArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
