import React from 'react'
import { ProjectCard } from './ProjectCard'
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className='text-2xl md:text-4xl text-[#38bdf8] font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap justify-between gap-6'>
        <motion.div
          className="flex-1 basis-[30%] max-w-[30%]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <ProjectCard 
                title={"Coffee Website Design"} 
                main={"This is a coffee Website Design"} 
          />
        </motion.div>
              

        <motion.div
          className="flex-1 basis-[30%] max-w-[30%]"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <ProjectCard 
            title={"Coffee Website Design"} 
            main={"This is a coffee Website Design"} 
          />
        </motion.div>

         <motion.div
          className="flex-1 basis-[30%] max-w-[30%]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <ProjectCard 
            title={"Coffee Website Design"} 
            main={"This is a coffee Website Design"} 
          />
        </motion.div>   
        </div>
    </div>
  )
}
