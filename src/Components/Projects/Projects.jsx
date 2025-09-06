import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { FaProjectDiagram } from 'react-icons/fa';

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <div className="flex items-center mb-8">
        <FaProjectDiagram className="text-[#38bdf8] w-10 h-10 mr-2" /> {/* Icon */}
        <h1 className="text-2xl md:text-4xl text-[#38bdf8] font-bold">Projects</h1>
      </div>

      {/* Project Cards Grid */}
      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.description}
            videoPath={project.demo}
            codeUrl={project.code}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};
