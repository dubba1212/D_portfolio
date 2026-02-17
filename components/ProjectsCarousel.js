import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
import { Pagination, Navigation, Keyboard } from "swiper";
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion";

export const projectsData = [
  {
    title: 'Walmart Microservices',
    description: 'Enterprise retail microservices platform serving 1,000+ daily users.',
    path: '/thumb1.jpg',
    tech: ['Kubernetes', 'Docker', 'Jenkins', 'Go'],
    live: '#',
    github: '#',
    skills: ['Kubernetes', 'Docker', 'Git']
  },
  {
    title: 'CloudMart AI',
    description: 'AI-driven retail recommendations using OpenAI and AWS Bedrock.',
    path: '/thumb2.jpg',
    tech: ['AWS', 'Bedrock', 'OpenAI', 'Next.js'],
    live: '#',
    github: '#',
    skills: ['AWS', 'AI Integration', 'React']
  },
  {
    title: 'E-commerce Engine',
    description: 'Full-stack modernization for multi-brand retail platform.',
    path: '/thumb3.jpg',
    tech: ['Node.js', 'Postgres', 'React', 'TypeScript'],
    live: '#',
    github: '#',
    skills: ['Node.js', 'Postgres', 'React', 'Docker']
  },
  {
    title: 'Version Modernization',
    description: 'Full-stack enterprise modernization with 30% delivery improvement.',
    path: '/thumb4.jpg',
    tech: ['React', 'Git', 'Agile', 'Postgres'],
    live: '#',
    github: '#',
    skills: ['Git', 'React', 'Postgres']
  },
  {
    title: 'AI Appointment Scheduler',
    description: 'LLM-powered scheduling system using ChatGPT and Google APIs.',
    path: '/thumb1.jpg',
    tech: ['OpenAI', 'GCP', 'Node.js', 'React'],
    live: '#',
    github: '#',
    skills: ['AI Integration', 'Node.js', 'React']
  },
];

// Chunking projects into slides of 4
const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const ProjectsCarousel = () => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const handleFilter = (e) => {
      // Mapping project names to skill labels for filtering
      const skillMap = {
        'Walmart Microservices': 'Kubernetes',
        'CloudMart': 'AWS',
        'E-commerce': 'Node.js',
        'AI Appointment Scheduler': 'AI Integration',
        'Version Full-stack Modernization': 'Git'
      };
      
      const skillName = skillMap[e.detail] || e.detail;
      setFilter(skillName);
    };

    window.addEventListener('filterProjects', handleFilter);
    return () => window.removeEventListener('filterProjects', handleFilter);
  }, []);

  const filteredProjects = filter 
    ? projectsData.filter(p => p.skills.includes(filter) || p.title.includes(filter))
    : projectsData;

  const slides = chunk(filteredProjects, 4);

  return (
    <div className="w-full relative px-4 md:px-12">
      <AnimatePresence mode="wait">
        {filter && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="text-white/60">Filtering by: <span className="text-accent font-bold">{filter}</span></span>
            <button 
              onClick={() => setFilter(null)}
              className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white transition-colors"
            >
              Clear Filter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
          type: 'bullets',
          renderBullet: (index, className) => {
            return `<span class="${className} bg-accent"></span>`;
          },
        }}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Pagination, Navigation, Keyboard]}
        className="projects-swiper pb-16"
      >
        {slides.map((slideProjects, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {slideProjects.map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="relative group rounded-2xl overflow-hidden bg-secondary/20 border border-white/10 h-[220px] md:h-[280px] shadow-2xl hover:shadow-accent/20 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={project.path}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt={project.title}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 md:p-8 backdrop-blur-sm">
                      <h3 className="text-xl md:text-2xl font-bold text-accent mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/70 mb-4 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[10px] md:text-xs bg-accent/20 text-accent px-2 py-1 rounded-full border border-accent/30 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        <a href={project.live} className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-accent transition-colors">
                          Live <FiExternalLink />
                        </a>
                        <a href={project.github} className="flex items-center gap-2 border border-white/20 hover:border-white text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                          Code <BsGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Slide Counter (Optional addition) */}
        <div className="absolute top-0 right-0 text-white/30 text-4xl md:text-6xl font-black select-none pointer-events-none z-0 hidden md:block">
           PROJ
        </div>
      </Swiper>

      <style jsx global>{`
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: #f13024 !important;
          background: rgba(0,0,0,0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .projects-swiper .swiper-button-next:hover,
        .projects-swiper .swiper-button-prev:hover {
          background: #f13024;
          color: white !important;
        }
        .projects-swiper .swiper-button-next:after,
        .projects-swiper .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .projects-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.3;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default ProjectsCarousel;
