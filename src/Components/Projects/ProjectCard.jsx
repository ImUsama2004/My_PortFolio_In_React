import React, { useState, useRef, useEffect } from "react";
import pic from "../../assets/pic.jpg";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectCard = ({ title, main, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    const desc = descRef.current;
    if (desc) {
      setShowSeeMore(desc.scrollHeight > desc.clientHeight);
    }
  }, [main]);

  return (
    <>
      <div className="p-3 md:p-6 flex flex-col w-full sm:w-72 md:w-80 bg-[#1e293b] shadow-xl shadow-slate-600 rounded-2xl min-h-[550px] max-h-[550px]">
        {/* Image */}
        <img className="p-4 rounded-lg object-cover w-full h-48 sm:h-56 md:h-60" src={pic} alt="" />

        {/* Title */}
        <h3 className="px-4 text-lg sm:text-xl md:text-2xl font-bold leading-normal text-[#38bdf8]">
          {title}
        </h3>

        {/* Description + See More */}
        <div className="flex flex-col flex-grow px-4 py-2 overflow-hidden">
          <div
            ref={descRef}
            className="text-sm sm:text-sm md:text-md text-gray-300 overflow-hidden"
            style={{ maxHeight: "150px" }}
          >
            {main}
          </div>

          {showSeeMore && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[#38bdf8] font-semibold hover:underline mt-1 self-start"
            >
              See More
            </button>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-2 p-2 md:p-4 flex flex-col sm:flex-row justify-between items-center sm:gap-2 md:gap-4">
          <button className="text-white py-2 px-3 bg-[#38bdf8] text-sm sm:text-sm md:text-lg hover:opacity-85 duration-75-300 hover:scale-105 font-semibold rounded-3xl w-full sm:w-auto mb-2 sm:mb-0">
            Demo
          </button>
          <button className="text-white py-2 px-3 bg-[#38bdf8] text-sm sm:text-sm md:text-lg hover:opacity-85 duration-75-300 hover:scale-105 font-semibold rounded-3xl w-full sm:w-auto mb-2 sm:mb-0">
            Code
          </button>
          <button 
            onClick={onDelete} 
            className="text-white py-2 px-3 bg-red-600 text-sm sm:text-sm md:text-lg hover:opacity-85 duration-75-300 hover:scale-105 font-semibold rounded-3xl w-full sm:w-auto"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1e293b] rounded-2xl p-6 max-w-lg w-full relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-xl font-bold text-gray-300 hover:text-white"
              >
                &times;
              </button>

              <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-[#38bdf8] mb-4">{title}</h3>
              <p className="text-gray-300">{main}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
