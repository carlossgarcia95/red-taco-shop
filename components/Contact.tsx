import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-900 w-full scroll-mt-16">
      <div className="container flex flex-col text-center items-center gap-10 py-8">
        <p className="text-white uppercase font-mono">
          Have a special occasion?
        </p>
        <h3 className="text-white text-3xl font-bold mb-4">
          Book us for your event!
        </h3>
        <Link href='/events' className={buttonVariants({variant: 'default'})}>Book Event</Link>
        {/* <ContactForm /> */}
      </div>
    </section>
  );
};

export default Contact;
