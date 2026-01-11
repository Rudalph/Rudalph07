'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

const primary = '#21242B'
const accent = '#3B82F6'
const badgeBg = '#F3F7FC'

export default function Hero() {
  const typingRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'AI ENGINEER',
        'SOFTWARE DEVELOPER',
        'BLOCKCHAIN ENTHUSIAST',
        'AI AND ML INNOVATOR'
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
    <section className="relative w-full flex flex-col justify-center items-center bg-white pt-24 pb-8 min-h-[70vh]">
      <div className="mx-auto max-w-7xl w-full flex flex-col-reverse items-center gap-10 md:gap-12 lg:gap-0 lg:grid lg:grid-cols-12 px-4 md:px-8">
        {/* Left: Text and CTA */}
        <div className="w-full flex flex-col justify-center items-center gap-6 lg:items-start lg:col-span-7 xl:col-span-6 md:py-10 z-10">
          <div
            className="rounded-full px-4 py-2 font-medium text-xs tracking-widest uppercase mb-2"
            style={{ 
              background: badgeBg,
              border: `1px solid ${accent}`,
              color: '#20418A'
            }}
          >
            Software Developer &nbsp;|&nbsp; AI/ML Enthusiast &nbsp;|&nbsp; Blockchain Innovator
          </div>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center lg:text-left"
            style={{ color: primary, letterSpacing: '-2px', lineHeight: 1.13 }}
          >
            RUDALPH GONSALVES
          </h1>
          <p
            className="mt-1 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex flex-wrap justify-center lg:justify-start items-center gap-2 text-center lg:text-left"
            style={{ color: primary }}
          >
            <span>I AM</span>
            <span
              ref={typingRef}
              className="pl-2 font-extrabold"
              style={{
                color: accent,
                textShadow: "0 1px 8px #e5e8ee"
              }}
            />
          </p>
          <a href="mailto:gonsalvesrudalph@gmail.com" className="mt-4 w-full max-w-xs">
            <button
              className="w-full px-5 py-2.5 rounded-full bg-[#20418A] text-white font-semibold shadow hover:bg-[#3B82F6] hover:scale-[1.03] transition-all text-sm sm:text-base md:text-lg"
            >
              Connect With Me
            </button>
          </a>
        </div>
        {/* Right: Profile Photo */}
        <div className="flex justify-center items-center w-full lg:col-span-5 xl:col-span-6 mb-6 lg:mb-0">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <Image
              className="rounded-full border-4 border-[#e8ecf7] shadow-xl bg-[#F3F7FC] object-cover"
              src='/Rudalph-Image.jpg'
              alt="Rudalph Gonsalves, developer"
              fill
              sizes="(max-width: 768px) 90vw, 340px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

