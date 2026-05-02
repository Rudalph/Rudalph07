// 'use client'
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Theme colors
// const accent = '#3B82F6';
// const charcoal = '#21242B';

// // Talk data (you can replace with your real talks)
// const talks = [
//   {
//     type: 'Guest Lecturer',
//     title: 'Decentralized App. Development',
//     event: 'Blockchain',
//     date: 'November 2025',
//     description:
//       'Delivered a lecture on Blockchain and Hardhat for final-year engineering students',
//     image: '/talks/blockchain_talk.jpg',
//   },
//   {
//     type: 'Guest Lecturer',
//     title: 'Retrieval Augmented Generation',
//     event: 'Artificial Intelligence',
//     date: 'November 2025',
//     description:
//       'Led a Retrieval-Augmented Generation lecture for final-year engineering students',
//     image: '/talks/rag_talk.jpg',
//   },
//   {
//     type: 'Guest Lecturer',
//     title: 'How to Ace Hackathons',
//     event: 'Smart India Hackathon',
//     date: 'December 2025',
//     description:
//       'Guided participants on structuring and solving hackathon problem statements',
//     image: '/talks/hackathon_talk.jpg',
//   },
//   {
//     type: 'Speaker',
//     title: 'Faculty Development Program',
//     event: 'Generative AI',
//     date: 'September 2025',
//     description:
//       'Conducted a technical session on Retrieval-Augmented Generation for faculty members of engineering colleges across India',
//     image: '/talks/rag_fdp_talk.jpg',
//   },
//   {
//     type: 'Speaker',
//     title: 'Faculty Development Program',
//     event: 'Agentic AI',
//     date: 'September 2025',
//     description:
//       'Delivered a session on Model Context Protocol and Agent-to-Agent Protocol for engineering faculty across India',
//     image: '/talks/mcp_fdp_talk.jpg',
//   },
//   {
//     type: 'Speaker',
//     title: 'Docker & Kubernetes',
//     event: 'Cloud Computing',
//     date: 'April 2026',
//     description:
//       'Delivered a session on Cloud Computing Technologies Docker and Kubernetes for 3rd Year Engineering Students at Fr.CRCE',
//     image: '/talks/cloud-computing-session.jpeg',
//   },
// ];

// const Talks = () => {
//   return (
//     <section id='talks' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="flex items-center mb-10">
//           <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">
//             Talks
//           </h2>
//           <div className="flex-grow border-t border-[#e8ecf7]" />
//         </div>

//         {/* Summary */}
//         <div className="text-center mb-12">
//           <p className="text-lg md:text-xl text-[#6c7583]">
//             Invited as <span className="font-semibold text-[#3B82F6]">Guest Lecturer</span> — 4 times
//             {' '} &{' '}
//             <span className="font-semibold text-[#3B82F6]">Speaker</span> — 2 times
//           </p>
//         </div>

//         {/* Carousel */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop={true}
//           className="!pb-14"
//         >
//           {talks.map((talk, index) => (
//             <SwiperSlide key={index}>
//               <div className="h-full">
//                 <div 
//                   className="
//                     bg-white rounded-2xl 
//                     shadow-md border border-[#e8ecf7] 
//                     overflow-hidden 
//                     transition-all duration-300 
//                     hover:shadow-xl hover:border-[#3B82F6]
//                     flex flex-col
//                     h-[480px]              /* ← Fixed height */
//                     w-full max-w-[380px]   /* ← Fixed max width */
//                     mx-auto
//                   "
//                 >
//                   {/* Image - fixed aspect ratio */}
//                   <div className="relative h-56 flex-shrink-0 overflow-hidden">
//                     <img
//                       src={talk.image}
//                       alt={talk.title}
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                       loading="lazy"
//                     />
//                     <div className="absolute top-4 left-4 bg-[#3B82F6] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
//                       {talk.type}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col flex-grow">
//                     <h3 className="text-lg font-semibold text-[#21242B] mb-2 line-clamp-2 min-h-[3rem]">
//                       {talk.title}
//                     </h3>
                    
//                     <div className="text-sm text-[#6c7583] mb-4">
//                       {talk.event} • {talk.date}
//                     </div>
                    
//                     <p className="text-sm text-[#3a4260] line-clamp-5 flex-grow">
//                       {talk.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Talks;

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const accent = '#3B82F6';
const charcoal = '#21242B';

const talks = [
  {
    type: 'Guest Lecturer',
    title: 'Decentralized App. Development',
    event: 'Blockchain',
    date: 'November 2025',
    description:
      'Delivered a lecture on Blockchain and Hardhat for final-year engineering students.',
    image: '/talks/blockchain_talk.jpg',
  },
  {
    type: 'Guest Lecturer',
    title: 'Retrieval Augmented Generation',
    event: 'Artificial Intelligence',
    date: 'November 2025',
    description:
      'Led a Retrieval-Augmented Generation lecture for final-year engineering students.',
    image: '/talks/rag_talk.jpg',
  },
  {
    type: 'Guest Lecturer',
    title: 'How to Ace Hackathons',
    event: 'Smart India Hackathon',
    date: 'December 2025',
    description:
      'Guided participants on structuring and solving hackathon problem statements.',
    image: '/talks/hackathon_talk.jpg',
  },
  {
    type: 'Speaker',
    title: 'Faculty Development Program',
    event: 'Generative AI',
    date: 'September 2025',
    description:
      'Conducted a technical session on Retrieval-Augmented Generation for faculty members of engineering colleges across India.',
    image: '/talks/rag_fdp_talk.jpg',
  },
  {
    type: 'Speaker',
    title: 'Faculty Development Program',
    event: 'Agentic AI',
    date: 'September 2025',
    description:
      'Delivered a session on Model Context Protocol and Agent-to-Agent Protocol for engineering faculty across India.',
    image: '/talks/mcp_fdp_talk.jpg',
  },
  {
    type: 'Guest Lecturer',
    title: 'Docker & Kubernetes',
    event: 'Cloud Computing',
    date: 'April 2026',
    description:
      'Delivered a session on Docker and Kubernetes for 3rd-year Engineering Students at Fr. CRCE.',
    image: '/talks/cloud-computing-session.jpeg',
  },
];

const Talks = () => {
  return (
    <section id="talks" className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-[#3B82F6]/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-[#3B82F6]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-4">
            Talks
          </h2>
          <div className="flex-grow border-t border-[#e8ecf7]" />
        </div>

        {/* Intro / Stats */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <p className="text-base md:text-lg text-[#6c7583] max-w-3xl leading-relaxed">
              Invited to deliver technical sessions on Blockchain, AI, Cloud Computing,
              RAG, Agentic AI, and hackathon strategy for students and faculty members.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#e8ecf7] bg-white shadow-sm p-5 text-center hover:shadow-md transition">
              <p className="text-3xl font-bold text-[#3B82F6]">4</p>
              <p className="text-sm font-semibold text-[#6c7583] mt-1">Guest Lectures</p>
            </div>

            <div className="rounded-2xl border border-[#e8ecf7] bg-white shadow-sm p-5 text-center hover:shadow-md transition">
              <p className="text-3xl font-bold text-[#3B82F6]">2</p>
              <p className="text-sm font-semibold text-[#6c7583] mt-1">Speaker Sessions</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="
            !pb-16
            [&_.swiper-button-next]:!text-[#3B82F6]
            [&_.swiper-button-prev]:!text-[#3B82F6]
            [&_.swiper-button-next]:!scale-75
            [&_.swiper-button-prev]:!scale-75
            [&_.swiper-pagination-bullet]:!bg-[#3B82F6]
          "
        >
          {talks.map((talk, index) => (
            <SwiperSlide key={`${talk.title}-${index}`} className="h-auto">
              <article className="group h-full">
                <div className="h-[500px] max-w-[390px] mx-auto overflow-hidden rounded-3xl border border-[#e8ecf7] bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6]/60">
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={talk.image}
                      alt={talk.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#21242B]/70 via-[#21242B]/10 to-transparent" />

                    <div className="absolute top-4 left-4 rounded-full bg-[#3B82F6] px-4 py-1.5 text-xs font-semibold text-white shadow-md">
                      {talk.type}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#3B82F6] backdrop-blur">
                        {talk.event}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex h-[260px] flex-col p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#3B82F6]">
                        Session
                      </span>
                      <span className="rounded-full bg-[#f4f7ff] px-3 py-1 text-xs font-medium text-[#6c7583]">
                        {talk.date}
                      </span>
                    </div>

                    <h3 className="mb-3 min-h-[3.5rem] text-xl font-bold leading-snug text-[#21242B] transition group-hover:text-[#3B82F6]">
                      {talk.title}
                    </h3>

                    <p className="line-clamp-5 flex-grow text-sm leading-relaxed text-[#3a4260]">
                      {talk.description}
                    </p>

                    <div className="mt-5 h-1.5 w-16 rounded-full bg-[#3B82F6] transition-all duration-300 group-hover:w-28" />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Talks;