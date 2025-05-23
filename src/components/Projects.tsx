
import React from 'react';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A modern React dashboard with real-time analytics, inventory management, and payment processing integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      link: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with drag-and-drop functionality, team collaboration, and deadline tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Socket.io"],
      link: "https://github.com"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "OpenWeather API", "Leaflet", "PWA"],
      link: "https://github.com"
    },
    {
      title: "Crypto Trading Platform",
      description: "Real-time cryptocurrency trading interface with portfolio tracking, market analysis, and automated trading features.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "WebSocket", "Redux Toolkit", "D3.js"],
      link: "https://github.com"
    },
    {
      title: "Social Media Dashboard",
      description: "Unified social media management platform with content scheduling, analytics, and multi-platform posting capabilities.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Angular", "Node.js", "MongoDB", "Express"],
      link: "https://github.com"
    },
    {
      title: "AI Code Editor",
      description: "Next-generation code editor with AI-powered completions, real-time collaboration, and integrated debugging tools.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "Monaco Editor", "OpenAI API", "Electron"],
      link: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative min-h-screen">
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-blue-400">&lt;</span> MY PROJECTS <span className="text-blue-400">/&gt;</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="opacity-100"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
