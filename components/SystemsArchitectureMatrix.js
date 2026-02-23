import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiMicrosoftazure, SiGooglecloud, SiJenkins
} from 'react-icons/si';
import SkillSpotlightModal from './SkillSpotlightModal';
import { skillsData } from '../data/skillsPlaygroundData';

const SystemsArchitectureMatrix = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quadrants = [
    {
      title: "Frontend Layer",
      position: "top-left",
      skills: [
        { id: 'react', label: 'React / TypeScript', icon: SiReact },
        { id: 'ui-perf', label: 'UI Performance', icon: SiReact }, // Using React icon as placeholder if specific not found
        { id: 'state', label: 'State Management', icon: SiRedis }
      ]
    },
    {
      title: "Backend Layer",
      position: "top-right",
      skills: [
        { id: 'node', label: 'Node.js / Express', icon: SiNodedotjs },
        { id: 'springboot', label: 'Spring Boot', icon: SiSpringboot },
        { id: 'rest', label: 'REST APIs', icon: SiNodedotjs },
        { id: 'microservices', label: 'Microservices', icon: SiDocker }
      ]
    },
    {
      title: "Infrastructure Layer",
      position: "bottom-left",
      skills: [
        { id: 'docker', label: 'Docker', icon: SiDocker },
        { id: 'kubernetes', label: 'Kubernetes', icon: SiKubernetes },
        { id: 'terraform', label: 'Terraform', icon: SiTerraform },
        { id: 'cloud', label: 'AWS / Azure / GCP', icon: SiAmazonaws },
        { id: 'jenkins', label: 'CI/CD (Jenkins)', icon: SiJenkins }
      ]
    },
    {
      title: "Intelligence Layer",
      position: "bottom-right",
      skills: [
        { id: 'ai', label: 'OpenAI API', icon: SiOpenai },
        { id: 'bedrock', label: 'AWS Bedrock', icon: SiAmazonaws },
        { id: 'data-pipelines', label: 'Data Pipelines', icon: SiPostgresql },
        { id: 'nlp', label: 'NLP', icon: SiOpenai }
      ]
    }
  ];

  const handleSkillClick = (skillId) => {
    const skill = skillsData.find(s => s.id === skillId) || {
      id: skillId,
      label: skillId,
      icon: SiReact,
      description: "Technical expertise in " + skillId,
      proofBadge: "Production Ready",
      linkedProjects: [],
      bullets: ["Enterprise grade implementation", "Scalable architecture"],
      tags: [skillId]
    };
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const ConnectionLine = ({ skillId, quadrantPos }) => {
    if (hoveredSkill !== skillId) return null;

    // Simplified connection line logic
    const isLeft = quadrantPos.includes('left');
    const isTop = quadrantPos.includes('top');
    
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
        <motion.path
          d={`M ${isLeft ? '100%' : '0%'} ${isTop ? '100%' : '0%'} L ${isLeft ? '150%' : '-50%'} ${isTop ? '150%' : '-50%'}`}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    );
  };

  return (
    <div className="relative w-full py-20 px-4 min-h-[800px] flex flex-col items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Layout for Desktop */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 items-center max-w-7xl w-full">
        
        {/* Left Side Clusters */}
        <div className="space-y-12 order-2 lg:order-1">
          {quadrants.filter(q => q.position.includes('left')).map((q) => (
            <motion.div 
              key={q.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/20 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
            >
              <h3 className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-6">{q.title}</h3>
              <div className="grid grid-cols-1 gap-3">
                {q.skills.map((skill) => (
                  <motion.button
                    key={skill.id}
                    onHoverStart={() => setHoveredSkill(skill.id)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    onClick={() => handleSkillClick(skill.id)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all group/skill"
                  >
                    <div className="text-2xl text-white/50 group-hover/skill:text-accent transition-colors">
                      <skill.icon />
                    </div>
                    <span className="text-sm font-medium text-white/70 group-hover/skill:text-white">{skill.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Core Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 bg-secondary/40 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.3)] relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-[40px] blur opacity-50 group-hover:opacity-100 transition duration-1000" />
          <div className="relative">
            <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center text-5xl text-accent mb-8 border border-accent/20 shadow-[0_0_30px_rgba(241,48,36,0.2)]">
              <SiKubernetes className="animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Systems Engineer</h2>
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-6">Full Stack • DevOps • AI</p>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Building scalable production systems from frontend to infrastructure to intelligence.
            </p>
            <button 
              onClick={() => {
                setSelectedSkill(skillsData[0]);
                setIsModalOpen(true);
              }}
              className="bg-accent/20 hover:bg-accent text-white px-8 py-3 rounded-full border border-accent/30 transition-all duration-300 font-bold uppercase text-xs tracking-widest"
            >
              View Technical Proof
            </button>
          </div>
        </motion.div>

        {/* Right Side Clusters */}
        <div className="space-y-12 order-3">
          {quadrants.filter(q => q.position.includes('right')).map((q) => (
            <motion.div 
              key={q.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/20 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl relative group"
            >
              <h3 className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-6 text-right">{q.title}</h3>
              <div className="grid grid-cols-1 gap-3">
                {q.skills.map((skill) => (
                  <motion.button
                    key={skill.id}
                    onHoverStart={() => setHoveredSkill(skill.id)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    onClick={() => handleSkillClick(skill.id)}
                    whileHover={{ scale: 1.02, x: -5 }}
                    className="flex flex-row-reverse items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all group/skill text-right"
                  >
                    <div className="text-2xl text-white/50 group-hover/skill:text-accent transition-colors">
                      <skill.icon />
                    </div>
                    <span className="text-sm font-medium text-white/70 group-hover/skill:text-white">{skill.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SkillSpotlightModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectClick={() => {}}
      />
    </div>
  );
};

export default SystemsArchitectureMatrix;