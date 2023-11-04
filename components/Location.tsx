"use client";

import { motion } from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import SocialMediaLinks from "./SocialMediaLinks";

const Location = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures it triggers the animation only once
  });
  return (
    <section
      id="location"
      className="w-full bg-gradient-to-r from-white to-red-100 scroll-mt-16"
    >
      <div className="container justify-center max-w-7xl">
        <h3 className="section-heading text-center my-5 md:my-10">Find Us</h3>
        <div className="relative flex flex-col-reverse md:flex-row gap-6 justify-between">
          <div className="google-map flex-1 max-w-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.3846893527493!2d-106.7031619!3d35.196885699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872271ebae995db3%3A0x1f8232d473eaf7f1!2sParadise%20Blvd%20NW%20%26%20Unser%20Blvd%20NW%2C%20Albuquerque%2C%20NM%2087114%2C%20USA!5e0!3m2!1sen!2smx!4v1698453723520!5m2!1sen!2smx"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex-1 self-center max-w-sm">
            <motion.h3
              className="section-text z-50"
              initial={{ x: -20, opacity: 0, scale: 1 }}
              animate={inView ? { x: 0, opacity: 1, scale: 1 } : {}}
              ref={ref}
            >
              Located in the heart of Alburquerque, New Mexico, you can find us
              between{" "}
              <span className="font-bold text-black">
                Unser & Paradise Blvd.
              </span>
            </motion.h3>
            <motion.div
            initial={{ x: 20, opacity: 0, scale: 1 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : {}}
            ref={ref}
            transition={{ delay: 0.8 }}
            >
              <TbTargetArrow
                size={200}
                className="hidden md:flex text-zinc-900"
              />
            </motion.div>
          </div>
        </div>
        <SocialMediaLinks />
      </div>
    </section>
  );
};

export default Location;
