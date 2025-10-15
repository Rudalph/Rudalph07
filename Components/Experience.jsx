// import React from "react";
// import { FaNetworkWired, FaServer } from "react-icons/fa";
// import { MdSecurity } from "react-icons/md";
// import { SiTestinglibrary } from "react-icons/si";

// const companyIcons = {
//   "Future Logic Systems Pvt. Ltd.": <FaNetworkWired size={38} className="text-blue-500" />,
//   "Arcon Techsolutions Pvt. Ltd.": <SiTestinglibrary size={38} className="text-yellow-500" />,
//   "VPN Digital Services Pvt. Ltd.": <FaServer size={38} className="text-teal-600" />,
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
//         <h2 className="text-2xl lg:text-4xl font-bold text-[#3A3054] tracking-wide mr-3">Experience</h2>
//         <div className="flex-grow border-t border-[#E9EAF3]"></div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {experience.map((exp, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-2xl shadow-md border border-[#ebedf0] p-6 flex flex-col lg:min-h-[245px] transition hover:shadow-lg"
//           >
//             {/* Icon and header */}
//             <div className="flex items-center mb-2">
//               <span className="rounded-full bg-[#f5f5fa] p-2 border border-[#eaeaea] shadow mr-3">
//                 {exp.icon}
//               </span>
//               <div>
//                 <div className="text-[#7B4DFE] font-semibold text-base">{exp.role}</div>
//                 <div className="text-[#3A3054] font-medium text-sm">{exp.company}</div>
//               </div>
//             </div>
//             {/* Date/location */}
//             <div className="text-xs text-[#767191] mb-3">
//               {exp.date}
//               {exp.location && ` | ${exp.location}`}
//             </div>
//             {/* Details */}
//             <ul className="list-disc pl-5 text-[#445174] text-sm md:text-[15px] space-y-1">
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



import React from "react";
import { FaNetworkWired, FaServer } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { SiTestinglibrary } from "react-icons/si";

// Blue accent to match theme
const accent = "#3B82F6";
const charcoal = "#21242B";

const companyIcons = {
  "Future Logic Systems Pvt. Ltd.": <FaNetworkWired size={38} className="text-[#3B82F6]" />,
  "Arcon Techsolutions Pvt. Ltd.": <SiTestinglibrary size={38} className="text-yellow-500" />,
  "VPN Digital Services Pvt. Ltd.": <FaServer size={38} className="text-emerald-600" />,
  "Fire and Security Association of India": <MdSecurity size={38} className="text-rose-400" />,
};

const experience = [
  {
    role: "Software Development Engineer Intern",
    company: "Future Logic Systems Pvt. Ltd.",
    date: "Jan 2025 - Jun 2025",
    location: "Mumbai, India",
    icon: companyIcons["Future Logic Systems Pvt. Ltd."],
    bullets: [
      "Built scalable blockchain app with MERN/Ethereum/IPFS.",
      "Collaborated in a 5-member team, demoed MVP to stakeholders.",
      "Enabled 1,000+ verifications across 5+ companies.",
    ],
  },
  {
    role: "Automation Testing Engineer Intern",
    company: "Arcon Techsolutions Pvt. Ltd.",
    date: "2025",
    location: "Mumbai, India",
    icon: companyIcons["Arcon Techsolutions Pvt. Ltd."],
    bullets: [
      "Developed 150+ Java Playwright scripts for internal app testing.",
      "Demoed scripts to QA team, achieved 70%+ test coverage.",
      "Reduced manual effort by 40–50% via automation.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "VPN Digital Services Pvt. Ltd.",
    date: "Feb 2024 - July 2024",
    location: "Mumbai, India",
    icon: companyIcons["VPN Digital Services Pvt. Ltd."],
    bullets: [
      "Developed MERN web app for cybercrime investigation workflow.",
      "Helped deploy, maintain scalable codebase.",
      "Presented MVP to stakeholders and delivered project on schedule.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Fire and Security Association of India",
    date: "July 2023 - September 2023",
    location: "Mumbai, India",
    icon: companyIcons["Fire and Security Association of India"],
    bullets: [
      "Built app to digitalize safety audit, mandal registration, scoring.",
      "Added authentication, role-based access, geo-tagging, images.",
      "Provided real-time safety data for faster Mumbai Police response.",
    ],
  },
];

const Experience = () => (
  <section className="bg-[#F7FAFC] py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">Experience</h2>
        <div className="flex-grow border-t border-[#e8ecf7]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-[#e8ecf7] p-6 flex flex-col transition hover:shadow-xl hover:border-[#3B82F6]"
          >
            {/* Icon and header */}
            <div className="flex items-center mb-2">
              <span className="rounded-full bg-[#F3F7FC] p-2 border border-[#e8ecf7] shadow mr-3">
                {exp.icon}
              </span>
              <div>
                <div className="text-[#3B82F6] font-semibold text-base">{exp.role}</div>
                <div className="text-[#21242B] font-medium text-sm">{exp.company}</div>
              </div>
            </div>
            {/* Date/location */}
            <div className="text-xs text-[#6c7583] mb-3">
              {exp.date}
              {exp.location && ` | ${exp.location}`}
            </div>
            {/* Details */}
            <ul className="list-disc pl-5 text-[#3a4260] text-sm md:text-[15px] space-y-1">
              {exp.bullets.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
