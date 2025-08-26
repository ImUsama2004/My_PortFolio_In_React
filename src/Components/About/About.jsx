import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Developer from "../../assets/Developer.png"
export const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#1e293b]/80 shadow-xl mx-0 md:mx-20 bg-opacity-10 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#38bdf8]">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img src={Developer} alt="" className="h-64" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-[#38bdf8]" />
              <span className="w-96">
                <h1 className="font-semibold text-lg text-[#f1f5f9]">Front End developer</h1>
                <p className="text-gray-300">
                  I'm a Frontend Developer with expertise in React.js,
                  JavaScript, and Tailwind CSS. I build clean, responsive, and
                  user-friendly web interfaces. Passionate about creating smooth
                  and modern user experiences.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-[#38bdf8]" />
              <span className="w-96">
                <h1 className="font-semibold text-lg text-[#f1f5f9]">Back End developer</h1>
                <p className="text-gray-300">
                  I'm currently learning backend development with Node.js and
                  MongoDB. My goal is to become a full MERN stack developer by
                  mastering both frontend and backend. I'm focused on building
                  complete, scalable web applications using modern technologies.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
