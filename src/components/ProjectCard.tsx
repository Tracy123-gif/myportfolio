
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  link 
}) => {
  return (
    <div className={cn(
      "glass-panel rounded-md p-1 h-full",
      "transform transition-all duration-500",
      "hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(159,0,255,0.3)]",
      "group"
    )}>
      <div className="relative overflow-hidden rounded-sm h-48 mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-black/50 backdrop-blur-sm rounded-sm border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-orbitron mb-2 group-hover:neon-text-blue transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-white/70 mb-4 font-rajdhani">
          {description}
        </p>
        
        <a 
          href={link}
          target="_blank" 
          rel="noopener noreferrer" 
          className={cn(
            "text-sm font-medium inline-flex items-center",
            "text-neon-blue hover:text-neon-purple transition-colors duration-300"
          )}
        >
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
