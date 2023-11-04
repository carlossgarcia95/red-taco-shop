"use client";

import ActionButtons from "@/components/ActionButtons";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="intro" className="relative w-full">
      <Image
        src="/background.png"
        alt="background image"
        fill
        className="object-fit blur-[70px]"
      />
      <div className="container py-20 flex flex-col justify-center items-center gap-4 md:gap-10 text-center">
        <motion.h1
          className="text-zinc-900 z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Red Taco Shop
        </motion.h1>
        <motion.h2
          className="text-zinc-00 z-10 text-3xl md:text-5xl font-extralight mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          Love at first bite
        </motion.h2>

        <motion.div
          className="flex flex-col p-6 md:p-10 md:self-start border-2 bg-white rounded-lg border-red-700 md:max-w-xl lg:max-w-2xl gap-4 z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 75,
              restDelta: 0.001,
            },
            delay: 0.1,
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-left">
            The best birria tacos that money can buy.
          </h3>
          <ActionButtons />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
