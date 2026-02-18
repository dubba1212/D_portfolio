import React from 'react';
import ParticlesContainer from './ParticlesContainer';
import TopLeftImg from './TopLeftImg';
import Bulb from './Bulb';
import { motion } from 'framer-motion';

const GlobalBackground = () => {
  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0'>
      {/* Base Gradient Theme */}
      <div className='absolute inset-0 bg-[#141223] z-[-2]' />
      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-black/40 to-black/20 z-[-1]' />
      
      {/* Particles Layer */}
      <div className='absolute inset-0 opacity-30'>
        <ParticlesContainer />
      </div>

      {/* Explosion / Glow Effect from Home */}
      <div className='absolute right-0 bottom-0 w-full h-full bg-explosion bg-cover bg-right bg-no-repeat mix-blend-color-dodge opacity-50 translate-z-0' />

      {/* Decorative Assets */}
      <TopLeftImg />
      <Bulb />

      {/* Custom Global Gradients */}
      <div className='absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full' />
      <div className='absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full' />
    </div>
  );
};

export default GlobalBackground;
