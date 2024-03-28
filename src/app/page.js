import Hero from "@/components/hero";
import About from "@/components/About";
import LetsTalk from "@/components/LetsTalk";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <WhyUs/>
      <Services />
      <LetsTalk />
    </div>
  );
}
