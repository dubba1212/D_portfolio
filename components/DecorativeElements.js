import React from 'react';

const DecorativeElements = ({ position = 'default' }) => {
  const positions = {
    default: {
      bulb: 'top-10 -right-20 lg:top-20 lg:-right-32',
      circles: 'bottom-20 -left-20 lg:bottom-32 lg:-left-40',
    },
    about: {
      bulb: 'top-40 -left-16 lg:top-32 lg:-left-24',
      circles: '-bottom-20 -right-16 lg:-bottom-32 lg:-right-32',
    },
    testimonials: {
      bulb: '-top-10 -right-20 lg:top-0 lg:-right-40',
      circles: 'bottom-40 -left-24 lg:bottom-32 lg:-left-48',
    },
    contact: {
      bulb: 'top-32 -left-20 lg:top-40 lg:-left-32',
      circles: 'bottom-10 -right-16 lg:bottom-20 lg:-right-24',
    },
  };

  const pos = positions[position] || positions.default;

  return (
    <>
      <div
        className={`absolute ${pos.bulb} pointer-events-none hidden md:block
          animate-pulse opacity-40 lg:opacity-50`}
        style={{
          animation: 'float 6s ease-in-out infinite',
        }}>
        <div className='w-32 h-32 lg:w-48 lg:h-48 rounded-full
          bg-gradient-to-br from-accent/20 via-accent/10 to-transparent
          blur-2xl shadow-[0_0_40px_rgba(255,69,0,0.3)]'></div>
      </div>

      <div
        className={`absolute ${pos.circles} pointer-events-none hidden md:block
          opacity-20 lg:opacity-30`}
        style={{
          animation: 'float 8s ease-in-out infinite reverse',
        }}>
        <svg
          className='w-64 h-64 lg:w-96 lg:h-96 text-accent'
          viewBox='0 0 200 200'
          fill='none'
          stroke='currentColor'>
          <circle cx='100' cy='100' r='80' strokeWidth='1' />
          <circle cx='100' cy='100' r='60' strokeWidth='1' />
          <circle cx='100' cy='100' r='40' strokeWidth='1' />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  );
};

export default DecorativeElements;
