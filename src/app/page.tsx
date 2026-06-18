import Hero from "@/components/Hero";
import About from "@/components/About";
import Colleges from "@/components/Colleges";
import Council from "@/components/Council";
import Courses from "@/components/Courses";
import Placements from "@/components/Placements";
import Gallery from "@/components/Gallery";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Colleges />
      <Council />
      <Courses />
      <Gallery />
      <Placements />
      <Contact />
      <Admissions />
    </>
  );
}
