
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };




  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch('https://portemailsender1.onrender.com/contact/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ fullName: '', email: '', message: '' });
    } else {
      toast({
        title: "Something went wrong!",
        description: data.error || "Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Network error!",
      description: "Could not send message. Try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute left-1/4 top-1/4 w-60 h-60 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="neon-text-blue">/</span> CONTACT <span className="neon-text-blue">/</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-neon-magenta to-neon-blue mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-md p-8 overflow-hidden relative">
            <div className="scan-line"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-orbitron mb-6 neon-text-purple">Get In Touch</h3>
                <p className="text-white/70 mb-8 font-rajdhani">
                  Interested in working together or have a project in mind?
                  Feel free to reach out using the form or connect with me on social media.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-black/80 to-black/40 border border-white/10">
                      <Mail className="h-5 w-5 text-neon-blue" />
                    </div>
                    <span className="ml-4 font-rajdhani">th1044225@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-black/80 to-black/40 border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="ml-4 font-rajdhani">NIgeria</span>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  {/* Github */}
                  <a href="https://github.com/Tracy123-gif" className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-black/80 to-black/40 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/tracy-harrison-324186269/" className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-black/80 to-black/40 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-[0_0_10px_rgba(159,0,255,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  {/* Twitter/X */}
                  <a href="https://x.com/tracyHa24479870" className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-black/80 to-black/40 border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,184,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2 font-rajdhani">Full Name</label>
                      <input 
                        type="text"
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full px-4 py-3 bg-black/30 backdrop-blur-sm rounded-sm",
                          "border border-white/10 focus:border-neon-blue/50",
                          "text-white/90 placeholder-white/50",
                          "focus:outline-none focus:ring focus:ring-neon-blue/20",
                          "transition-all duration-300"
                        )}
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2 font-rajdhani">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full px-4 py-3 bg-black/30 backdrop-blur-sm rounded-sm",
                          "border border-white/10 focus:border-neon-purple/50",
                          "text-white/90 placeholder-white/50",
                          "focus:outline-none focus:ring focus:ring-neon-purple/20",
                          "transition-all duration-300"
                        )}
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2 font-rajdhani">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full px-4 py-3 bg-black/30 backdrop-blur-sm rounded-sm",
                          "border border-white/10 focus:border-neon-magenta/50",
                          "text-white/90 placeholder-white/50",
                          "focus:outline-none focus:ring focus:ring-neon-magenta/20",
                          "transition-all duration-300",
                          "resize-none"
                        )}
                        placeholder="Your message"
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={cn(
                          "w-full px-6 py-3 font-orbitron text-sm",
                          "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20",
                          "border border-white/10 hover:border-neon-purple/30",
                          "transition-all duration-300",
                          "hover:shadow-[0_0_15px_rgba(159,0,255,0.3)]",
                          "focus:outline-none focus:ring-2 focus:ring-neon-purple/50",
                          "relative overflow-hidden group",
                          isSubmitting && "opacity-75 cursor-not-allowed"
                        )}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                          {!isSubmitting && <Send className="h-4 w-4" />}
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
