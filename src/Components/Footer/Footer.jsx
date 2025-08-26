import React from 'react'
import {MdOutlineEmail} from "react-icons/md"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id='Contact' className='flex justify-around bg-[#1F2937] text-white p-10 md:p-12 items-center'>
     <div>
      <h1 className='text-2xl md:text-6xl font-bold text-[#38bdf8]'>Contact</h1>
      <h3 className='text-sm md:text-2xl font-normal text-[#38bdf8]'>Feel Free To Contact</h3>
     </div>
     <ul className='text-sm md:text-xl'>
      <li className='flex gap-2 items-center text-gray-300'>
        <FaPhoneAlt size={22}/>
         <a 
            href="tel:+923369610674"
            className="hover:underline"
          >
            +923369610674
          </a>
        
      </li>
      <li className='flex gap-2 items-center text-gray-300'>
        <MdOutlineEmail size={24}/>
         <a 
            href="mailto:em.usama2004@gmail.com" 
            className="hover:underline"
          >
            em.usama2004@gmail.com
          </a>
        
      </li>
      <li className='flex gap-2 items-center text-gray-300'>
        <FaGithub size={24} />
        <a 
            href="https://github.com/ImUsama2004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/ImUsama2004
          </a>
      </li>
      <li className='flex gap-2 items-center text-gray-300'>
        <FaLinkedin size={24} />
         <a 
            href="https://www.linkedin.com/in/muhammad-usama-88a306267/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/muhammad-usama
          </a>

      </li>
     </ul>
    </div>
  )
}
