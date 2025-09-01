import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  const [educations, setEducations] = useState([
    {
      institute: "University of Example",
      degree: "Bachelor of Science",
      year: "2020 - 2024",
      cgpa: "3.8",
      percentage: 85,
    },
    {
      institute: "Example College",
      degree: "Intermediate",
      year: "2018 - 2020",
      cgpa: "3.6",
      percentage: 80,
    },
    {
      institute: "High School Example",
      degree: "Matriculation",
      year: "2016 - 2018",
      cgpa: "3.5",
      percentage: 78,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    institute: "",
    degree: "",
    year: "",
    cgpa: "",
    percentage: "",
  });

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showCodePrompt, setShowCodePrompt] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const secretCode = "MYSECRET123"; // replace with your secret code

  // Detect screen size for animations
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEducation = () => {
    if (
      !formData.institute ||
      !formData.degree ||
      !formData.year ||
      !formData.cgpa ||
      !formData.percentage
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setEducations((prev) => [...prev, formData]);
    setFormData({
      institute: "",
      degree: "",
      year: "",
      cgpa: "",
      percentage: "",
    });
    setShowForm(false);
  };

  const removeEducation = (index) => {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePlusClick = () => {
    if (!isAuthorized) setShowCodePrompt(true);
    else setShowForm(true);
  };

  const handleCodeSubmit = () => {
    if (codeInput === secretCode) {
      setIsAuthorized(true);
      setShowForm(true);
    } else {
      alert("Wrong code! You cannot add new education.");
    }
    setShowCodePrompt(false);
    setCodeInput("");
  };

  return (
    <section className="py-12 px-6 text-white">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#38bdf8] px-16">
          My Education
        </h2>
        <button
          onClick={handlePlusClick}
          className="bg-[#38bdf8] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#0ea5e9] transition"
        >
          +
        </button>
      </div>

      {/* Education Cards with animation like Projects */}
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
              <EducationCard {...edu} onRemove={() => removeEducation(index)} />
            </motion.div>
          );
        })}
      </div>

      {/* Secret Code Prompt */}
      {showCodePrompt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-[#1e293b]/80 text-black p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 text-center text-[#38bdf8]">
              Enter Secret Code
            </h3>
            <input
              type="password"
              placeholder="Secret Code"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className="p-2 border rounded w-full text-black"
            />
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowCodePrompt(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCodeSubmit}
                className="bg-[#38bdf8] text-black px-4 py-2 rounded hover:bg-[#0ea5e9]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-[#1e293b]/80 text-black p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 text-center text-[#38bdf8]">
              Add New Education
            </h3>
            <div className="flex flex-col gap-3 text-[#38bdf8]">
              <input
                type="text"
                name="institute"
                placeholder="Institute"
                value={formData.institute}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={formData.degree}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="year"
                placeholder="Year (e.g. 2020 - 2024)"
                value={formData.year}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="cgpa"
                placeholder="CGPA"
                value={formData.cgpa}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                name="percentage"
                placeholder="Percentage"
                value={formData.percentage}
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEducation}
                className="bg-[#38bdf8] text-black px-4 py-2 rounded hover:bg-[#0ea5e9]"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
