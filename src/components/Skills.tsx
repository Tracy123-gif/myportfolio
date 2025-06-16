
import React from 'react';

const Skills: React.FC = () => {
  const technologies = [
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    },
     {
      name: "JavaScript",
      icon: "https://res.cloudinary.com/dvoucuthp/image/upload/v1748486954/js_afrmvg.png",
    },

    {
      name: "TypeScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "Next.js",
      icon: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    },
     {
      name: "MongoDB",
      icon: "https://res.cloudinary.com/dvoucuthp/image/upload/v1748488713/mongodb2_izmdjz.png",
    },
    {
      name: "Chakra UI",
      icon: "https://res.cloudinary.com/dvoucuthp/image/upload/v1748489077/chakra_n4nwxq.png",
    },
    {
      name: "Git",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png",
    },
    {
      name: "GitHub",
      icon: "https://res.cloudinary.com/dvoucuthp/image/upload/v1748488873/github_gqysvf.png",
    },

  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-neon-magenta/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 rounded-md overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="scan-line"></div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-orbitron font-bold mb-4">
                TECH<span className="neon-text-blue">STACK</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto"></div>
            </div>
            
            <div className="mb-12">
              <p className="text-white/80 text-center text-lg md:text-xl mb-8 font-rajdhani">
                Front-end developer with 5+ years of experience crafting user interfaces 
                that blend cutting-edge technology with intuitive design. 
                Specialized in building immersive web experiences with modern frameworks 
                and a focus on performance optimization.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mt-10">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-item flex flex-col items-center"
                    style={{ 
                      animation: 'float 6s ease-in-out infinite',
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 
                                  bg-gradient-to-br from-black/80 to-black/40 
                                  backdrop-blur-sm rounded-lg p-3 border border-white/10
                                  hover:border-neon-purple/50 transition-all duration-300
                                  hover:shadow-[0_0_15px_rgba(159,0,255,0.3)]">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-white/70">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
