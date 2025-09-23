import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handlePrevious = () => {
    setCurrentProjectIndex(prev => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex(prev => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  // Reset to first project when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentProjectIndex(0);
  };

  const currentProject = filteredProjects[currentProjectIndex];

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8">
          PROJECTS <span className="text-terminal-white">&#123;</span>
        </h1>
        
        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {['all', 'software', 'datascience', 'design'].map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 text-sm transition-colors border ${
                activeFilter === filter 
                  ? 'bg-terminal-green text-terminal-bg border-terminal-green' 
                  : 'bg-transparent text-terminal-white border-terminal-gray hover:border-terminal-green'
              }`}
            >
              {filter === 'all' ? 'All Projects' : 
               filter === 'datascience' ? 'Data Science' :
               filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Carousel */}
        {filteredProjects.length > 0 && (
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 p-3 rounded-full backdrop-blur-sm"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 p-3 rounded-full backdrop-blur-sm"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>

            {/* Single Project Display */}
            <div className="mx-16">
              <div className="bg-terminal-gray/20 p-8 rounded border border-terminal-gray hover:border-terminal-green transition-colors group">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Project Image */}
                  <div className="mb-4 md:mb-0">
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title} 
                      className="w-full h-64 md:h-80 object-cover rounded border border-terminal-gray group-hover:border-terminal-green transition-colors" 
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-terminal-green">{currentProject.title}</h3>
                    <p className="text-terminal-white leading-relaxed text-lg">{currentProject.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`text-sm px-4 py-2 rounded ${
                            techIndex % 4 === 0 ? 'bg-terminal-green text-terminal-bg' :
                            techIndex % 4 === 1 ? 'bg-terminal-blue text-terminal-bg' :
                            techIndex % 4 === 2 ? 'bg-terminal-yellow text-terminal-bg' :
                            'bg-terminal-gray text-terminal-white border border-terminal-green'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-6 pt-4">
                      <a 
                        href={currentProject.liveUrl} 
                        className="text-terminal-green hover:text-terminal-yellow transition-colors flex items-center gap-2 text-lg font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Demo</span>
                        <span>→</span>
                      </a>
                      <a 
                        href={currentProject.githubUrl} 
                        className="text-terminal-blue hover:text-terminal-yellow transition-colors flex items-center gap-2 text-lg font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>GitHub</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Counter */}
            <div className="text-center mt-6">
              <span className="text-terminal-gray">
                {currentProjectIndex + 1} of {filteredProjects.length}
              </span>
              <div className="flex justify-center gap-2 mt-4">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProjectIndex 
                        ? 'bg-terminal-green' 
                        : 'bg-terminal-gray hover:bg-terminal-green/50'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-terminal-gray text-lg">
              No projects found for "{activeFilter}" category
            </div>
          </div>
        )}
      </div>
      
      <div className="text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}