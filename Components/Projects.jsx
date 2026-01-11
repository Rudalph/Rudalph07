import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { MdComment } from 'react-icons/md';
import Image from 'next/image';

// All accent borders updated to primary theme blue (or their own subtle blue/pink/emerald accent if you want)
const accent = "#3B82F6"; // consistent blue for highlights

const projects = [
  {
    title: "LIFE BALANCE 360",
    desc: "AI-powered application for monitoring health conditions",
    accent: accent,
    img: "/LB-360.jpg",
    github: "https://github.com/Rudalph/Life-Balance-360",
    demo: "https://life-balance-360.vercel.app/",
  },
  {
    title: "ZENITH-AI",
    desc: "GenAI-based web application to simplify banking tasks",
    accent: accent,
    img: "/Zenith-AI.jpg",
    github: "https://github.com/Rudalph/Bank-Of-Baroda-GenAI-Hackathon",
    demo: "https://zenith-ai-bob.vercel.app/",
  },
  {
    title: "CREATIVE TECHSCAPES",
    desc: "Portfolio website for Creative Techscapes software development agency",
    accent: accent,
    img: "/creative-techscapes.jpg",
    github: "https://github.com/CreativeTecscapes/Portfolio",
    demo: "https://creative-techscapes.vercel.app/",
  },
  {
    title: "JIVSANKLP",
    desc: "Protecting endangered species using ML and Deep Learning",
    accent: accent,
    img: "/jivsankalp.jpg",
    github: "https://github.com/RehanAlmeida/Jivsankalp",
    demo: "https://github.com/RehanAlmeida/Jivsankalp",
  },
  {
    title: "MEDISENSE",
    desc: "AI-powered app for report simplification and cost-effective medicines",
    accent: accent,
    img: "/Medisense-Image.jpg",
    github: "https://github.com/Rudalph/MediSense",
    demo: "https://medi-sense.vercel.app/",
  },
  {
    title: "SECURE PAY",
    desc: "Blockchain-based application for secure cross-border payments",
    accent: accent,
    img: "/Securepay-Image.jpg",
    github: "https://github.com/Rudalph/Rudalph07",
    demo: "https://secure-payments.vercel.app/",
  },
  {
    title: "RAG - CRCE",
    desc: "Retrieval-Augmented Generation guest lecture for Fr. CRCE",
    accent: accent,
    img: "/crce-rag-image.jpg",
    github: "https://github.com/Rudalph/frcrce-rag",
    demo: "https://frcrce-rag.vercel.app/",
  }
];

const Projects = () => (
  <section className="py-20 bg-[#F6F7FB] w-full">
    <div className="max-w-7xl mx-auto px-4">
      {/* Section Heading */}
      <div className="flex items-center mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">Projects</h2>
        <div className="flex-grow border-t border-[#e8ecf7]"></div>
      </div>
      
      {/* Responsive Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((p, i) => (
          <div key={i}
               className={`group card bg-white border-2 border-transparent rounded-2xl shadow-lg transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 hover:border-[#3B82F6]`}
               style={{ borderColor: p.accent }}>
            <figure className="px-6 pt-6 flex justify-center">
              <Image
                src={p.img}
                alt={p.title + " preview"}
                width={340}
                height={220}
                className="rounded-xl object-cover group-hover:scale-105 transition"
              />
            </figure>
            <div className="card-body px-6 py-5 text-center">
              <h3 className="card-title text-lg font-bold tracking-wide text-[#3B82F6]">{p.title}</h3>
              <p className="text-sm text-[#6c7583] mt-2">{p.desc}</p>
            </div>
            <div className="flex justify-center items-center gap-x-8 border-t border-[#e8ecf7] py-4">
              <a href={p.github} target="_blank"
                 className="text-[#6c7583] hover:text-[#3B82F6] transition"
                 aria-label="Github link for project">
                <FaGithub size={26} />
              </a>
              <a href={p.demo} target="_blank"
                 className="text-[#6c7583] hover:text-[#3B82F6] transition"
                 aria-label="Live demo link for project">
                <FaLink size={24} />
              </a>
              <button className="text-[#6c7583] hover:text-[#3B82F6] transition" aria-label="Comment or contact opportunity (not linked)">
                <MdComment size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
