import React from 'react';
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

// components
import ServiceSlider from '../components/ServiceSlider';
import WorkSlider from '../components/WorkSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import Circles from '../components/Circles';
import Bulb from '../components/Bulb';
import Avatar from '../components/Avatar';

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

  return (
    <div className='bg-primary/60 h-full'>
      <div id="home" className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/*title*/}
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' 
          animate='show' exit='hidden' className='h1'>
            Transforming Ideas <br/> Into{''}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          {/*subtitle*/}
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' 
          animate='show' exit='hidden' className='max-w-5m xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Dubba Srikanth
          </motion.p>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' 
          animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img*/}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        {/* particles */}
        <ParticlesContainer/>
        {/* avatar img*/}
        <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
          lg:bottom-0 lg:right-[8%]'>
          <Avatar/>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className='py-32'>
        <div className='container mx-auto px-4'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-20'>
            About Me
          </motion.h2>

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


      {/* Services Section */}
      <div id="services" className='py-36 flex items-center'>
        <Circles />
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='h2 xl:mt-8'>
                My services <span className='text-accent'>for you</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                Write something here
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='w-full xl:max-w-[65%]'>
              {/* slider */}
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>

      {/* Work Section */}
      <div id="work" className='py-36 flex items-center'>
        <Circles />
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='h2 xl:mt-12'>
                My work <span className='text-accent'>for you</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                Write something here
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='w-full xl:max-w-[65%]'>
              {/* slider */}
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className='py-32 text-center'>
        <div className='container mx-auto h-full flex flex-col justify-center'>
          {/* title */}
 <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 mb-8 xl:mb-0'>
            What client <span className='text-accent'>say.</span> about us
          </motion.h2>
          {/* slider */}
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
        className='pt-16 pb-32 text-center mx-auto'
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <div className='container mx-auto h-full flex flex-col justify-center'>
          <Contact />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
