import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData, pipelineRow1, pipelineRow2 } from '../data/skillsPlaygroundData';
import SkillSpotlightModal from './SkillSpotlightModal';
import { fadeIn } from '../variants';

const SkillsPlayground = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const containerRef = useRef(null);
  const hasTeased = useRef(false);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [teaserX, setTeaserX] = useState(0);

  useEffect(() => {
    if (isInView && !hasTeased.current) {
      setTeaserX(-100);
      setTimeout(() => {
        setTeaserX(0);
        hasTeased.current = true;
      }, 1000);
    }
  }, [isInView]);

  useEffect(() => {
    const handleClose = () => {
      setIsPanelOpen(false);
      setSelectedSkill(null);
    };
    window.addEventListener('closeSkillModal', handleClose);
    return () => window.removeEventListener('closeSkillModal', handleClose);
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

    return (
      <div key={skillId} className="relative z-10 group flex flex-col items-center flex-shrink-0">
        <motion.button
          variants={fadeIn('up', index * 0.05)}
          initial="hidden"
          whileInView="show"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleSkillClick(skillId)}
          className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-500 border ${
            selectedSkill?.id === skillId
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
    <div className="w-full py-12 space-y-16" ref={containerRef}>
      {/* Row 1: DevOps / Platform */}
      <div className="relative overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-4">
        <motion.div 
          animate={{ x: teaserX }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex items-center justify-start xl:justify-between gap-6 md:gap-12 min-w-max xl:min-w-0 max-w-6xl mx-auto px-4"
        >
          {pipelineRow1.map((id, i) => <SkillNode key={id} skillId={id} index={i} />)}
        </motion.div>
      </div>

      {/* Row 2: App / AI */}
      <div className="relative overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-4">
        <motion.div 
          animate={{ x: -teaserX }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex items-center justify-start xl:justify-between gap-6 md:gap-12 min-w-max xl:min-w-0 max-w-6xl mx-auto px-4"
        >
          {pipelineRow2.map((id, i) => <SkillNode key={id} skillId={id} index={i + 6} />)}
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-10 text-white/30 text-sm font-light italic"
      >
        Click to explore resume-verified technical proof
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
