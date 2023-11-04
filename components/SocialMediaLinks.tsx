import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SocialMediaLinks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures it triggers the animation only once
  });
  return (
    <div className="my-8 md:py-10 md:my-10">
      <h3 className="section-heading text-center mb-6 md:mb-10">
        Follow us on social media
      </h3>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-40">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 1 }}
          animate={inView ? { x: 0, opacity: 1, scale: 1 } : {}}
          ref={ref}
          transition={{ duration: 1, delay: 1}}
        >
          <FaWhatsapp size={100} className="mb-4 text-zinc-900" />
          <h4 className="font-bold">505-977-1146</h4>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 1 }}
          animate={inView ? { x: 0, opacity: 1, scale: 1 } : {}}
          ref={ref}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="https://www.facebook.com/REDTACOSHOP" target="_blank">
            <FaFacebook size={100} className="mb-4 text-zinc-900" />
          </a>
          <h4 className="font-bold">redtacoshop</h4>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 1 }}
          animate={inView ? { x: 0, opacity: 1, scale: 1 } : {}}
          ref={ref}
          transition={{ duration: 1, delay: 2 }}
        >
          <a href="https://www.instagram.com/redtaco_shop/" target="_blank">
            <FaInstagram size={100} className="mb-4 text-zinc-900" />
          </a>
          <h4 className="font-bold">redtaco_shop</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
