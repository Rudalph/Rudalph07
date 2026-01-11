'use client'

import React from 'react'
import { Menu, X, Download } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech', href: '#technologies' },
  { name: 'Experience', href: '#experience' },
  { name: 'Talks', href: '#talks' },
];


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-[#e8ecf7] shadow-sm transition-all">
      <nav className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        {/* Logo/Name */}
        <a
          href="#"
          className="tracking-widest font-extrabold text-xl lg:text-2xl text-[#21242B] hover:text-[#3B82F6] duration-150"
        >
          Let's Try!
        </a>

        {/* Desktop Nav */}
       <ul className="hidden lg:flex space-x-10">
  {menuItems.map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="uppercase font-semibold tracking-wider text-sm text-[#21242B] hover:text-[#3B82F6] transition"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>


        {/* Resume Button Desktop */}
        <div className="hidden lg:block">
          <a href="/Rudalph_Resume.pdf" download="Rudalph_Resume.pdf">
            <button
              type="button"
              className="group flex items-center bg-[#20418A] px-5 py-2 rounded-lg shadow font-semibold text-white text-md transition-transform duration-150 hover:bg-[#3B82F6] hover:scale-105"
            >
              <Download size={18} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="block lg:hidden focus:outline-none">
          <Menu className="h-7 w-7 text-[#3B82F6]" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur">
          <div className="absolute top-0 right-0 w-80 bg-white rounded-bl-xl shadow-xl p-6 animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <a
                href="#"
                className="tracking-widest font-extrabold text-lg text-[#21242B]"
              >
                RUDALPH GONSALVES
              </a>
              <button
                onClick={toggleMenu}
                className="rounded-full p-2 text-[#3B82F6] hover:bg-blue-50"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
           <ul className="space-y-5">
  {menuItems.map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="block uppercase font-semibold tracking-wider text-[#21242B] hover:text-[#3B82F6] py-2 transition"
        onClick={toggleMenu}
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>

            <a href="/Rudalph_Resume.pdf" download="Rudalph_Resume.pdf">
              <button
                type="button"
                className="mt-8 w-full flex items-center justify-center bg-[#3B82F6] px-4 py-2 rounded-lg shadow font-semibold text-white text-md group hover:bg-[#20418A] hover:scale-105 transition"
              >
                <Download size={18} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Animation for mobile menu */}
      <style jsx>{`
        @keyframes slide-in {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.2s ease-out; }
      `}</style>
    </header>
  )
}
