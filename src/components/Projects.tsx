import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Shield, FileText, Zap, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const title = "Featured Projects";
  
  const letterVariants = {
    initial: { 
      y: 80, 
      opacity: 0, 
      rotate: -15,
      scale: 0.3
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.9,
        ease: "backOut"
      }
    }),
    hover: {
      y: -20,
      rotate: [0, -12, 12, 0],
      scale: 1.4,
      color: ["#06b6d4", "#8b5cf6", "#ec4899", "#10b981", "#06b6d4"],
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    },
    dance: (i: number) => ({
      y: [0, -30, 0, -20, 0],
      rotate: [0, 10, -10, 5, 0],
      scale: [1, 1.2, 0.85, 1.15, 1],
      transition: {
        delay: i * 0.12,
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    })
  };
  const projects = [
    {
      title: 'PandascanFlow',
      subtitle: 'Web Vulnerability Scanner',
      description: 'Advanced web vulnerability scanner with real-time threat detection, comprehensive security analysis, and detailed reporting capabilities. Built with modern web technologies for cybersecurity professionals.',
      tech: ['Python', 'Flask', 'Security APIs', 'Real-time Analysis'],
      liveUrl: 'https://pandascanpro-4.onrender.com',
      githubUrl: 'https://github.com/Shakeel827/pandascanpro',
      icon: Shield,
      color: 'cyan',
      features: [
        'Real-time vulnerability scanning',
        'Comprehensive security reports',
        'Multi-threaded scanning engine',
        'RESTful API integration'
      ]
    },
    {
      title: 'ResumeFlow',
      subtitle: 'AI Resume & Portfolio Builder',
      description: 'Intelligent resume and portfolio builder powered by AI algorithms. Features smart content suggestions, professional templates, and automated formatting for creating standout resumes.',
      tech: ['React', 'Node.js', 'AI/ML APIs', 'PDF Generation'],
      liveUrl: 'https://resumeflow.pandascanpros.in',
      githubUrl: 'https://github.com/Shakeel827/resume',
      icon: FileText,
      color: 'purple',
      features: [
        'AI-powered content suggestions',
        'Professional template library',
        'Real-time preview & editing',
        'PDF export functionality'
      ]
    },
    {
      title: 'PandaNexus',
      subtitle: 'AI-Powered Knowledge Assistant',
      description: 'Intelligent AI assistant that solves doubts and provides insightful answers. Built with advanced natural language processing capabilities for accurate and contextual responses to user queries.',
      tech: ['React', 'Node.js', 'OpenAI API', 'WebSockets'],
      liveUrl: 'https://pandanexus.pandascanpros.in',
      githubUrl: 'https://github.com/Shakeel827/shakeelgpt',
      icon: Brain,
      color: 'green',
      features: [
        'Natural language understanding',
        'Contextual conversation memory',
        'Real-time response generation',
        'User-friendly chat interface'
      ]
    }
  ];

  const colorMap = {
    cyan: {
      gradient: 'from-cyan-500 to-blue-500',
      border: 'border-cyan-500/30',
      shadow: 'shadow-cyan-500/25',
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10'
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      border: 'border-purple-500/30',
      shadow: 'shadow-purple-500/25',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    green: {
      gradient: 'from-emerald-500 to-teal-500',
      border: 'border-emerald-500/30',
      shadow: 'shadow-emerald-500/25',
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <div className="flex justify-center gap-1 md:gap-2 flex-wrap">
                {title.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 cursor-pointer"
                    variants={letterVariants}
                    initial="initial"
                    animate={isVisible ? ["animate", "dance"] : "initial"}
                    whileHover="hover"
                    custom={index}
                    style={{
                      textShadow: "0 0 20px currentColor",
                      filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))"
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={isVisible ? { width: 96, opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            />
            <motion.p 
              className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2, duration: 0.8 }}
            >
              Innovative solutions built with cutting-edge technologies, focusing on security, user experience, and performance
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const colors = colorMap[project.color as keyof typeof colorMap];
              const IconComponent = project.icon;
              
              return (
                <motion.div
                  key={index}
                  className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border ${colors.border} overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:${colors.shadow} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    delay: 2.5 + index * 0.3, 
                    duration: 0.8,
                    ease: "backOut"
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -10,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Animated Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, ${colors.gradient.includes('cyan') ? '#06b6d4' : colors.gradient.includes('purple') ? '#8b5cf6' : '#10b981'}, transparent)`,
                        `linear-gradient(135deg, ${colors.gradient.includes('cyan') ? '#06b6d4' : colors.gradient.includes('purple') ? '#8b5cf6' : '#10b981'}, transparent)`,
                        `linear-gradient(225deg, ${colors.gradient.includes('cyan') ? '#06b6d4' : colors.gradient.includes('purple') ? '#8b5cf6' : '#10b981'}, transparent)`,
                        `linear-gradient(315deg, ${colors.gradient.includes('cyan') ? '#06b6d4' : colors.gradient.includes('purple') ? '#8b5cf6' : '#10b981'}, transparent)`
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Floating Icon */}
                  <motion.div 
                    className={`absolute top-6 right-6 p-3 rounded-full ${colors.bg} ${colors.border} border backdrop-blur-sm group-hover:scale-110 transition-all duration-300`}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 180
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent className={`w-6 h-6 ${colors.text}`} />
                    </motion.div>
                  </motion.div>

                  <div className="relative p-8">
                    {/* Project Header */}
                    <div className="mb-6">
                      <motion.h3 
                        className={`text-2xl font-bold mb-2 group-hover:${colors.text} transition-colors duration-300`}
                        whileHover={{
                          scale: 1.05,
                          x: 5
                        }}
                      >
                        <motion.span
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            background: `linear-gradient(90deg, #ffffff, ${colors.text.replace('text-', '#')}, #ffffff)`,
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          }}
                        >
                          {project.title}
                        </motion.span>
                      </motion.h3>
                      <motion.p 
                        className={`${colors.text} font-medium text-lg`}
                        animate={{
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {project.subtitle}
                      </motion.p>
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-6"
                      whileHover={{
                        color: "#ffffff"
                      }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                      <div className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex} 
                            className="flex items-center gap-2 text-sm text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3 + index * 0.3 + featureIndex * 0.1 }}
                            whileHover={{ x: 5, color: "#ffffff" }}
                          >
                            <motion.div 
                              className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.border} border`}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: featureIndex * 0.3
                              }}
                            />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border} font-medium`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 3.5 + index * 0.3 + techIndex * 0.1,
                              duration: 0.5,
                              ease: "backOut"
                            }}
                            whileHover={{
                              scale: 1.2,
                              y: -5
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:${colors.shadow} group/btn`}
                        whileHover={{
                          scale: 1.1,
                          y: -3
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 15, -15, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        </motion.div>
                        Live Demo
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-6 py-3 border ${colors.border} rounded-lg font-semibold ${colors.text} hover:${colors.bg} transition-all duration-300 hover:scale-105 group/btn`}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                          borderColor: colors.text.replace('text-', '#')
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        </motion.div>
                        Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      hoveredProject === index ? 'animate-pulse' : ''
                    }`}
                    animate={hoveredProject === index ? {
                      background: [
                        "linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)",
                        "linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent)",
                        "linear-gradient(225deg, transparent, rgba(255,255,255,0.05), transparent)",
                        "linear-gradient(315deg, transparent, rgba(255,255,255,0.05), transparent)"
                      ]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.gradient}`}></div>
                    <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${colors.gradient}`}></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <motion.p 
              className="text-gray-400 text-lg mb-6"
              animate={{
                color: ["#9ca3af", "#06b6d4", "#9ca3af"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Interested in seeing more of my work?
            </motion.p>
            <motion.a
              href="https://github.com/Shakeel827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg font-semibold text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 group"
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              View All Projects on GitHub
              <motion.div
                animate={{
                  x: [0, 3, 0],
                  y: [0, -3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
