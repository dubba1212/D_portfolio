import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, pipelineRow1, pipelineRow2 } from '../data/skillsPlaygroundData';
import SkillSpotlightModal from './SkillSpotlightModal';
import { fadeIn } from '../variants';

const SkillsPlayground = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activePulseNode, setActivePulseNode] = useState(null);
  const pipelineRef = useRef(null);
  const hasTeased = useRef(false);

  useEffect(() => {
    const el = pipelineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTeased.current) {
        el.scrollTo({ left: 90, behavior: "smooth" });
        setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 650);
        hasTeased.current = true;
      }
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Node "receive pulse" logic - subtle highlight
  useEffect(() => {
    const allSkills = [...pipelineRow1, ...pipelineRow2];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setActivePulseNode(allSkills[currentIndex]);
      setTimeout(() => setActivePulseNode(null), 800);
      currentIndex = (currentIndex + 1) % allSkills.length;
    }, 2000);

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
    const isPulsing = activePulseNode === skillId;

    return (
      <div className="relative z-10 flex flex-col items-center group flex-shrink-0">
        <motion.button
          variants={fadeIn('up', index * 0.05)}
          initial="hidden"
          whileInView="show"
          whileHover={{ scale: 1.04 }}
          onClick={() => handleSkillClick(skillId)}
          style={{ animationDelay: `${index * 0.4}s` }}
          className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 ease-out border skill-breathe group-hover:-translate-y-0.5 group-hover:ring-1 group-hover:ring-[#f13024]/30 ${
            selectedSkill?.id === skillId || isPulsing
            ? 'bg-accent/20 text-white border-accent shadow-[0_0_35px_rgba(241,48,36,0.4)] ring-1 ring-[#f13024]/50' 
            : 'bg-secondary/40 text-white/60 border-white/10 hover:border-accent/50 hover:text-accent group-hover:shadow-[0_0_35px_rgba(241,48,36,0.22)]'
          }`}
        >
          <Icon className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
        <span className="mt-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors text-center whitespace-nowrap">
          {skill.label}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full py-12 relative">
      <div 
        ref={pipelineRef}
        className="max-w-6xl mx-auto px-4 relative h-[400px] md:h-[450px] overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab active:cursor-grabbing"
      >
        <div className="relative h-full min-w-[950px] xl:min-w-0 flex flex-col justify-around py-8">
          
          {/* Row 1 Connector & Energy */}
          <div className="absolute top-[35%] left-0 w-full h-[1px] bg-white/10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent pipeline-sweep" />
            <span className="packet" style={{ "--travel": "100%", animationDelay: "0s" }} />
            <span className="packet" style={{ "--travel": "100%", animationDelay: "1.2s" }} />
            <span className="packet" style={{ "--travel": "100%", animationDelay: "2.4s" }} />
          </div>

          {/* Row 2 Connector & Energy */}
          <div className="absolute top-[75%] left-0 w-full h-[1px] bg-white/10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent pipeline-sweep" />
            <span className="packet" style={{ "--travel": "100%", animationDelay: "0.6s" }} />
            <span className="packet" style={{ "--travel": "100%", animationDelay: "1.8s" }} />
            <span className="packet" style={{ "--travel": "100%", animationDelay: "3.0s" }} />
          </div>
          
          {/* Row 1 */}
          <div className="flex items-center justify-between px-8 relative z-10">
            {pipelineRow1.map((id, i) => <SkillNode key={id} skillId={id} index={i} />)}
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between px-16 relative z-10">
            {pipelineRow2.map((id, i) => <SkillNode key={id} skillId={id} index={i + 6} />)}
          </div>
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
