import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

interface ProjectsSectionProps {
  visible: boolean;
  onComplete: () => void;
}

export default function ProjectsSection({ visible, onComplete }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible, onComplete]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  if (!visible) return null;

  return (
    <section id="projects" className="mb-12">
      <div className="mb-8">
        <div className="text-terminal-green mb-4">$ ls projects/ --filter={activeFilter}</div>
        
        {/* Project Filter Commands */}
        <div className="mb-6 flex flex-wrap gap-2">
          {['all', 'software', 'datascience', 'design'].map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-3 py-1 text-sm transition-colors ${
                activeFilter === filter 
                  ? 'bg-terminal-green text-terminal-bg' 
                  : 'bg-terminal-gray text-terminal-white hover:bg-terminal-green hover:text-terminal-bg'
              }`}
            >
              --filter={filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="border border-terminal-gray rounded bg-terminal-gray/20 p-4 hover:border-terminal-green transition-colors"
            >
              <div className="mb-3">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-32 rounded border border-terminal-gray ${
                    project.title === "Khaista Boutique" 
                      ? "object-contain bg-white p-2" 
                      : "object-cover"
                  }`}
                />
              </div>
              <h3 className="text-terminal-green font-semibold mb-2">{project.title}</h3>
              <p className="text-terminal-white text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`text-xs px-2 py-1 rounded ${
                      techIndex % 3 === 0 ? 'bg-terminal-green text-terminal-bg' :
                      techIndex % 3 === 1 ? 'bg-terminal-blue text-terminal-bg' :
                      'bg-terminal-yellow text-terminal-bg'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a 
                  href={project.liveUrl} 
                  className="text-terminal-green hover:text-terminal-yellow text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
                <a 
                  href={project.githubUrl} 
                  className="text-terminal-blue hover:text-terminal-yellow text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
