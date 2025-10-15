// import React from 'react'
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";

// const Footer = () => {
//     return (
//         <div>
//             <section className="relative overflow-hidden border-t mt-10 py-8">
//                 <div className="container relative z-10 mx-auto px-4">
//                     <div className="-m-8 flex flex-wrap items-center justify-center lg:justify-between">
//                         <div className="w-auto p-8">
//                                 <div className="inline-flex items-center">
//                                     <span className="lg:ml-4 text-xl font-bold text-white">RUDALPH GONSALVES</span>
//                                 </div>
//                         </div>
                        
//                         <div className="w-auto p-8">
//                             <div className="-m-1.5 flex flex-wrap">
//                                 <div className="w-auto p-1.5">
//                                     <a href="https://github.com/Rudalph">
//                                         <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
//                                         <FaGithub />
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="w-auto p-1.5">
//                                     <a href="https://www.linkedin.com/in/rudalphgonsalves/">
//                                         <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
//                                         <FaLinkedin />
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="w-auto p-1.5">
//                                     <a href="https://www.instagram.com/rudalphgonsalves/">
//                                         <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
//                                         <FaInstagram />
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="w-auto p-1.5">
//                                     <a href="mailto:gonsalvesrudalph@gmail.com">
//                                         <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
//                                         <IoMdMail />
//                                         </div>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Footer


import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#21242B] border-t border-[#e8ecf7] mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Name + tagline */}
        <div className="mb-4 md:mb-0 flex items-center">
          <span className="text-xl font-bold text-white tracking-wide">RUDALPH GONSALVES</span>
        </div>
        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/Rudalph" target="_blank" rel="noopener" aria-label="GitHub">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e8ecf7] bg-[#21242B] hover:bg-[#3B82F6] transition">
              <FaGithub className="text-white" size={20} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rudalphgonsalves/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e8ecf7] bg-[#21242B] hover:bg-[#3B82F6] transition">
              <FaLinkedin className="text-white" size={20} />
            </div>
          </a>
          <a href="https://www.instagram.com/rudalphgonsalves/" target="_blank" rel="noopener" aria-label="Instagram">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e8ecf7] bg-[#21242B] hover:bg-[#3B82F6] transition">
              <FaInstagram className="text-white" size={20} />
            </div>
          </a>
          <a href="mailto:gonsalvesrudalph@gmail.com" aria-label="Mail">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e8ecf7] bg-[#21242B] hover:bg-[#3B82F6] transition">
              <IoMdMail className="text-white" size={20} />
            </div>
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-[#e8ecf7]">
        &copy; {new Date().getFullYear()} Rudalph Gonsalves. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
