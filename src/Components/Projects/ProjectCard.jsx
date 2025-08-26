import React from "react";
import pic from "../../assets/pic.jpg";
export const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#1e293b] shadow-xl shadow-slate-600 rounded-2xl">
      <img className="p-4" src={pic} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-[#38bdf8]">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex justify-between items-center md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 bg-[#38bdf8] text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-75-300 hover:scale-105 font-semibold rounded-3xl">
          Demo
        </button>
        <button className="md:mt-10 text-white py-2 px-3 bg-[#38bdf8] text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-75-300 hover:scale-105 font-semibold rounded-3xl">
          Code
        </button>
      </div>
    </div>
  );
};
