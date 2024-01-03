"use client";

import ActionButtons from "@/components/ActionButtons";
import Image from "next/image";
import { motion } from "framer-motion";
import { teko } from "@/components/ui/fonts";

const Hero = () => {
  return (
    <section id="intro" className="relative w-full">
      <Image
        src="/background.png"
        alt="background image"
        fill
        priority
        className="object-fit blur-[70px]"
      />
      <div className="container py-20 flex flex-col justify-center items-center gap-6 text-center">
        <motion.h1
          className={`${teko.className} text-zinc-900 z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium uppercase tracking-wider`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Red Taco Shop
        </motion.h1>
        <motion.h2
          className="text-zinc-00 z-10 text-3xl md:text-5xl font-extralight mb-5 md:mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          Love at first bite
        </motion.h2>

        <motion.div
          className="flex flex-col p-6 md:p-10 md:self-start border-2 bg-zinc-100 border-red-700 rounded-lg md:max-w-xl lg:max-w-2xl gap-4 md:gap-8 z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 text-center md:text-left">
            Order now and try the best tacos that money can buy.
          </h3>
          <ActionButtons />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
