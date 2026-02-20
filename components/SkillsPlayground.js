import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skillsData, pipelineRow1, pipelineRow2 } from '../data/skillsPlaygroundData';
import SkillSpotlightModal from './SkillSpotlightModal';
import { fadeIn } from '../variants';

const SkillsPlayground = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  useEffect(() => {
    const handleClose = () => {
      setIsPanelOpen(false);
      setSelectedSkill(null);
    };
    window.addEventListener('closeSkillModal', handleClose);
    return () => window.removeEventListener('closeSkillModal', handleClose);
  }, []);

  useEffect(() => {
    const allSkills = [...pipelineRow1, ...pipelineRow2];
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedSkill(allSkills[index]);
      index = (index + 1) % allSkills.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSkillClick = (skillId) => {
    const skill = skillsData.find(s => s.id === skillId);
    setSelectedSkill(skill);
    setIsPanelOpen(true);
  };

  const handleProjectClick = (projectName) => {
    setIsPanelOpen(false);
    setSelectedSkill(null);
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('filterProjects', { detail: projectName }));
    }
  };

  const SkillNode = ({ skillId, index }) => {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return null;
    const Icon = skill.icon;
    const isHighlighted = highlightedSkill === skillId && !isPanelOpen;

    return (
      <div key={skillId} className="relative z-10 group flex flex-col items-center">
        <motion.button
          variants={fadeIn('up', index * 0.05)}
          initial="hidden"
          whileInView="show"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleSkillClick(skillId)}
          className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-500 border ${
            selectedSkill?.id === skillId || isHighlighted
            ? 'bg-accent text-white border-accent shadow-[0_0_25px_rgba(241,48,36,0.6)]' 
            : 'bg-secondary/40 text-white/60 border-white/10 hover:border-accent/50 hover:text-accent group-hover:shadow-[0_0_20px_rgba(241,48,36,0.2)]'
          }`}
        >
          <Icon />
        </motion.button>
        <motion.span 
          variants={fadeIn('up', (index * 0.05) + 0.05)}
          initial="hidden"
          whileInView="show"
          className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors text-center"
        >
          {skill.label}
        </motion.span>
      </div>
    );
  };

  return (
    <div className="w-full py-12 space-y-16">
      {/* Row 1: DevOps / Platform */}
      <div className="relative">
        <div className="absolute hidden xl:block top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 xl:justify-between max-w-6xl mx-auto px-4">
          {pipelineRow1.map((id, i) => <SkillNode key={id} skillId={id} index={i} />)}
        </div>
      </div>

      {/* Row 2: App / AI */}
      <div className="relative">
        <div className="absolute hidden xl:block top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 overflow-hidden">
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 xl:justify-between max-w-6xl mx-auto px-4">
          {pipelineRow2.map((id, i) => <SkillNode key={id} skillId={id} index={i + 6} />)}
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-10 text-white/30 text-sm font-light italic"
      >
        Explore the multi-level technical stack and AI integration flow
      </motion.p>

      <SkillSpotlightModal 
        skill={selectedSkill} 
        isOpen={isPanelOpen} 
        onClose={() => {
          setIsPanelOpen(false);
          setSelectedSkill(null);
        }}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};

export default SkillsPlayground;
