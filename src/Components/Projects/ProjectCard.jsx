import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectCard = ({ title, main, videoPath, codeUrl, index, isMobile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'text' or 'video'
  const [showSeeMore, setShowSeeMore] = useState(false);
  const descRef = useRef(null);

  // Detect if description overflows
  useEffect(() => {
    const desc = descRef.current;
    if (desc) {
      setShowSeeMore(desc.scrollHeight > desc.clientHeight);
    }
  }, [main]);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  // Animation logic that was in Projects.jsx
  let initialAnim = {};
  if (isMobile) initialAnim = { opacity: 0, y: 50 };
  else if (index % 3 === 0) initialAnim = { opacity: 0, x: -100 };
  else if (index % 3 === 1) initialAnim = { opacity: 0, y: -100 };
  else initialAnim = { opacity: 0, x: 100 };

  return (
    <motion.div
      className="relative overflow-visible"
      initial={initialAnim}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div
        className="p-3 md:p-6 flex flex-col w-full sm:w-72 md:w-80 bg-[#1e293b] 
                   rounded-2xl min-h-[550px] max-h-[550px] 
                   shadow-[0_0_20px_#38bdf8,0_10px_25px_#38bdf8]"
      >
        {/* Image */}
        <img
          className="p-4 rounded-lg object-cover w-full h-48 sm:h-56 md:h-60"
          src="/assets/pic.jpg"
          alt={title}
        />

        {/* Title */}
        <h3 className="px-4 text-lg sm:text-xl md:text-2xl font-bold leading-normal text-[#38bdf8]">
          {title}
        </h3>

        {/* Description */}
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
              onClick={() => openModal("text")}
              className="text-[#38bdf8] font-semibold hover:underline mt-1 self-start"
            >
              See More
            </button>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-2 p-2 md:p-4 flex flex-col sm:flex-row justify-between items-center sm:gap-2 md:gap-4">
          {/* Demo Button */}
          <motion.button
            onClick={() => openModal("video")}
            className="text-white py-0.5 px-3 text-sm sm:text-sm md:text-lg rounded-sm font-semibold w-full sm:w-auto
                       bg-gradient-to-r from-[#1A2980] via-[#26D0CE] to-[#1A2980]
                       border-2 border-transparent shadow-[0_0_10px_#38bdf8,0_4px_10px_#38bdf8]"
            animate={{
              x: [0, 3, 0, -3, 0],
              y: [0, -3, 0, 3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0
            }}
            whileHover={{ scale: 1.05 }}
          >
            Demo
          </motion.button>

          {/* Code Button */}
          <motion.button
            onClick={() => window.open(codeUrl, "_blank")}
            className="text-white py-0.5 px-3 text-sm sm:text-sm md:text-lg rounded-sm font-semibold w-full sm:w-auto
                       bg-gradient-to-r from-[#1A2980] via-[#26D0CE] to-[#1A2980]
                       border-2 border-transparent shadow-[0_0_10px_#38bdf8,0_4px_10px_#38bdf8]"
            animate={{
              x: [0, 3, 0, -3, 0],
              y: [0, -3, 0, 3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.2
            }}
            whileHover={{ scale: 1.05 }}
          >
            Code
          </motion.button>
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
              className="bg-[#1e293b] rounded-2xl p-6 max-w-lg w-full relative shadow-[0_0_25px_#38bdf8]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-xl font-bold text-gray-300 hover:text-white"
              >
                &times;
              </button>

              <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-[#38bdf8] mb-4">
                {title}
              </h3>

              {modalType === "text" && (
                <p className="text-gray-300 text-base">{main}</p>
              )}

              {modalType === "video" && (
                <video
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                  style={{ maxHeight: "400px" }}
                  preload="none"
                >
                  <source src={videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
