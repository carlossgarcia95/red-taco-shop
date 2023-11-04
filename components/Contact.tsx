import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-900 w-full scroll-mt-16">
      <div className="container flex flex-col text-center items-center py-8">
        <p className="text-white uppercase font-mono mb-10">
          Have questions or suggestions?
        </p>
        <h3 className="text-white text-3xl font-bold mb-6">
          We would love your feeback!
        </h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
