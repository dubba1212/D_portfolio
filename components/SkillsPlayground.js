import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skillsData, pipelineFlow } from '../data/skillsPlaygroundData';
import SkillDetailPanel from './SkillDetailPanel';
import { fadeIn } from '../variants';

const SkillsPlayground = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSkillClick = (skillId) => {
    const skill = skillsData.find(s => s.id === skillId);
    setSelectedSkill(skill);
    setIsPanelOpen(true);
  };

  const handleProjectClick = (projectName) => {
    setIsPanelOpen(false);
    // Anchor scroll to work section
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event for filtering
      window.dispatchEvent(new CustomEvent('filterProjects', { detail: projectName }));
    }
  };

  return (
    <div className="w-full py-12">
      {/* Pipeline Container */}
      <div className="relative flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0 max-w-6xl mx-auto px-4">
        
        {/* Animated Background Line */}
        <div className="absolute hidden xl:block top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>

        {pipelineFlow.map((skillId, index) => {
          const skill = skillsData.find(s => s.id === skillId);
          const Icon = skill.icon;
          
          return (
            <div key={skillId} className="relative z-10 group flex flex-col items-center">
              {/* Connector for Mobile/Tablet */}
              {index < pipelineFlow.length - 1 && (
                <div className="xl:hidden absolute bottom-[-32px] w-0.5 h-8 bg-white/10 overflow-hidden">
                   <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent"
                  />
                </div>
              )}

              <motion.button
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleSkillClick(skillId)}
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 border ${
                  selectedSkill?.id === skillId 
                  ? 'bg-accent text-white border-accent shadow-[0_0_25px_rgba(241,48,36,0.6)]' 
                  : 'bg-secondary/40 text-white/60 border-white/10 hover:border-accent/50 hover:text-accent group-hover:shadow-[0_0_20px_rgba(241,48,36,0.2)]'
                }`}
              >
                <Icon />
              </motion.button>
              
              <motion.span 
                variants={fadeIn('up', (index * 0.1) + 0.1)}
                initial="hidden"
                whileInView="show"
                className="mt-4 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors"
              >
                {skill.label}
              </motion.span>
            </div>
          );
        })}
      </div>

      {/* Helper Text */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-16 text-white/30 text-sm font-light italic"
      >
        Click any stage to explore technical proof & linked projects
      </motion.p>

      {/* Detail Panel */}
      <SkillDetailPanel 
        skill={selectedSkill} 
        isOpen={isPanelOpen} 
        onClose={() => setIsPanelOpen(false)}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};

export default SkillsPlayground;
