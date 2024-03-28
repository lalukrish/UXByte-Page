import Hero from "@/components/hero";
import About from "@/components/About";
import LetsTalk from "@/components/LetsTalk";

export default function Home() {
  return (
    <div className="">
      <ul>
        <Hero />
      </ul>
      <About />
      <LetsTalk />
    </div>
  );
}
