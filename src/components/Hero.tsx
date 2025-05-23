
import React from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 z-0"></div>
      
      {/* Digital particles effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-purple/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-neon-blue/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 rounded-full bg-neon-magenta/20 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mb-4 animate-glow">
            <span>TRACY </span>
            <span className="neon-text-purple">HARRISON</span>
          </h1>
          
          <h2 className={cn(
            "text-xl md:text-3xl font-rajdhani mb-8 tracking-widest",
            "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta bg-clip-text text-transparent"
          )}>
            FRONTEND DEVELOPER
          </h2>
          
          <div className="font-rajdhani text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Creating immersive digital experiences with modern web technologies.
            <br />Building the interface of tomorrow, today.
          </div>
          
          <a 
            href="#contact" 
            className={cn(
              "relative px-8 py-3 font-orbitron font-semibold text-sm md:text-lg",
              "border border-white/10 bg-gradient-to-br from-black/60 to-black/30",
              "hover:from-neon-purple/20 hover:to-neon-blue/20 backdrop-blur-sm",
              "transition-all duration-300 animate-pulse-glow rounded-sm",
              "group overflow-hidden"
            )}
          >
            LET'S CONNECT_
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-purple via-neon-blue to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white/50" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
