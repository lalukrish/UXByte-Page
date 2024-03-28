import Hero from "@/components/hero";
import About from "@/components/About";
import LetsTalk from "@/components/LetsTalk";
// import Services from "@/components/Services";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      {/* <Services /> */}
      <Services />
      <LetsTalk />
    </div>
  );
}
