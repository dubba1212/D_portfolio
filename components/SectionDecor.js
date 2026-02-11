import React from 'react';
import Image from 'next/image';

const SectionDecor = () => {
  return (
    <>
      <div className='absolute bottom-0 left-0 pointer-events-none z-0 overflow-hidden'>
        <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
          <div className='absolute inset-0 animate-glow-pulse
            rounded-full blur-3xl opacity-40 md:opacity-50 lg:opacity-60
            bg-gradient-to-br from-accent/40 via-accent/20 to-transparent'></div>
          <Image
            src='/bulb.png'
            alt='Decorative bulb'
            width={384}
            height={384}
            className='w-full h-full object-contain opacity-70 md:opacity-80 lg:opacity-90
              animate-float-slow drop-shadow-[0_0_30px_rgba(255,69,0,0.3)]'
            priority={false}
          />
        </div>
      </div>

      <div className='absolute bottom-0 right-0 pointer-events-none z-0 overflow-hidden'>
        <div className='relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]'>
          <div className='absolute inset-0 animate-glow-pulse-delayed
            rounded-full blur-3xl opacity-30 md:opacity-40 lg:opacity-50
            bg-gradient-to-tl from-accent/30 via-accent/10 to-transparent'></div>
          <Image
            src='/circles.png'
            alt='Decorative circles'
            width={448}
            height={448}
            className='w-full h-full object-contain opacity-50 md:opacity-60 lg:opacity-70
              animate-float-slower drop-shadow-[0_0_20px_rgba(255,69,0,0.2)]'
            priority={false}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(255, 69, 0, 0.2));
            opacity: 0.4;
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(255, 69, 0, 0.4));
            opacity: 0.6;
          }
        }

        @keyframes glow-pulse-delayed {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255, 69, 0, 0.15));
            opacity: 0.3;
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 69, 0, 0.35));
            opacity: 0.5;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-12px) translateX(-8px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(8px) translateX(8px);
          }
        }

        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .animate-glow-pulse-delayed {
          animation: glow-pulse-delayed 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 9s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .absolute {
            width: 50%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default SectionDecor;
