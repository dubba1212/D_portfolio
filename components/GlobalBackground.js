import React from 'react';
import ParticlesContainer from './ParticlesContainer';
import TopLeftImg from './TopLeftImg';
import { motion } from 'framer-motion';

const GlobalBackground = () => {
  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0'>
      {/* Base Gradient Theme - Slightly Brighter */}
      <div className='absolute inset-0 bg-[#1a1832] z-[-3]' />
      
      {/* Radial Spotlight Gradient for contrast */}
      <div 
        className='absolute inset-0 z-[-2]' 
        style={{
          background: 'radial-gradient(circle at 35% 25%, rgba(241,48,36,0.08), transparent 60%)'
        }}
      />
      
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-black/20 to-black/10 z-[-1]' />
      
      {/* Particles Layer */}
      <div className='absolute inset-0 opacity-40'>
        <ParticlesContainer />
      </div>

      {/* Explosion / Glow Effect */}
      <div className='absolute right-0 bottom-0 w-full h-full bg-explosion bg-cover bg-right bg-no-repeat mix-blend-color-dodge opacity-40 translate-z-0' />

      {/* Top Left Decoration */}
      <TopLeftImg />

      {/* Custom Global Glows */}
      <div className='absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full' />
      <div className='absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full' />
    </div>
  );
};

export default GlobalBackground;
