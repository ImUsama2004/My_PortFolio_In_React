import React from "react";
import { motion } from "framer-motion";
import MyPic from "../../assets/MyPic.jpg";

export const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20 gap-10">
      {/* Text Section */}
      <div className="md:w-1/2">
        {/* Name Animation */}
        <motion.h1
          className="text-2xl md:text-6xl font-bold leading-normal tracking-tighter text-[#38bdf8]"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          Muhammad Usama Saeed
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-sm md:text-2xl tracking-tight mt-4 text-gray-300"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          Hi, I'm Muhammad Usama Saeed, a passionate Frontend Developer with a strong
          focus on building modern, responsive, and user-friendly web
          applications using React.js. I specialize in creating clean and
          efficient UI components, integrating APIs, and optimizing performance
          for a seamless user experience. With a keen eye for design and a solid
          understanding of HTML, CSS, JavaScript, and Tailwind CSS, I aim to
          deliver intuitive interfaces that align with both user needs and
          business goals. I'm always eager to learn and explore the latest tools
          and trends in the frontend ecosystem to continuously improve my skills
          and build better products.
        </motion.p>

        {/* Contact Button with Clockwise Dancing Effect */}
        <motion.a
          href="#Contact"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <motion.button
            className="mt-5 md:mt-10 text-white py-2 px-6 text-sm md:text-lg rounded-sm 
                       bg-[#38bdf8] hover:bg-[#0ea5e9] border-2 border-transparent 
                       shadow-[0_0_25px_#38bdf8,0_10px_25px_#38bdf8]"
            animate={{
              x: [0, 0, 12, 0, -12, 0], // right then left
              y: [0, -12, 0, 12, 0, 0]  // up then down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.button>
        </motion.a>
      </div>

      {/* Image Section with Floating Animation */}
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end"
        animate={{
          x: [0, 12, 0, -12, 0],  // move right then left
          y: [0, -12, 0, 12, 0]   // move up then down
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <img
          className="w-full mt-40 max-w-md rounded-2xl shadow-[0_0_25px_#38bdf8] object-cover"
          src={MyPic}
          alt="Muhammad Usama"
        />
      </motion.div>
    </div>
  );
};
