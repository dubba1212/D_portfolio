import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const SectionIndicators = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'work', label: 'Work' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      const offset = 200;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - offset) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex
      flex-col items-center gap-8 z-40'>
      {sections.map((section) => (
        <motion.button
          key={section.id}
          onClick={() => handleClick(section.id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className='relative group'>
          <div className={`w-3 h-3 rounded-full transition-all duration-300
            ${activeSection === section.id
              ? 'bg-accent w-8 shadow-[0_0_15px_rgba(255,69,0,0.6)]'
              : 'bg-white/30 hover:bg-white/60'}`}></div>

          <span className='absolute right-8 text-white text-xs font-medium
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            whitespace-nowrap bg-black/80 px-3 py-1 rounded backdrop-blur-sm'>
            {section.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default SectionIndicators;
