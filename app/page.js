import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Technologies from "@/Components/Technologies";
import Experience from "@/Components/Experience";
import All_Certifications from "@/Components/All_Certifications";
import Bento from "@/Components/Bento";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="projects"><Projects /></div>
      <div id="technologies"><Technologies /></div>
      <div id="experience"><Experience /></div>
      <div id="bento"><Bento /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}
