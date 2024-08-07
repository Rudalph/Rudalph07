import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <section className="relative overflow-hidden border-t mt-10 py-8">
                <div className="container relative z-10 mx-auto px-4">
                    <div className="-m-8 flex flex-wrap items-center justify-center lg:justify-between">
                        <div className="w-auto p-8">
                                <div className="inline-flex items-center">
                                    <span className="lg:ml-4 text-xl font-bold text-white">RUDALPH GONSALVES</span>
                                </div>
                        </div>
                        
                        <div className="w-auto p-8">
                            <div className="-m-1.5 flex flex-wrap">
                                <div className="w-auto p-1.5">
                                    <a href="https://github.com/Rudalph">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
                                        <FaGithub />
                                        </div>
                                    </a>
                                </div>
                                <div className="w-auto p-1.5">
                                    <a href="https://www.linkedin.com/in/rudalphgonsalves/">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
                                        <FaLinkedin />
                                        </div>
                                    </a>
                                </div>
                                <div className="w-auto p-1.5">
                                    <a href="https://www.instagram.com/rudalphgonsalves/">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
                                        <FaInstagram />
                                        </div>
                                    </a>
                                </div>
                                <div className="w-auto p-1.5">
                                    <a href="mailto:gonsalvesrudalph@gmail.com">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white hover:border-gray-400 text-white">
                                        <IoMdMail />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer