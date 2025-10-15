import React from 'react'
import Image from 'next/image'

const accent = "#3B82F6"; // theme blue

const achievements = [
  { src: '/achivements-img-1.jpg', alt: 'Achievement 1', desc: 'Winner - Smart India Hackathon 2023' },
  { src: '/achivements-img-5.jpg', alt: 'Achievement 2', desc: 'Winner – Sunhacks 36hrs International Hackathon' },
  { src: '/achivements-img-4.jpg', alt: 'Achievement 3', desc: 'Smart India Hackathon 2023' },
  { src: '/achivements-img-2.jpg', alt: 'Achievement 4', desc: 'Winner - IDE Bootcamp' },
  { src: '/achivements-img-6.jpg', alt: 'Achievement 5', desc: 'Cybercrime Investigation Application' },
  { src: '/achivements-img-7.jpg', alt: 'Achievement 6', desc: 'Cybercrime Awareness Seminar I' },
  { src: '/achivements-img-8.jpg', alt: 'Achievement 7', desc: 'Cybercrime Awareness Seminar II' },
  { src: '/achivements-img-10.jpg', alt: 'Achievement 8', desc: 'Published Research Paper at IEEE Conference' },
  { src: '/achivements-img-9.jpg', alt: 'Achievement 9', desc: 'Avishkar - State Level Project Demonstration' }
];

const Bento = () => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">
            Achievements
          </h2>
          <div className="flex-grow border-t border-[#e8ecf7]"></div>
        </div>
        {/* Gallery grid */}
      <div className="w-full flex justify-center items-center px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {achievements.map((achv, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition group
                h-[320px] sm:h-[350px] md:h-[370px] lg:h-[390px] xl:h-[420px] flex items-center justify-center bg-white"
            >
              <Image
                className="object-cover w-full h-full group-hover:scale-105 transition duration-200"
                src={achv.src}
                alt={achv.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{objectFit:"cover"}}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#19263C]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-white text-base md:text-lg font-semibold px-4 text-center">
                  {achv.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default Bento;
