import React, { useState } from 'react';
import { projects } from '../data/projects';
import SectionHeading from '../SectionHeading';
import ProjectCard from '../ProjectCard';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filterTags = ['all', ...new Set(projects.flatMap(project => project.tags.map((tag: string) => tag.toLowerCase())))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.some((tag: string) => tag.toLowerCase() === activeFilter));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Projects" 
          subtitle="Explore our portfolio of successful projects across various industries and technologies."
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
        
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-9">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;