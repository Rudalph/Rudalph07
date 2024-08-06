import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Technologies from "@/Components/Technologies";
import Experience from "@/Components/Experience";
import All_Certifications from "@/Components/All_Certifications";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Experience />
      <All_Certifications />
    </div>
  );
}
