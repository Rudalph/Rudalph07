'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Theme colors
const accent = '#3B82F6';
const charcoal = '#21242B';

// Talk data (you can replace with your real talks)
const talks = [
  {
    type: 'Guest Lecturer',
    title: 'Decentralized App. Development',
    event: 'Blockchain',
    date: 'November 2025',
    description:
      'Delivered a lecture on Blockchain and Hardhat for final-year engineering students',
    image: '/talks/blockchain_talk.jpg',
  },
  {
    type: 'Guest Lecturer',
    title: 'Retrieval Augmented Generation',
    event: 'Artificial Intelligence',
    date: 'November 2025',
    description:
      'Led a Retrieval-Augmented Generation lecture for final-year engineering students',
    image: '/talks/rag_talk.jpg',
  },
  {
    type: 'Guest Lecturer',
    title: 'How to Ace Hackathons',
    event: 'Smart India Hackathon',
    date: 'December 2025',
    description:
      'Guided participants on structuring and solving hackathon problem statements',
    image: '/talks/hackathon_talk.jpg',
  },
  {
    type: 'Speaker',
    title: 'Faculty Development Program',
    event: 'Generative AI',
    date: 'September 2025',
    description:
      'Conducted a technical session on Retrieval-Augmented Generation for faculty members of engineering colleges across India',
    image: '/talks/rag_fdp_talk.jpg',
  },
  {
    type: 'Speaker',
    title: 'Faculty Development Program',
    event: 'Agentic AI',
    date: 'September 2025',
    description:
      'Delivered a session on Model Context Protocol and Agent-to-Agent Protocol for engineering faculty across India',
    image: '/talks/mcp_fdp_talk.jpg',
  },
];

const Talks = () => {
  return (
    <section id='talks' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">
            Talks
          </h2>
          <div className="flex-grow border-t border-[#e8ecf7]" />
        </div>

        {/* Summary */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-[#6c7583]">
            Invited as <span className="font-semibold text-[#3B82F6]">Guest Lecturer</span> — 4 times
            {' '} &{' '}
            <span className="font-semibold text-[#3B82F6]">Speaker</span> — 2 times
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="!pb-14"
        >
          {talks.map((talk, index) => (
            <SwiperSlide key={index}>
              <div className="h-full">
                <div 
                  className="
                    bg-white rounded-2xl 
                    shadow-md border border-[#e8ecf7] 
                    overflow-hidden 
                    transition-all duration-300 
                    hover:shadow-xl hover:border-[#3B82F6]
                    flex flex-col
                    h-[480px]              /* ← Fixed height */
                    w-full max-w-[380px]   /* ← Fixed max width */
                    mx-auto
                  "
                >
                  {/* Image - fixed aspect ratio */}
                  <div className="relative h-56 flex-shrink-0 overflow-hidden">
                    <img
                      src={talk.image}
                      alt={talk.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#3B82F6] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      {talk.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-[#21242B] mb-2 line-clamp-2 min-h-[3rem]">
                      {talk.title}
                    </h3>
                    
                    <div className="text-sm text-[#6c7583] mb-4">
                      {talk.event} • {talk.date}
                    </div>
                    
                    <p className="text-sm text-[#3a4260] line-clamp-5 flex-grow">
                      {talk.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Talks;