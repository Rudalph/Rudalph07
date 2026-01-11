'use client';
import React, { useState } from 'react';
import { FaGavel, FaUserGraduate } from 'react-icons/fa';

// Theme colors
const accent = '#3B82F6';

// Certificate paths (place actual PDFs in public/certificates/)
const certificateUrls = {
  judging: '/certificates/sih-judging-2025.pdf',
  mentoringBitNBuild2025: '/judgingmentoring/mentor_bnb_2025.pdf',
  mentoringBitNBuild2024: '/judgingmentoring/mentor_bnb_2024.pdf',
  vpnipsletter: '/judgingmentoring/vpn_ips_letter.pdf'
};

const experienceData = [
  {
    role: 'Hackathon Judge',
    event: 'Smart India Hackathon (SIH) 2025 – Internal Round',
    college: 'Fr. Conceicao Rodrigues College of Engineering',
    description:
      'Evaluated projects on innovation, feasibility, technical depth, and real-world impact.',
    icon: <FaGavel className="text-rose-500" size={28} />,
    certificate: {
      title: 'Judging Certificate – SIH 2025',
      pdfKey: 'judging',
    },
  },
  {
    role: 'Hackathon Mentor',
    event: 'Bit N Build 2025',
    college: 'Fr. Conceicao Rodrigues College of Engineering',
    description:
      'Guided teams on system design, AI/ML integration, debugging, and presentation skills.',
    icon: <FaUserGraduate className="text-[#3B82F6]" size={28} />,
    certificate: {
      title: 'Mentoring Certificate – Bit N Build 2025',
      pdfKey: 'mentoringBitNBuild2025',
    },
  },
  {
    role: 'Hackathon Mentor',
    event: 'Bit N Build 2024',
    college: 'Fr. Conceicao Rodrigues College of Engineering',
    description:
      'Mentored teams with focus on clean architecture and effective project delivery',
    icon: <FaUserGraduate className="text-emerald-600" size={28} />,
    certificate: {
      title: 'Mentoring Certificate – Bit N Build 2024',
      pdfKey: 'mentoringBitNBuild2024',
    },
  },
  {
    role: 'Trainer',
    event: 'Cyber Crime Investigation Traning',
    college: 'Dy. Commissioner of Police (Mumbai, Zone-I)',
    description:
      'Demonstrated the use of modern application developed by VPN Digital Service in cyber crime investigation',
    icon: <FaUserGraduate className="text-emerald-600" size={28} />,
    certificate: {
      title: 'Mentoring Certificate – Bit N Build 2024',
      pdfKey: 'vpnipsletter',
    },
    
  },
];

const MentoringJudging = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openCertificate = (pdfKey) => {
    setSelectedPdf(certificateUrls[pdfKey] || null);
  };

  const closeModal = () => {
    setSelectedPdf(null);
  };

  return (
    <section className="py-16 lg:py-10 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-4">
            Mentoring & Judging Experience
          </h2>
          <div className="flex-grow border-t border-[#e8ecf7]" />
        </div>

        {/* Small clickable cards – full width on mobile, 2–3 columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              onClick={() => item.certificate && openCertificate(item.certificate.pdfKey)}
              className={`
                group bg-white border border-[#e8ecf7] rounded-2xl p-5 
                shadow-sm hover:shadow-md hover:border-[#3B82F6] 
                transition-all duration-300 cursor-pointer
                flex flex-col h-full min-h-[180px]
                ${item.certificate ? 'hover:scale-[1.02]' : ''}
              `}
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-3">
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-[#F3F7FC] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#21242B] group-hover:text-[#3B82F6] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[#3B82F6] font-medium">
                    {item.event}
                  </p>
                </div>
              </div>

              {/* College (if any) */}
              {item.college && (
                <p className="text-xs text-[#6c7583] mb-2 italic">
                  {item.college}
                </p>
              )}

              {/* Description */}
              <p className="text-sm text-[#6c7583] leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Certificate hint (only if exists) */}
              {item.certificate && (
                <div className="mt-3 text-xs text-[#3B82F6] font-medium group-hover:opacity-100 transition-opacity">
                  Click to view certificate →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-5 py-3 border-b">
              <h3 className="text-lg font-semibold text-[#21242B]">
                Certificate
              </h3>
              <button
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="flex-1 bg-gray-50 overflow-auto">
              <iframe
                src={selectedPdf}
                title="Certificate PDF"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="px-5 py-2.5 text-xs text-gray-500 text-center border-t">
              Use Ctrl + mouse wheel / pinch to zoom • Click outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MentoringJudging;