import React from 'react'
import Certificate from './Certificates';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { MdComment } from "react-icons/md";

const Experience = () => {

  const cards = [
    {
      imageUrl: '/JPMC-Certificate.jpg',
      title: 'JP Morgan Chase & CO',
      description: 'JPMC Software Engineering Virtial Internship from April 2023 to June 2023.',
      tags: [<a href="https://github.com/Rudalph/JPMC-Task-1-"><FaGithub /></a>, <a href="https://github.com/Rudalph/JPMC-Task-1-"><FaLink /></a>, <MdComment />],
    },

    {
      imageUrl: '/JPMC-Certificate.jpg',
      title: 'Fire & Security Association India',
      description: 'Fire & Security Association Software Development Internship April 2023 to June 2023.',
      tags: [<a href="https://github.com/Rudalph/FSAI-app"><FaGithub /></a>, <a href="https://fsai.onrender.com"><FaLink /></a>, <MdComment />],
    },
    {
      imageUrl: '/vpn-certificate.jpg',
      title: 'VPN Digital Services Software Development Internship Feb 2024 to July 2024',
      description: 'Software Engineering Internship at VPN',
      tags: [<a href="https://www.rudrastra.in/"><FaGithub /></a>, <a href="https://www.rudrastra.in/"><FaLink /></a>, <MdComment />],
    },
  ];


  return (
    <div className='mt-10'>
        <div className="flex items-center lg:px-14 px-5">
                <div className="text-sm lg:text-2xl text-white font-bold ">EXPERIENCE</div>
                <div className="flex-grow border-t border-white mr-4 ml-4"></div>
        </div>
        <div className='mt-10 flex justify-center align-middle items-center flex-wrap'>
        {cards.map((card, index) => (
        <Certificate key={index} {...card}/>
      ))}
          </div>
    </div>
  )
}

export default Experience