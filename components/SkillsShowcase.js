import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/skillsPlaygroundData';
import SkillSpotlightModal from './SkillSpotlightModal';

const SkillsShowcase = () => {
  const [selectedSkillId, setSelectedSkillId] = useState(skillsData[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSkill, setModalSkill] = useState(null);

  const activeSkill = skillsData.find(s => s.id === selectedSkillId);

  const handleSkillClick = (skill) => {
    if (selectedSkillId === skill.id) {
      setModalSkill(skill);
      setIsModalOpen(true);
    } else {
      setSelectedSkillId(skill.id);
    }
  };

  const handleProjectClick = (projectName) => {
    setIsModalOpen(false);
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('filterProjects', { detail: projectName }));
    }
  };

  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center min-h-[600px] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center">
        {/* Central Focus Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSkillId}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="z-20 w-64 h-80 bg-secondary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-5xl text-accent border border-accent/20">
                {activeSkill && <activeSkill.icon />}
              </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-2">{activeSkill?.label}</h3>
            <div className="px-3 py-1 bg-accent/20 rounded-full border border-accent/30 text-[10px] text-accent font-bold uppercase tracking-widest mb-4">
              {activeSkill?.proofBadge}
            </div>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
              {activeSkill?.description}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setModalSkill(activeSkill);
                setIsModalOpen(true);
              }}
              className="mt-6 text-accent text-xs font-bold uppercase tracking-tighter hover:underline"
            >
              View Technical Proof
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Skills */}
        <div className="absolute inset-0 pointer-events-none">
          {skillsData.map((skill, index) => {
            const total = skillsData.length;
            const angle = (index / total) * 2 * Math.PI;
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 300;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const isActive = selectedSkillId === skill.id;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x,
                  y,
                  scale: isActive ? 1.2 : 1,
                  zIndex: isActive ? 30 : 10
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  onClick={() => handleSkillClick(skill)}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl transition-all duration-500 border shadow-lg ${
                    isActive 
                    ? 'bg-accent text-white border-accent shadow-accent/40 scale-110' 
                    : 'bg-secondary/80 text-white/50 border-white/10 hover:border-accent/50 hover:text-accent'
                  }`}
                >
                  <skill.icon />
                </motion.button>
                {!isActive && (
                   <motion.div 
                     initial={{ opacity: 0 }}
                     whileHover={{ opacity: 1 }}
                     className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-white/40 uppercase tracking-widest"
                   >
                     {skill.label}
                   </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <SkillSpotlightModal 
        skill={modalSkill} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};

export default SkillsShowcase;