// import React from "react";
// import { FaNetworkWired, FaServer } from "react-icons/fa";
// import { MdSecurity } from "react-icons/md";
// import { SiTestinglibrary } from "react-icons/si";

// // Blue accent to match theme
// const accent = "#3B82F6";
// const charcoal = "#21242B";

// const companyIcons = {
//   "Future Logic Systems Pvt. Ltd.": <FaNetworkWired size={38} className="text-[#3B82F6]" />,
//   "Arcon Techsolutions Pvt. Ltd.": <SiTestinglibrary size={38} className="text-yellow-500" />,
//   "VPN Digital Services Pvt. Ltd.": <FaServer size={38} className="text-emerald-600" />,
//   "Fire and Security Association of India": <MdSecurity size={38} className="text-rose-400" />,
// };

// const experience = [
//   {
//     role: "Software Development Engineer Intern",
//     company: "Future Logic Systems Pvt. Ltd.",
//     date: "Jan 2025 - Jun 2025",
//     location: "Mumbai, India",
//     icon: companyIcons["Future Logic Systems Pvt. Ltd."],
//     bullets: [
//       "Built scalable blockchain app with MERN/Ethereum/IPFS.",
//       "Collaborated in a 5-member team, demoed MVP to stakeholders.",
//       "Enabled 1,000+ verifications across 5+ companies.",
//     ],
//   },
//   {
//     role: "Automation Testing Engineer Intern",
//     company: "Arcon Techsolutions Pvt. Ltd.",
//     date: "2025",
//     location: "Mumbai, India",
//     icon: companyIcons["Arcon Techsolutions Pvt. Ltd."],
//     bullets: [
//       "Developed 150+ Java Playwright scripts for internal app testing.",
//       "Demoed scripts to QA team, achieved 70%+ test coverage.",
//       "Reduced manual effort by 40–50% via automation.",
//     ],
//   },
//   {
//     role: "Software Development Engineer Intern",
//     company: "VPN Digital Services Pvt. Ltd.",
//     date: "Feb 2024 - July 2024",
//     location: "Mumbai, India",
//     icon: companyIcons["VPN Digital Services Pvt. Ltd."],
//     bullets: [
//       "Developed MERN web app for cybercrime investigation workflow.",
//       "Helped deploy, maintain scalable codebase.",
//       "Presented MVP to stakeholders and delivered project on schedule.",
//     ],
//   },
//   {
//     role: "Software Development Engineer Intern",
//     company: "Fire and Security Association of India",
//     date: "July 2023 - September 2023",
//     location: "Mumbai, India",
//     icon: companyIcons["Fire and Security Association of India"],
//     bullets: [
//       "Built app to digitalize safety audit, mandal registration, scoring.",
//       "Added authentication, role-based access, geo-tagging, images.",
//       "Provided real-time safety data for faster Mumbai Police response.",
//     ],
//   },
// ];

// const Experience = () => (
//   <section className="bg-[#F7FAFC] py-16 px-4">
//     <div className="max-w-7xl mx-auto">
//       <div className="flex items-center mb-12">
//         <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">Experience</h2>
//         <div className="flex-grow border-t border-[#e8ecf7]"></div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {experience.map((exp, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-2xl shadow-md border border-[#e8ecf7] p-6 flex flex-col transition hover:shadow-xl hover:border-[#3B82F6]"
//           >
//             {/* Icon and header */}
//             <div className="flex items-center mb-2">
//               <span className="rounded-full bg-[#F3F7FC] p-2 border border-[#e8ecf7] shadow mr-3">
//                 {exp.icon}
//               </span>
//               <div>
//                 <div className="text-[#3B82F6] font-semibold text-base">{exp.role}</div>
//                 <div className="text-[#21242B] font-medium text-sm">{exp.company}</div>
//               </div>
//             </div>
//             {/* Date/location */}
//             <div className="text-xs text-[#6c7583] mb-3">
//               {exp.date}
//               {exp.location && ` | ${exp.location}`}
//             </div>
//             {/* Details */}
//             <ul className="list-disc pl-5 text-[#3a4260] text-sm md:text-[15px] space-y-1">
//               {exp.bullets.map((line, i) => (
//                 <li key={i}>{line}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Experience;


'use client'
import React, { useState } from 'react';
import { FaNetworkWired, FaServer } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { SiTestinglibrary } from 'react-icons/si';

// Theme colors
const accent = '#3B82F6';
const charcoal = '#21242B';

// Certificate paths (place files in public/certificates/)
const certificateUrls = {
  'Future Logic Systems Pvt. Ltd.': '/certificates/future-logic-2025.pdf',
  'Arcon Techsolutions Pvt. Ltd.': '/certificates/arcon-2025.pdf',
  'VPN Digital Services Pvt. Ltd.': '/certificates/vpn-digital-2024.pdf',
  'Fire and Security Association of India': '/certificates/fsai-2023.pdf',
};

const companyIcons = {
  'Future Logic Systems Pvt. Ltd.': (
    <FaNetworkWired size={38} className="text-[#3B82F6]" />
  ),
  'Arcon Techsolutions Pvt. Ltd.': (
    <SiTestinglibrary size={38} className="text-yellow-500" />
  ),
  'VPN Digital Services Pvt. Ltd.': (
    <FaServer size={38} className="text-emerald-600" />
  ),
  'Fire and Security Association of India': (
    <MdSecurity size={38} className="text-rose-400" />
  ),
};

const experiences = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Future Logic Systems Pvt. Ltd.',
    date: 'Jan 2025 - Jun 2025',
    location: 'Mumbai, India',
    icon: companyIcons['Future Logic Systems Pvt. Ltd.'],
    bullets: [
      'Built scalable blockchain application using MERN stack, Ethereum, and IPFS.',
      'Collaborated in a 5-member team and successfully demoed MVP to stakeholders.',
      'Enabled 1,000+ document verifications across 5+ companies.',
    ],
  },
  {
    role: 'Automation Testing Engineer Intern',
    company: 'Arcon Techsolutions Pvt. Ltd.',
    date: 'Jan 2025 - May 2025', // ← corrected/estimated full period
    location: 'Mumbai, India',
    icon: companyIcons['Arcon Techsolutions Pvt. Ltd.'],
    bullets: [
      'Developed 150+ Java Playwright automation scripts for internal applications.',
      'Presented automation framework to QA team achieving 70%+ test coverage.',
      'Reduced manual testing effort by 40–50% through automation.',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'VPN Digital Services Pvt. Ltd.',
    date: 'Feb 2024 - Jul 2024',
    location: 'Mumbai, India',
    icon: companyIcons['VPN Digital Services Pvt. Ltd.'],
    bullets: [
      'Developed MERN stack web application for cybercrime investigation workflow.',
      'Assisted in deployment and maintenance of scalable codebase.',
      'Presented MVP to stakeholders and delivered project on schedule.',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'Fire and Security Association of India',
    date: 'Jul 2023 - Sep 2023',
    location: 'Mumbai, India',
    icon: companyIcons['Fire and Security Association of India'],
    bullets: [
      'Built application to digitalize safety audits, mandal registration, and scoring.',
      'Implemented authentication, role-based access control, geo-tagging, and image uploads.',
      'Enabled real-time safety data access for faster response by Mumbai Police.',
    ],
  },
];

const Experience = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openCertificate = (company) => {
    setSelectedPdf(certificateUrls[company]);
  };

  const closeModal = () => {
    setSelectedPdf(null);
  };

  return (
    <section className="bg-[#F7FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">
            Experience
          </h2>
          <div className="flex-grow border-t border-[#e8ecf7]" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-1 bg-[#e8ecf7] h-full" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative mb-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot + Icon */}
              <div className="z-10 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-[#3B82F6] flex items-center justify-center shadow-md">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div
                className={`bg-white rounded-2xl shadow-md border border-[#e8ecf7] p-6 flex-1 transition-all duration-300 hover:shadow-xl hover:border-[#3B82F6] w-full md:w-[45%] ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}
              >
                <div className="mb-3">
                  <div className="text-[#3B82F6] font-semibold text-base md:text-lg">
                    {exp.role}
                  </div>
                  <div className="text-[#21242B] font-medium text-sm md:text-base mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs md:text-sm text-[#6c7583] mb-4">
                  {exp.date} {exp.location && ` • ${exp.location}`}
                </div>

                <ul className="list-disc pl-5 text-[#3a4260] text-sm md:text-base space-y-2">
                  {exp.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {certificateUrls[exp.company] && (
                  <button
                    onClick={() => openCertificate(exp.company)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] hover:text-blue-700 transition"
                  >
                    View Certificate →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b">
              <h3 className="text-lg font-semibold text-[#21242B]">
                Internship Certificate
              </h3>
              <button
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-gray-50 overflow-auto">
              <iframe
                src={selectedPdf}
                title="Certificate PDF"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Footer hint */}
            <div className="px-5 py-2 text-xs text-gray-500 text-center border-t">
              Use Ctrl + mouse wheel / pinch to zoom
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;