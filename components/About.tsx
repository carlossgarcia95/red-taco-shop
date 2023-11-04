"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures it triggers the animation only once
  });

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-red-100 to-white w-full scroll-mt-16"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:space-x-10 pt-6 pb-3 md:py-10 max-w-7xl">
        <div className="flex flex-col gap-6">
          <h3 className="section-heading text-center md:text-left">
            Crafting birria taco magic
          </h3>
          <p className="section-text">
            At Red Taco Shop, we&apos;re not just about serving delicious birria
            tacos – we&apos;re about sharing a culinary experience that&apos;s
            deeply rooted in the heart Mexicans and Americans alike.
          </p>
        </div>
        <motion.div
          className="relative aspect-video"
          initial={{ x: 20, opacity: 0, scale: 1 }}
          animate={inView ? { x: 0, opacity: 1, scale: 1 } : {}}
          ref={ref}
          transition={{ duration: 0.6 }}
        >
          <Image
            quality={100}
            src={"/food-truck.png"}
            alt="Food truck"
            fill
            className="object-fit rounded-lg"
            placeholder="blur"
            blurDataURL={"/food-truck.png"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
