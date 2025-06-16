
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 p-4",
      scrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-orbitron font-bold tracking-widest">
          <span className="neon-text-blue">TH</span>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          {["Home","About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="font-rajdhani text-lg font-semibold transition-all duration-300 hover:text-neon-purple"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
