import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skillsData, pipelineRow1, pipelineRow2 } from '../data/skillsPlaygroundData';
import SkillSpotlightModal from './SkillSpotlightModal';
import { fadeIn } from '../variants';

const SkillsPlayground = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const containerRef = useRef(null);
  const hasTeased = useRef(false);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });
  
  const [teaserOffset, setTeaserOffset] = useState(0);

  useEffect(() => {
    if (isInView && !hasTeased.current) {
      setTeaserOffset(100);
      setTimeout(() => {
        setTeaserOffset(0);
        hasTeased.current = true;
      }, 800);
    }
  }, [isInView]);

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

  const SkillNode = ({ skillId, index, isTopRow }) => {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return null;
    const Icon = skill.icon;

    return (
      <div className="relative z-10 flex flex-col items-center group">
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
        <span className="mt-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors text-center whitespace-nowrap">
          {skill.label}
        </span>
      </div>
    );
  };

  const ConnectorLine = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#f13024" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Row 1 line */}
      <line x1="0" y1="35%" x2="100%" y2="35%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" />
      {/* Row 2 line */}
      <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" />
    </svg>
  );

  return (
    <div className="w-full py-12 relative" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 relative h-[450px] md:h-[500px]">
        
        {/* Horizontal Scroll Wrapper for mobile/tablet */}
        <div className="absolute inset-0 overflow-x-auto no-scrollbar overflow-y-hidden cursor-grab active:cursor-grabbing">
          <motion.div 
            animate={{ x: teaserOffset }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative h-full min-w-[800px] xl:min-w-0 flex flex-col justify-around py-8"
          >
            <ConnectorLine />
            
            {/* Row 1 */}
            <div className="flex items-center justify-between px-8 relative">
              {pipelineRow1.map((id, i) => <SkillNode key={id} skillId={id} index={i} isTopRow={true} />)}
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between px-16 relative">
              {pipelineRow2.map((id, i) => <SkillNode key={id} skillId={id} index={i} isTopRow={false} />)}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-8 text-white/30 text-sm font-light italic"
      >
        Click stages to explore technical proof
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

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default SkillsPlayground;
