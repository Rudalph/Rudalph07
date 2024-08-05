import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='mt-10 lg:mt-28'>
            <div className="flex items-center lg:px-14 px-5">
                <div className="text-sm lg:text-2xl text-white font-bold ">PROJECTS</div>
                <div className="flex-grow border-t border-white mr-4 ml-4"></div>
            </div>
            <div className='flex justify-center align-middle items-center mt-10 flex-wrap'>
                <div className="card w-60 lg:w-80 shadow-xl border bg-[#1C1F26] border-[#10847E] m-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#10847E]">LIFE BALANCE 360</h2>
                        <p className='text-center text-[#A8B3CF]'>AI powered application for health enhancment</p>
                    </div>
                    <figure className="px-10 pb-5">
                        <Image
                            src="/LB-360.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                            height={600}
                            width={700} 
                        />
                    </figure>
                    <div className='flex justify-evenly align-middle items-center p-3 text-[#A8B3CF] text-xl'>
                        <a href="https://github.com/Rudalph/Life-Balance-360"><FaGithub /></a>
                        <a href="https://life-balance-360.vercel.app/"><FaLink /></a>
                        <MdComment />
                    </div>
                </div>
                <div className="card w-60 lg:w-80 shadow-xl border bg-[#1C1F26] border-[#F86E23] m-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#F86E23]">ZENITH-AI</h2>
                        <p className='text-center text-[#A8B3CF]'>AI powered application for bank customers</p>
                    </div>
                    <figure className="px-10 pb-5">
                        <Image
                            src="/Zenith-AI.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                            height={600}
                            width={700} 
                        />
                    </figure>
                    <div className='flex justify-evenly align-middle items-center p-3 text-[#A8B3CF] text-xl'>
                        <a href="https://github.com/Rudalph/Bank-Of-Baroda-GenAI-Hackathon"><FaGithub /></a>
                        <a href="https://zenith-ai-bob.vercel.app/"><FaLink /></a>
                        <MdComment />
                    </div>
                </div>
                <div className="card w-60 lg:w-80 shadow-xl border bg-[#1C1F26] border-[#4D99FC] m-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#4D99FC]">CREATIVE TECHSCAPES</h2>
                        <p className='text-center text-[#A8B3CF]'>Software Development Agency website</p>
                    </div>
                    <figure className="px-10 pb-5">
                        <Image
                            src="/creative-techscapes.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                            height={600}
                            width={700} 
                        />
                    </figure>
                    <div className='flex justify-evenly align-middle items-center p-3 text-[#A8B3CF] text-xl'>
                        <a href="https://github.com/CreativeTecscapes/Portfolio"><FaGithub /></a>
                        <a href="https://creative-techscapes.vercel.app/"><FaLink /></a>
                        <MdComment />
                    </div>
                </div>
            </div>
            <div className='flex justify-center align-middle items-center mb-10 flex-wrap'>
                <div className="card w-60 lg:w-80 shadow-xl border bg-[#1C1F26] border-[#FC538D] m-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#FC538D]">JIVSANKLP</h2>
                        <p className='text-center text-[#A8B3CF]'>Conservation of endangered species using AI/ML</p>
                    </div>
                    <figure className="px-10 pb-5">
                        <Image
                            src="/jivsankalp.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                            height={600}
                            width={700} 
                        />
                    </figure>
                    <div className='flex justify-evenly align-middle items-center p-3 text-[#A8B3CF] text-xl'>
                        <a href="https://github.com/RehanAlmeida/Jivsankalp"><FaGithub /></a>
                        <a href="https://github.com/RehanAlmeida/Jivsankalp"><FaLink /></a>
                        <MdComment />
                    </div>
                </div>
                <div className="card w-60 lg:w-80 shadow-xl border bg-[#1C1F26] border-[#10847E] m-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#10847E]">MEDISENSE</h2>
                        <p className='text-center text-[#A8B3CF]'>AI powered prescription analyzer and report simplifier</p>
                    </div>
                    <figure className="px-10 pb-5">
                        <Image
                            src="/Medisense.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                            height={600}
                            width={700} 
                        />
                    </figure>
                    <div className='flex justify-evenly align-middle items-center p-3 text-[#A8B3CF] text-xl'>
                        <a href="https://github.com/Rudalph/AI-ML-Parul-University-Hackathon"><FaGithub /></a>
                        <a href="https://github.com/Rudalph/AI-ML-Parul-University-Hackathon"><FaLink /></a>
                        <MdComment />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects