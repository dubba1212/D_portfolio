import React, { useEffect } from 'react';
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import FloatingSkills from "../components/FloatingSkills";
import SectionIndicators from "../components/SectionIndicators";

// components
import ProjectsCarousel from '../components/ProjectsCarousel';
import TestimonialSlider from '../components/TestimonialSlider';
import Avatar from '../components/Avatar';
import SkillsPlayground from "../components/SkillsPlayground";

import Contact from '../components/Contact';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop
} from "react-icons/si";

//framer motion
import { motion } from "framer-motion";

//variants
import {fadeIn} from '../variants';

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, []);

  return (
    <div className='h-full'>
      <SectionIndicators />

      {/* Home Section */}
      <div id="home" className='relative w-full min-h-screen flex items-center overflow-hidden'>
        <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto z-10'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight'>
            Turning Ideas into <br/>
            <span className='text-accent'>Scalable Software</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-lg md:text-xl text-white/80 mx-auto xl:mx-0 mb-12 font-light max-w-2xl'>
            Software Developer • <span className='text-accent font-semibold'>AI Enthusiast</span> • Problem Solver
          </motion.p>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            <ProjectsBtn/>
          </motion.div>
        </div>

        <div className='absolute inset-0 w-full h-full overflow-hidden pointer-events-none'>
          <FloatingSkills />

          <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
            lg:bottom-0 lg:right-[8%] z-10'>
            <Avatar/>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className='py-24 md:py-36 relative overflow-hidden'>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-20'>
            <h2 className='h2 text-center text-5xl md:text-6xl font-black mb-4'>About Me</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>

          <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Experience Section */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='space-y-6'>
              <div className='text-6xl xl:text-7xl font-bold text-accent'>
                10+
              </div>
              <div className='text-2xl xl:text-3xl font-semibold text-white'>
                Years Experience
              </div>
              <p className='text-white/70 text-lg leading-relaxed max-w-md'>
                Building scalable web applications, user-focused interfaces, and production-ready digital systems.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='space-y-8'>

              {/* Web Development */}
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-white'>Web Development</h3>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex items-center gap-3 text-white/80'>
                    <FaHtml5 className='text-2xl text-accent' />
                    <span>HTML5</span>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <FaCss3 className='text-2xl text-accent' />
                    <span>CSS3</span>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <FaJs className='text-2xl text-accent' />
                    <span>JavaScript</span>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <FaReact className='text-2xl text-accent' />
                    <span>React</span>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <SiNextdotjs className='text-2xl text-accent' />
                    <span>Next.js</span>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <SiFramer className='text-2xl text-accent' />
                    <span>Framer</span>
                  </div>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-white'>UI/UX Design</h3>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex items-center gap-3 text-white/80'>
                    <FaFigma className='text-2xl text-accent' />
                    <span>Figma</span>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <SiAdobexd className='text-2xl text-accent' />
                    <span>Adobe XD</span>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <SiAdobephotoshop className='text-2xl text-accent' />
                    <span>Photoshop</span>
                  </div>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-white'>Tools & Platforms</h3>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex items-center gap-3 text-white/80'>
                    <FaWordpress className='text-2xl text-accent' />
                    <span>WordPress</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills Playground Section (formerly Expertise) */}
      <div id="expertise" className='py-24 md:py-36 relative overflow-hidden'>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-center mb-16'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>Skills <span className='text-accent'>Playground</span></h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8'></div>
            <p className='text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
              Technical pipeline and production-grade expertise.
            </p>
          </motion.div>

          <SkillsPlayground />
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className='py-24 md:py-36 flex items-center relative overflow-hidden'>
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='text-center mb-16'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>
              My Work <span className='text-accent'>Portfolio</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='w-full'
          >
            <ProjectsCarousel />
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className='py-24 md:py-36 text-center relative overflow-hidden'>
        <div className='container mx-auto h-full flex flex-col justify-center px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-20'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>
              What Clients <span className='text-accent'>Say</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        className='py-24 md:py-36 text-center mx-auto relative overflow-hidden'
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <div className='container mx-auto h-full flex flex-col justify-center px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-16'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>
              Let&#39;s <span className='text-accent'>Connect</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>
          <Contact />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
