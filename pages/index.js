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

//variantscl
import {fadeIn} from '../variants';

//counter
import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="adobexd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
  {
    title: 'contact',
    info: [], // No info needed for contact section data structure
  },
];

const Home = () => {
  const [index, setIndex] = React.useState(0);

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
      <div id="about" className='py-32 text-center xl:text-left'>
        <Circles />
        {/* avatar img */}
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'>
              About Me
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              Write here
            </motion.p>

            {/* counters */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='flex flex-1 xl:gap-x-6'>
                {/* experience*/}
                <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={10} duration={5} />+
                  </div>
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:translate-all after:duration-300'}
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2
          xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max
                gap-x-2 items-center text-white/60'>
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'></div>
                    <div>{item.stage}</div>
                    {/* icons */}
                    <div className='flex gap-x-4'>
                      {item.icons?.map((icon, itemIndex) => {
                        return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        {/* avatar img */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute bottom-0 -left-[370px]'>
          <Avatar />
        </motion.div>
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
