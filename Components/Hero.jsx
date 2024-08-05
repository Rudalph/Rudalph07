"use client"
import React,{ useRef, useEffect } from 'react'
import Image from 'next/image'
import Typed from 'typed.js';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function Hero() {

    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'FULL STACK WEB DEVELOPER',
                'FULL STACK APP DEVELOPER',
                'AI DEVELOPER',
                'ML DEVELOPER'
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);


  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-8xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-[#A8B3CF] p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">CREATIVE TECHSCAPES</p>
            </div>
            <p className="text-sm font-bold p-1"><a href="https://creative-techscapes.vercel.app/">&rarr;</a></p>
          </div>
          <h1 className="mt-8 text-2xl font-bold tracking-tight text-[#FC538D] md:text-4xl lg:text-5xl">
            RUDALPH  GONSALVES
          </h1>
          <p className="mt-8 text-sm text-[#7147ED] font-bold lg:text-2xl">
              I AM <span ref={typingRef} />
          </p>
          <div className='flex justify-items-start flex-wrap mt-8 lg:space-x-10 space-x-5 text-[#A8B3CF] text-2xl lg:text-4xl'>
          <a href="https://github.com/Rudalph"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rudalphgonsalves/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/rudalphgonsalves/"><FaInstagram /></a>
          <a href="mailto:gonsalvesrudalph@gmail.com"><IoMdMail /></a>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex justify-center items-center align-middle p-5">
          <Image
            className="aspect-[1/1] lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-full"
            src='/Rudalph-Image.jpg'
            alt=""
            height={100}
            width={500}
          />
        </div>
      </div>
    </div>
  )
}
