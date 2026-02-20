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
import { getGithubRepos } from '../lib/github';

// Chunking projects into slides of 4
const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      const data = await getGithubRepos();
      setProjects(data);
      setLoading(false);
    }
    loadRepos();
  }, []);

  useEffect(() => {
    const handleFilter = (e) => {
      setFilter(e.detail);
    };
    window.addEventListener('filterProjects', handleFilter);
    return () => window.removeEventListener('filterProjects', handleFilter);
  }, []);

  const filteredProjects = filter 
    ? projects.filter(p => p.skills.some(s => s.toLowerCase().includes(filter.toLowerCase())) || p.title.toLowerCase().includes(filter.toLowerCase()))
    : projects;

  const slides = chunk(filteredProjects, 4);

  if (loading) return <div className="text-center py-20 text-accent animate-pulse">Loading amazing projects...</div>;

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
                  <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                    <div className="text-white/10 text-6xl font-black uppercase select-none group-hover:scale-150 transition-transform duration-700">
                      {project.title.substring(0, 2)}
                    </div>
                    
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 md:p-8 backdrop-blur-sm">
                      <h3 className="text-xl md:text-2xl font-bold text-accent mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/70 mb-4 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[10px] md:text-xs bg-accent/20 text-accent px-2 py-1 rounded-full border border-accent/30 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        {project.live !== '#' && (
                          <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-accent transition-colors">
                            Live <FiExternalLink />
                          </a>
                        )}
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-white/20 hover:border-white text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                          GitHub <BsGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-10 text-center">
        <a 
          href="https://github.com/dubba1212" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white/60 hover:text-accent border border-white/10 hover:border-accent px-6 py-3 rounded-full transition-all"
        >
          View More on GitHub <BsArrowRight />
        </a>
      </div>

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
