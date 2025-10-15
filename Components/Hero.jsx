// 'use client'
// import React, { useRef, useEffect } from 'react'
// import Image from 'next/image'
// import Typed from 'typed.js'
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
// import { IoMdMail } from "react-icons/io"

// // Accent gradient for name and typing
// const accent = 'bg-gradient-to-r from-[#7B4DFE] via-[#FC538D] to-[#5B8EF2] bg-clip-text text-transparent'

// export default function Hero() {
//   const typingRef = useRef(null)

//   useEffect(() => {
//     const options = {
//       strings: [
//         'FULL STACK WEB DEVELOPER',
//         'FULL STACK APP DEVELOPER',
//         'AI DEVELOPER',
//         'ML DEVELOPER'
//       ],
//       typeSpeed: 50,
//       backSpeed: 50,
//       backDelay: 3000,
//       loop: true,
//       showCursor: true,
//       cursorChar: '|'
//     }
//     const typingInstance = new Typed(typingRef.current, options)
//     return () => typingInstance.destroy()
//   }, [])

//   return (
//     <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center bg-white pt-16">
//       <div className="mx-auto max-w-9xl grid lg:grid-cols-12 gap-x-8 px-4 lg:px-8 items-center">
//         <div className="lg:col-span-7 xl:col-span-6 flex flex-col gap-y-6 md:py-20 z-10">
//           {/* Tagline Badge */}
//           <div className="rounded-full bg-[#BAC8E2]/25 px-4 py-1 font-medium text-xs tracking-widest uppercase w-max text-[#705CF6] border border-[#7B4DFE]/20 shadow backdrop-blur">
//             Software Developer  |  AI/ML Enthusiast  |  Blockchain Innovator  
//           </div>
//           {/* Name with Gradient */}
//           <h1 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${accent} select-none drop-shadow-sm`}>
//             RUDALPH GONSALVES
//           </h1>
//           {/* Typing Text */}
//           <p className="mt-4 text-base md:text-xl lg:text-2xl font-bold tracking-wide flex items-center gap-2 text-[#3A3054]">
//             I AM <span className={`pl-2 ${accent} font-extrabold`} ref={typingRef} />
//           </p>
//           {/* Socials + CTA */}
//           <div className='mt-6 flex flex-wrap items-center gap-x-7 gap-y-4'>
//             <a href="https://github.com/Rudalph" target="_blank" className="group">
//               <FaGithub size={32} className="text-[#757585] group-hover:text-[#7B4DFE] transition" />
//             </a>
//             <a href="https://www.linkedin.com/in/rudalphgonsalves/" target="_blank" className="group">
//               <FaLinkedin size={32} className="text-[#757585] group-hover:text-[#0A66C2] transition" />
//             </a>
//             <a href="https://www.instagram.com/rudalphgonsalves/" target="_blank" className="group">
//               <FaInstagram size={32} className="text-[#757585] group-hover:text-[#FC538D] transition"/>
//             </a>
//             <a href="mailto:gonsalvesrudalph@gmail.com" className="group">
//               <IoMdMail size={32} className="text-[#757585] group-hover:text-[#7B4DFE] transition" />
//             </a>
//             <a href="mailto:gonsalvesrudalph@gmail.com" className="ml-5">
//               <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7B4DFE] to-[#FC538D] text-white font-semibold shadow-md hover:scale-105 transition">
//                 Let's Connect
//               </button>
//             </a>
//           </div>
//         </div>
//         <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center my-12 lg:my-0 relative">
//           {/* Profile photo with soft border */}
//           <div className="relative group">
//             <Image
//               className="rounded-full border-4 border-[#E9EAF3]/70 shadow-xl transition-transform duration-500 group-hover:scale-105"
//               src='/Rudalph-Image.jpg'
//               alt="Rudalph Gonsalves, developer"
//               width={350}
//               height={350}
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

// Soft blue for accent (modern SaaS theme)
// Alternate accent: '#3B82F6' (blue-500) or '#FFB454' (soft orange)
const primary = '#21242B'         // dark for headings
const accent = '#3B82F6'          // modern blue, easy on eyes
const badgeBg = '#F3F7FC'         // very light blue

export default function Hero() {
  const typingRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'FULL STACK WEB DEVELOPER',
        'FULL STACK APP DEVELOPER',
        'AI DEVELOPER',
        'ML DEVELOPER'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    }
    const typingInstance = new Typed(typingRef.current, options)
    return () => typingInstance.destroy()
  }, [])

  return (
    <section className="relative w-full min-h-[76vh] flex flex-col justify-center items-center bg-white pt-16">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-x-8 px-4 md:px-8 items-center">
        {/* Text & CTA */}
        <div className="lg:col-span-7 xl:col-span-6 flex flex-col gap-y-7 md:py-16 z-10">
          {/* Soft-accent badge */}
          <div
            className="rounded-full px-4 py-1 font-medium text-xs tracking-widest uppercase w-max text-[#20418A]" // dark blue
            style={{ background: badgeBg, border: `1px solid ${accent}` }}
          >
            Software Developer &nbsp;|&nbsp; AI/ML Enthusiast &nbsp;|&nbsp; Blockchain Innovator
          </div>
          {/* Name, one line, big impact */}
          <h1
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: primary, letterSpacing: '-2px', lineHeight: 1.13 }}
          >
            RUDALPH GONSALVES
          </h1>
          {/* Typing Effect */}
          <p className="mt-2 text-base md:text-xl lg:text-2xl font-semibold tracking-wide flex items-center gap-2" style={{ color: primary }}>
            I AM
            <span
              ref={typingRef}
              className="pl-2 font-extrabold"
              style={{ color: accent, textShadow: "0 1px 8px #e5e8ee" }}
            />
          </p>
          <a href="mailto:gonsalvesrudalph@gmail.com" className="mt-7 w-max">
  <button
    className="px-7 py-2.5 rounded-full bg-[#20418A] text-white font-semibold shadow hover:bg-[#16326A] hover:scale-105 transition-all text-base md:text-lg"
  >
    Connect With Me
  </button>
</a>

        </div>
        {/* Profile Image */}
        <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center my-12 lg:my-0 relative">
          <div className="relative group">
            <Image
              className="rounded-full border-4 border-[#e8ecf7] shadow-xl bg-[#F3F7FC]"
              src='/Rudalph-Image.jpg'
              alt="Rudalph Gonsalves, developer"
              width={340}
              height={340}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
