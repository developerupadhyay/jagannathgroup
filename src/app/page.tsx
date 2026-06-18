import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Colleges from "@/components/Colleges";
import Council from "@/components/Council";
import Courses from "@/components/Courses";
import Placements from "@/components/Placements";
import Gallery from "@/components/Gallery";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Colleges />
      <Council />
      <Courses />
      <Gallery />
      <Placements />
      <Contact />
      <Admissions />
      <Footer />
    </>
  );
}
