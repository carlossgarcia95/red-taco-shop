import About from "@/components/About";
import Hero from "../components/Hero";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Awards from "@/components/Awards";

export default function Home() {
  return (
    <main className="flex flex-col items-center scroll-mt-32">
      <Hero />
      <hr />
      <About />
      <Menu />
      <hr />
      <Awards />
      <hr />
      <Location />
      <Contact />
    </main>
  );
}
