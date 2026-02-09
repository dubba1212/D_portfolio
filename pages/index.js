import React from 'react';
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import FloatingSkills from "../components/FloatingSkills";
import SectionIndicators from "../components/SectionIndicators";

// components
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
      <SectionIndicators />

      <div id="home" className='relative w-full min-h-screen flex items-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto z-10'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight'>
            Transforming Ideas <br/> Into{''}
            <span className='text-accent block mt-2'>Digital Reality</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-xl md:text-2xl text-white/90 mx-auto xl:mx-0 mb-12 font-light max-w-2xl'>
            Dubba Srikanth
          </motion.p>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col sm:flex-row gap-4'>
            <ProjectsBtn/>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,69,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold
                hover:bg-accent/10 transition-all duration-300 inline-block text-center'>
              View Work
            </motion.a>
          </motion.div>
        </div>

        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <FloatingSkills />

          <div className='w-[1200px] h-full absolute right-0 bottom-0'>
            <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
              xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
            </div>
            <ParticlesContainer/>
            <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
              lg:bottom-0 lg:right-[8%]'>
              <Avatar/>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className='py-24 md:py-36 relative'>
        <div className='container mx-auto px-4'>
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


      {/* Skills & Expertise Section */}
      <div id="expertise" className='py-24 md:py-36 relative overflow-hidden'>
        <Circles />
        <div className='container mx-auto px-4'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-center mb-24'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>Core Expertise</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8'></div>
            <p className='text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
              Technologies and skills I use to build modern digital experiences.
            </p>
          </motion.div>

          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Web Development Card */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='group relative'>
              <div className='relative h-80 rounded-xl overflow-hidden
                bg-gradient-to-br from-black via-gray-900 to-black
                border border-accent/30 p-8 flex flex-col items-center justify-center
                transform transition-all duration-500 ease-out
                hover:border-accent/60 hover:shadow-[0_0_30px_rgba(255,69,0,0.3)]
                hover:scale-105 hover:-translate-y-2 cursor-pointer'>

                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                <div className='relative z-10 text-center space-y-4'>
                  <div className='text-6xl transform transition-all duration-500
                    group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,69,0,0.6)]'>
                    💻
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Web Development</h3>
                  <p className='text-white/60 text-sm'>React, Next.js, JavaScript, TypeScript</p>

                  <div className='pt-6 border-t border-accent/20'>
                    <div className='text-accent text-sm font-semibold
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {/* Placeholder for future link */}
                      → Explore Projects
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* UI/UX Design Card */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='group relative'>
              <div className='relative h-80 rounded-xl overflow-hidden
                bg-gradient-to-br from-black via-gray-900 to-black
                border border-accent/30 p-8 flex flex-col items-center justify-center
                transform transition-all duration-500 ease-out
                hover:border-accent/60 hover:shadow-[0_0_30px_rgba(255,69,0,0.3)]
                hover:scale-105 hover:-translate-y-2 cursor-pointer'>

                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                <div className='relative z-10 text-center space-y-4'>
                  <div className='text-6xl transform transition-all duration-500
                    group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,69,0,0.6)]'>
                    🎨
                  </div>
                  <h3 className='text-2xl font-bold text-white'>UI/UX Design</h3>
                  <p className='text-white/60 text-sm'>Figma, User Research, Prototyping</p>

                  <div className='pt-6 border-t border-accent/20'>
                    <div className='text-accent text-sm font-semibold
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {/* Placeholder for future link */}
                      → View Portfolio
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Website Engineering Card */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='group relative'>
              <div className='relative h-80 rounded-xl overflow-hidden
                bg-gradient-to-br from-black via-gray-900 to-black
                border border-accent/30 p-8 flex flex-col items-center justify-center
                transform transition-all duration-500 ease-out
                hover:border-accent/60 hover:shadow-[0_0_30px_rgba(255,69,0,0.3)]
                hover:scale-105 hover:-translate-y-2 cursor-pointer'>

                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                <div className='relative z-10 text-center space-y-4'>
                  <div className='text-6xl transform transition-all duration-500
                    group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,69,0,0.6)]'>
                    ⚙️
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Website Engineering</h3>
                  <p className='text-white/60 text-sm'>Performance, Optimization, Architecture</p>

                  <div className='pt-6 border-t border-accent/20'>
                    <div className='text-accent text-sm font-semibold
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {/* Placeholder for future link */}
                      → Learn More
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>

      {/* Work Section */}
      <div id="work" className='py-24 md:py-36 flex items-center relative'>
        <Circles />
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='text-center mb-20'>
            <h2 className='h2 text-5xl md:text-6xl font-black mb-6'>
              My Work <span className='text-accent'>Portfolio</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto'></div>
          </motion.div>

          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0'>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/70 text-lg leading-relaxed'>
                Discover the projects and solutions I&#39;ve built for startups and enterprises.
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
      <div id="testimonials" className='py-24 md:py-36 text-center relative'>
        <div className='container mx-auto h-full flex flex-col justify-center px-4'>
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
        className='py-24 md:py-36 text-center mx-auto relative'
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <div className='container mx-auto h-full flex flex-col justify-center px-4'>
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
