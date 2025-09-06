import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  const [educations] = useState([
    {
      institute: "University of Agriculture Peshawar",
      degree: "Bachelor of Science in Computer Science",
      year: "2021 - 2025",
      cgpaOrPercentage: "3.6 / 90%",
      marks: "—",
      level: "bachelor",
    },
    {
      institute: "Capital Degree College",
      degree: "FSc-Pre Medical",
      year: "2019 - 2021",
      cgpaOrPercentage: "85.09%",
      marks: "936/1100",
      level: "fsc",
    },
    {
      institute: "Al Asr Education System",
      degree: "Matriculation",
      year: "2019",
      cgpaOrPercentage: "82.63%",
      marks: "909/1100",
      level: "matric",
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-12 px-6 text-white">
      <div className=" mt-4 pl-16 flex items-center">
        <FaGraduationCap className="text-[#38bdf8] w-10 h-10 mr-3" /> {/* Larger and more right */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#38bdf8]">
          My Education
        </h2>
      </div>

      <div className="py-12 px-18 flex flex-wrap gap-6 justify-center md:justify-start">
        {educations.map((edu, index) => {
          let initialAnim = {};
          if (isMobile) initialAnim = { opacity: 0, y: 50 };
          else if (index % 3 === 0) initialAnim = { opacity: 0, x: -100 };
          else if (index % 3 === 1) initialAnim = { opacity: 0, y: -100 };
          else initialAnim = { opacity: 0, x: 100 };

          return (
            <motion.div
              key={index}
              className="relative flex-1 basis-full sm:basis-[45%] md:basis-[30%] max-w-full sm:max-w-[45%] md:max-w-[30%]"
              initial={initialAnim}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <EducationCard {...edu} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
