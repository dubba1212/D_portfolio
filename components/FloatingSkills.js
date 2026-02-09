import React from 'react';
import { FaReact, FaJs, FaFigma } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const FloatingSkills = () => {
  const skills = [
    { icon: <FaReact />, label: 'React', position: 'top-20 -right-10' },
    { icon: <SiNextdotjs />, label: 'Next.js', position: 'top-40 -right-32' },
    { icon: <FaJs />, label: 'JavaScript', position: 'bottom-32 -left-16' },
    { icon: <FaFigma />, label: 'Figma', position: 'bottom-16 -right-24' },
  ];

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`absolute ${skill.position} hidden lg:flex items-center gap-2
            animate-float transition-all duration-1000 ease-in-out`}
          style={{
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}>
          <div className='text-4xl text-accent drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]
            transform hover:scale-110 transition-transform'>
            {skill.icon}
          </div>
          <span className='text-white/60 text-sm font-medium'>{skill.label}</span>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingSkills;
