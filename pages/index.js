import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import SectionIndicators from "../components/SectionIndicators";
import ProjectsCarousel from '../components/ProjectsCarousel';
import TestimonialSlider from '../components/TestimonialSlider';
import Avatar from '../components/Avatar';
import SystemsArchitectureMatrix from "../components/SystemsArchitectureMatrix";
import AboutTimeline from '../components/AboutTimeline';
import Contact from '../components/Contact';
import ProjectsBtn from "../components/ProjectsBtn";
import FloatingSkills from "../components/FloatingSkills";

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
      <section id="home" className='relative w-full min-h-screen flex items-center overflow-hidden'>
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
          <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] z-10'>
            <Avatar/>
          </div>
        </div>
      </section>

      {/* About Section - Scroll Driven Timeline */}
      <section id="about" className='py-24 md:py-36 relative'>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='mb-20 text-center'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-4'>Professional <span className='text-accent'>Journey</span></h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>
          <AboutTimeline />
        </div>
      </section>

      {/* Skills Playground Section */}
      <section id="expertise" className='py-24 md:py-36 relative overflow-hidden'>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>Skills <span className='text-accent'>Playground</span></h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8'></div>
            <p className='text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
              Enterprise system architecture visualization.
            </p>
          </motion.div>
          <SystemsArchitectureMatrix />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className='py-24 md:py-36 flex items-center relative overflow-hidden'>
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>
              My Work <span className='text-accent'>Portfolio</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='w-full'
          >
            <ProjectsCarousel />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className='py-24 md:py-36 text-center relative overflow-hidden'>
        <div className='container mx-auto h-full flex flex-col justify-center px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='mb-20'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>
              What Clients <span className='text-accent'>Say</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}>
            <TestimonialSlider />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className='py-24 md:py-36 text-center mx-auto relative overflow-hidden'>
        <div className='container mx-auto h-full flex flex-col justify-center px-4 relative z-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='mb-16'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>
              Let&#39;s <span className='text-accent'>Connect</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
