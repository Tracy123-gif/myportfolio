
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-orbitron font-bold tracking-widest">
              <span className="neon-text-blue">T</span>
              <span className="neon-text-purple">H</span>
            </div>
          </div>
          
          <div className="text-sm text-white/60 font-rajdhani">
            © {currentYear} Tracy Harrison. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/60 hover:text-neon-blue transition-colors duration-300 text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-neon-purple transition-colors duration-300 text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-neon-magenta transition-colors duration-300 text-sm">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
