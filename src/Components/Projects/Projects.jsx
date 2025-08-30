import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const [modalContent, setModalContent] = useState({ type: '', content: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    demo: '',
    code: '',
    image: ''
  });
  const [isMobile, setIsMobile] = useState(false);

  const [projects, setProjects] = useState([
    {
      title: "Coffee Website Design",
      description: "This is a coffee Website Design. It has multiple features like online ordering, menu showcase, and responsive layout.",
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      code: "https://github.com/username/coffee-website",
      image: "/assets/pic.jpg"
    },
    {
      title: "E-Learning Website",
      description: "Our e-learning website is a modern platform designed to connect students with skilled teachers for personalized learning. Students can easily browse teacher profiles, choose suitable classes, and opt for online or physical sessions based on their preferences. Teachers can showcase their expertise, manage schedules, and respond to students’ queries efficiently through our dynamic Q&A section.academic growth, skill development, and seamless communication between students and teachers.",
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      code: "https://github.com/username/elearning-website",
      image: "/assets/pic.jpg"
    },
    {
      title: "Portfolio Website",
      description: "This is my personal portfolio website built with React to showcase my projects and skills.",
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      code: "https://github.com/username/portfolio-website",
      image: "/assets/pic.jpg"
    }
  ]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (type, content) => {
    setModalContent({ type, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ type: '', content: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = () => {
    if (!formData.title.trim() || !formData.description.trim() || !formData.demo.trim() || !formData.code.trim()) {
      alert("Please fill all fields.");
      return;
    }
    setProjects((prev) => [...prev, formData]);
    setFormData({ title: '', description: '', demo: '', code: '', image: '' });
    setShowForm(false);
  };

  const handleDeleteProject = (indexToDelete) => {
    setProjects((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <div className="flex justify-between items-center">
        <h1 className='text-2xl md:text-4xl text-[#38bdf8] font-bold'>Projects</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#38bdf8] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#0ea5e9] transition text-xl"
        >
          +
        </button>
      </div>

      {/* Project Cards Grid */}
      <div className="flex flex-wrap gap-6 mt-10">
        {projects.map((project, index) => {
          let initialAnim = {};
          if (isMobile) {
            initialAnim = { opacity: 0, y: 50 }; // mobile: slide from bottom
          } else {
            if (index % 3 === 0) initialAnim = { opacity: 0, x: -100 }; // left
            else if (index % 3 === 1) initialAnim = { opacity: 0, y: -100 }; // center
            else initialAnim = { opacity: 0, x: 100 }; // right
          }

          return (
            <motion.div
              key={index}
              className="relative overflow-visible"
              initial={initialAnim}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                main={project.description}
                image={project.image}
                onSeeMore={() => openModal('text', project.description)}
                onDemo={() => openModal('video', project.demo)}
                codeLink={project.code}
                onDelete={() => handleDeleteProject(index)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Modal for See More / Demo */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-lg w-full relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-xl font-bold text-gray-700 hover:text-gray-900"
              >
                &times;
              </button>

              {modalContent.type === 'text' && (
                <p className="text-gray-900 dark:text-gray-100">{modalContent.content}</p>
              )}

              {modalContent.type === 'video' && (
                <div className="aspect-video mt-2">
                  <iframe
                    src={modalContent.content}
                    title="Project Demo"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Project Form Modal with Live Preview */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1e293b] rounded-2xl p-6 max-w-lg w-full relative shadow-xl flex flex-col gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-xl font-bold text-gray-300 hover:text-white"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-[#38bdf8] text-center mb-4">
                Add New Project
              </h2>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="p-2 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400"
                />
                <textarea
                  name="description"
                  placeholder="Project Description"
                  value={formData.description}
                  onChange={handleChange}
                  className="p-2 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400"
                  rows={4}
                />
                <input
                  type="text"
                  name="demo"
                  placeholder="Demo Video Link (YouTube Embed)"
                  value={formData.demo}
                  onChange={handleChange}
                  className="p-2 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400"
                />
                <input
                  type="text"
                  name="code"
                  placeholder="Code Link (GitHub)"
                  value={formData.code}
                  onChange={handleChange}
                  className="p-2 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="p-2 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400"
                />
              </div>

              {/* Live Preview */}
              <div className="mt-4 p-4 bg-[#0f172a] rounded-2xl shadow-inner flex flex-col items-center gap-3">
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                )}
                <h3 className="text-xl font-bold text-[#38bdf8]">{formData.title || "Project Title"}</h3>
                <p className="text-gray-300 text-sm">
                  {formData.description
                    ? formData.description.length > 100
                      ? formData.description.slice(0, 100) + "..."
                      : formData.description
                    : "Project description preview..."}
                </p>
              </div>

              <div className="flex justify-end mt-4 gap-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProject}
                  className="bg-[#38bdf8] text-black px-4 py-2 rounded hover:bg-[#0ea5e9]"
                >
                  Add
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
