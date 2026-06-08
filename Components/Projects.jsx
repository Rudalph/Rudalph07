// import React from 'react';
// import { FaGithub, FaLink } from 'react-icons/fa';
// import { MdComment } from 'react-icons/md';
// import Image from 'next/image';

// // All accent borders updated to primary theme blue (or their own subtle blue/pink/emerald accent if you want)
// const accent = "#3B82F6"; // consistent blue for highlights

// const projects = [
//   // {
//   //   title: "LIFE BALANCE 360",
//   //   desc: "AI-powered application for monitoring health conditions",
//   //   accent: accent,
//   //   img: "/LB-360.jpg",
//   //   github: "https://github.com/Rudalph/Life-Balance-360",
//   //   demo: "https://life-balance-360.vercel.app/",
//   // },
//   {
//     title: "MEDISENSE",
//     desc: "AI powered",
//     accent: accent,
//     img: "/Medisense-Image.jpg",
//     github: "https://github.com/Rudalph/MediSense",
//     demo: "https://medi-sense.vercel.app/",
//   },
//   {
//     title: "JIVSANKLP",
//     desc: "Protecting endangered species using ML and Deep Learning",
//     accent: accent,
//     img: "/jivsankalp.jpg",
//     github: "https://github.com/RehanAlmeida/Jivsankalp",
//     demo: "https://github.com/RehanAlmeida/Jivsankalp",
//   },
//   {
//     title: "SECURE PAY",
//     desc: "Blockchain-based application for secure cross-border payments",
//     accent: accent,
//     img: "/Securepay-Image.jpg",
//     github: "https://github.com/Rudalph/Rudalph07",
//     demo: "https://secure-payments.vercel.app/",
//   },
//   {
//     title: "VALIDIUM",
//     desc: "Real-Time Machine Learning Powered Blockchain Fraud Detection Application.",
//     accent: accent,
//     img: "/validium-project.jpeg",
//     github: "https://github.com/Rudalph/fraudmesh",
//     demo: "https://validium-ai.vercel.app/",
//   },
//   {
//     title: "CONSENSUS-AI",
//     desc: "Annotation Platform with Built-in Agreement and Consensus Analysis",
//     accent: accent,
//     img: "/consensusAI.jpeg",
//     github: "https://github.com/Rudalph/data-annotation",
//     demo: "https://collaborative-annotation-platform.vercel.app/",
//   },
//   {
//     title: "GIG PROOF",
//     desc: "Decentralized freelancing marketplace where clients and freelancers connect",
//     accent: accent,
//     img: "/gig-proof-project.jpeg",
//     github: "https://github.com/Rudalph/gig-proof",
//     demo: "https://gig-proof.vercel.app/",
//   },
//   {
//     title: "COOLABS",
//     desc: "Team Collaboration & Workflow Management Platform.",
//     accent: accent,
//     img: "/coolabs-project.jpeg",
//     github: "https://github.com/Rudalph/coolabs",
//     demo: "https://coolabs.vercel.app/",
//   },
//   {
//     title: "ZENITH-AI",
//     desc: "GenAI-based web application to simplify banking tasks",
//     accent: accent,
//     img: "/Zenith-AI.jpg",
//     github: "https://github.com/Rudalph/Bank-Of-Baroda-GenAI-Hackathon",
//     demo: "https://zenith-ai-bob.vercel.app/",
//   },
//   {
//     title: "CREATIVE TECHSCAPES",
//     desc: "Portfolio website for Creative Techscapes software development agency",
//     accent: accent,
//     img: "/creative-techscapes.jpg",
//     github: "https://github.com/CreativeTecscapes/Portfolio",
//     demo: "https://creative-techscapes.vercel.app/",
//   },
//   {
//     title: "RAG - CRCE",
//     desc: "Retrieval-Augmented Generation guest lecture for Fr. CRCE",
//     accent: accent,
//     img: "/crce-rag-image.jpg",
//     github: "https://github.com/Rudalph/frcrce-rag",
//     demo: "https://frcrce-rag.vercel.app/",
//   }
// ];

// const Projects = () => (
//   <section className="py-20 bg-[#F6F7FB] w-full">
//     <div className="max-w-7xl mx-auto px-4">
//       {/* Section Heading */}
//       <div className="flex items-center mb-12">
//         <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">Projects</h2>
//         <div className="flex-grow border-t border-[#e8ecf7]"></div>
//       </div>
      
//       {/* Responsive Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//         {projects.map((p, i) => (
//           <div key={i}
//                className={`group card bg-white border-2 border-transparent rounded-2xl shadow-lg transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 hover:border-[#3B82F6]`}
//                style={{ borderColor: p.accent }}>
//             <figure className="px-6 pt-6 flex justify-center">
//               <Image
//                 src={p.img}
//                 alt={p.title + " preview"}
//                 width={340}
//                 height={220}
//                 className="rounded-xl object-cover group-hover:scale-105 transition"
//               />
//             </figure>
//             <div className="card-body px-6 py-5 text-center">
//               <h3 className="card-title text-lg font-bold tracking-wide text-[#3B82F6]">{p.title}</h3>
//               <p className="text-sm text-[#6c7583] mt-2">{p.desc}</p>
//             </div>
//             <div className="flex justify-center items-center gap-x-8 border-t border-[#e8ecf7] py-4">
//               <a href={p.github} target="_blank"
//                  className="text-[#6c7583] hover:text-[#3B82F6] transition"
//                  aria-label="Github link for project">
//                 <FaGithub size={26} />
//               </a>
//               <a href={p.demo} target="_blank"
//                  className="text-[#6c7583] hover:text-[#3B82F6] transition"
//                  aria-label="Live demo link for project">
//                 <FaLink size={24} />
//               </a>
//               {/* <button className="text-[#6c7583] hover:text-[#3B82F6] transition" aria-label="Comment or contact opportunity (not linked)">
//                 <MdComment size={24} />
//               </button> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Projects;


import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: "MEDISENSE",
    tag: "AI · Healthcare",
    bullets: [
      "Developed a Gen-AI healthcare platform using scalable backend APIs, async data pipelines, and retrieval workflows to identify cheaper medicine alternatives and securely analyze historical medical reports.",
    ],
    img: "/Medisense-Image.jpg",
    github: "https://github.com/Rudalph/MediSense",
    demo: "https://medi-sense.vercel.app/",
  },
  {
    title: "JIVSANKALP",
    tag: "ML · Conservation",
    bullets: [
      "Developed a Machine Learning based application to capture and detect endangered animals and their distress calls, enabling real-time wildlife monitoring to support conservation efforts.",
    ],
    img: "/jivsankalp.jpg",
    github: "https://github.com/RehanAlmeida/Jivsankalp",
    demo: "https://github.com/RehanAlmeida/Jivsankalp",
  },
  {
    title: "SECURE PAY",
    tag: "Blockchain · Fintech",
    bullets: [
      "Built a payment platform enabling users to purchase crypto using Stripe payments and transfer assets internationally to bypass traditional cross-border transaction limitations.",
    ],
    img: "/Securepay-Image.jpg",
    github: "https://github.com/Rudalph/Rudalph07",
    demo: "https://secure-payments.vercel.app/",
  },
  {
    title: "VALIDIUM",
    tag: "ML · Blockchain",
    bullets: [
      "Developed an end-to-end ML platform to detect fraudulent Ethereum transactions using real-time prediction APIs and a full-stack monitoring dashboard for blockchain transaction analysis.",
    ],
    img: "/validium-project.jpeg",
    github: "https://github.com/Rudalph/fraudmesh",
    demo: "https://validium-ai.vercel.app/",
  },
  {
    title: "CONSENSUS-AI",
    tag: "AI · Annotation",
    bullets: [
      "Developed a scalable collaborative annotation platform enabling multiple users to label datasets with real-time workflows. Integrated consensus analysis, annotator tracking, and JSON export to support AI/ML data pipelines.",
    ],
    img: "/consensusAI.jpeg",
    github: "https://github.com/Rudalph/data-annotation",
    demo: "https://collaborative-annotation-platform.vercel.app/",
  },
  {
    title: "GIG PROOF",
    tag: "Blockchain · Freelance",
    bullets: [
      "A decentralized freelancing marketplace where clients and freelancers connect, collaborate, and complete projects with secure blockchain-based payments and transparent agreements.",
    ],
    img: "/gig-proof-project.jpeg",
    github: "https://github.com/Rudalph/gig-proof",
    demo: "https://gig-proof.vercel.app/",
  },
  {
    title: "COOLABS",
    tag: "Productivity · SaaS",
    bullets: [
      "Built a full-stack collaboration platform with API integrations enabling teams to manage tasks, track bugs, and coordinate development workflows through integrated project management and communication features.",
    ],
    img: "/coolabs-project.jpeg",
    github: "https://github.com/Rudalph/coolabs",
    demo: "https://coolabs.vercel.app/",
  },
  // {
  //   title: "ZENITH-AI",
  //   tag: "GenAI · Banking",
  //   bullets: [
  //     "GenAI web app to simplify everyday banking tasks. Conversational interface for account management. Built for Bank of Baroda GenAI Hackathon",
  //   ],
  //   img: "/Zenith-AI.jpg",
  //   github: "https://github.com/Rudalph/Bank-Of-Baroda-GenAI-Hackathon",
  //   demo: "https://zenith-ai-bob.vercel.app/",
  // },
  // {
  //   title: "CREATIVE TECHSCAPES",
  //   tag: "Agency · Portfolio",
  //   bullets: [
  //     "Portfolio website for a software development agency",
  //     "Showcases services, case studies, and team profiles",
  //     "Fully responsive with modern UI animations",
  //   ],
  //   img: "/creative-techscapes.jpg",
  //   github: "https://github.com/CreativeTecscapes/Portfolio",
  //   demo: "https://creative-techscapes.vercel.app/",
  // },
  {
    title: "RAG - CRCE",
    tag: "GenAI · Education",
    bullets: [
      "Retrieval-Augmented Generation guest lecture resource. Demonstrates RAG pipeline with live document Q&A. Built for Fr. CRCE college AI seminar series",
    ],
    img: "/crce-rag-image.jpg",
    github: "https://github.com/Rudalph/frcrce-rag",
    demo: "https://frcrce-rag.vercel.app/",
  },
];

const ProjectCard = ({ p }) => (
  <div className="group flex flex-col bg-white rounded-2xl border border-[#3B82F6] overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-[#3B82F6] h-full">

    {/* Image — full width, fixed height, no cropping issues */}
    <div className="relative w-full h-48 overflow-hidden bg-[#f0f4fb] shrink-0">
      <Image
        src={p.img}
        alt={p.title + " preview"}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
      />
      {/* Category tag — top-right corner */}
      <span className="absolute top-3 right-3 bg-[#3B82F6] text-[white] text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full border border-[#dbeafe]">
        {p.tag}
      </span>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 px-5 pt-4 pb-5">

      {/* Title */}
      <h3 className="text-sm font-bold tracking-widest text-[#3B82F6] mb-3">
        {p.title}
      </h3>

      {/* Bullet points */}
      <ul className="space-y-2 flex-1">
        {p.bullets.map((point, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-[#6c7583] leading-snug">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#e8ecf7]">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#6c7583] hover:text-[#3B82F6] transition-colors duration-150 border border-[#e8ecf7] hover:border-[#3B82F6] rounded-lg px-3 py-1.5"
          aria-label={`GitHub repository for ${p.title}`}
        >
          <FaGithub size={13} />
          GitHub
        </a>
        <a
          href={p.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#6c7583] hover:text-[#3B82F6] transition-colors duration-150 border border-[#e8ecf7] hover:border-[#3B82F6] rounded-lg px-3 py-1.5"
          aria-label={`Live demo for ${p.title}`}
        >
          <FaLink size={12} />
          Live demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section className="py-20 bg-[#F6F7FB] w-full">
    <div className="max-w-7xl mx-auto px-4">

      {/* Section Heading */}
      <div className="flex items-center mb-10">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-4 shrink-0">
          Projects
        </h2>
        <div className="flex-grow border-t border-[#e8ecf7]" />
      </div>

      {/* 2-column responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>

    </div>
  </section>
);

export default Projects;