import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiJenkins
} from 'react-icons/si';
import { FaCode, FaServer, FaCogs, FaBrain, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { skillsData } from '../data/skillsPlaygroundData';

const SkillTab = ({ id, label, icon: Icon, active, onClick }) => (
  <motion.button
    onClick={() => onClick(id)}
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${
      active 
      ? 'bg-accent/20 border-accent/50 text-white shadow-[0_0_20px_rgba(241,48,36,0.2)]' 
      : 'bg-secondary/20 border-white/5 text-white/50 hover:border-white/20 hover:text-white'
    }`}
  >
    <div className={`text-xl ${active ? 'text-accent' : ''}`}>
      <Icon />
    </div>
    <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
    {active && (
      <motion.div 
        layoutId="activeTab"
        className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#f13024]"
      />
    )}
  </motion.button>
);

const SkillModule = ({ skill, active, onClick }) => {
  const Icon = skill.icon || SiReact;
  return (
    <motion.button
      layout
      whileHover={{ scale: 1.04, rotateY: 10, z: 50 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onClick(skill)}
      className={`relative group p-4 rounded-2xl border bg-secondary/30 backdrop-blur-md transition-all duration-300 text-left ${
        active 
        ? 'border-accent/50 shadow-[0_0_30px_rgba(241,48,36,0.15)]' 
        : 'border-white/5 hover:border-white/20'
      }`}
      style={{ perspective: '1000px' }}
    >
      <div className="flex items-start gap-4">
        <div className={`text-3xl ${active ? 'text-accent' : 'text-white/40 group-hover:text-white/70'} transition-colors`}>
          <Icon />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-1">{skill.label}</h4>
          <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded uppercase tracking-tighter text-white/40 group-hover:text-accent/70 transition-colors">
            {skill.tag || 'Module'}
          </span>
        </div>
      </div>
      {active && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 border border-accent/30 rounded-2xl pointer-events-none"
        />
      )}
    </motion.button>
  );
};

const ProofDrawer = ({ skill, onClose }) => (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    className="overflow-hidden bg-accent/5 border-t border-accent/20 mt-6 rounded-2xl"
  >
    <div className="p-6 relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
      >
        <FaTimes />
      </button>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
          <skill.icon />
        </div>
        <h3 className="font-bold text-white uppercase tracking-widest text-sm">{skill.label} Proof</h3>
      </div>
      <ul className="space-y-3">
        {skill.bullets?.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm text-white/70">
            <span className="text-accent mt-1">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4">
        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent hover:underline">
          <FaExternalLinkAlt /> View Project
        </button>
      </div>
    </div>
  </motion.div>
);

const SkillsBuilderToolkit = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isComposing, setIsComposing] = useState(false);

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: FaCode },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'infrastructure', label: 'Infrastructure', icon: FaCogs },
    { id: 'ai', label: 'AI / LLM', icon: FaBrain },
  ];

  const toolkitData = {
    frontend: {
      modules: [
        { id: 'react', label: 'React / TS', icon: SiReact, tag: 'UI', bullets: ['Built high-performance dashboards.', 'Reusable component libraries.'] },
        { id: 'ui-perf', label: 'UI Perf', icon: SiTypescript, tag: 'Optimize', bullets: ['Reduced LCP by 40%.', 'Implemented code splitting.'] },
        { id: 'state', label: 'State Mgmt', icon: SiRedis, tag: 'Data', bullets: ['Complex Redux/Zustand workflows.', 'Real-time data synchronization.'] },
      ],
      outcomes: ['Dashboard UI', 'Performance UI', 'Component Systems']
    },
    backend: {
      modules: [
        { id: 'node', label: 'Node/Express', icon: SiNodedotjs, tag: 'API', bullets: ['Scalable RESTful services.', 'Real-time WebSockets integration.'] },
        { id: 'springboot', label: 'Spring Boot', icon: SiSpringboot, tag: 'Enterprise', bullets: ['Microservices architecture.', '90%+ test coverage.'] },
        { id: 'auth', label: 'Auth/JWT', icon: SiGit, tag: 'Security', bullets: ['OAuth2 & JWT implementation.', 'Secure session management.'] },
      ],
      outcomes: ['REST APIs', 'Auth Systems', 'Microservices']
    },
    infrastructure: {
      modules: [
        { id: 'docker', label: 'Docker', icon: SiDocker, tag: 'Container', bullets: ['Optimized multi-stage builds.', 'Standardized dev environments.'] },
        { id: 'k8s', label: 'Kubernetes', icon: SiKubernetes, tag: 'Orchestrate', bullets: ['Helm chart management.', 'Auto-scaling production clusters.'] },
        { id: 'terraform', label: 'Terraform', icon: SiTerraform, tag: 'IaC', bullets: ['Infrastructure as Code for AWS/GCP.', 'Automated environment teardowns.'] },
        { id: 'jenkins', label: 'Jenkins', icon: SiJenkins, tag: 'CI/CD', bullets: ['Automated build & test pipelines.', 'Blue/Green deployment strategy.'] },
      ],
      outcomes: ['CI/CD Pipelines', 'K8s Clusters', 'IaC Automation']
    },
    ai: {
      modules: [
        { id: 'openai', label: 'OpenAI API', icon: SiOpenai, tag: 'LLM', bullets: ['Prompt engineering for RAG.', 'Token optimization strategies.'] },
        { id: 'bedrock', label: 'AWS Bedrock', icon: SiAmazonaws, tag: 'Cloud AI', bullets: ['Multi-model evaluations.', 'Enterprise AI deployments.'] },
        { id: 'rag', label: 'RAG Pipeline', icon: SiTypescript, tag: 'Data', bullets: ['Vector DB integration (Pinecone).', 'Context-aware AI responses.'] },
      ],
      outcomes: ['ChatGPT Tools', 'Bedrock Apps', 'RAG Pipelines']
    }
  };

  const handleCompose = () => {
    setIsComposing(true);
    setTimeout(() => setIsComposing(false), 2000);
  };

  return (
    <div className="relative w-full py-12 px-4 max-w-7xl mx-auto min-h-[700px]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT: Category Tabs */}
        <div className="lg:col-span-3 space-y-3">
          <div className="mb-6">
            <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Workflow Step</h3>
            <div className="w-10 h-0.5 bg-accent/30" />
          </div>
          {categories.map((cat) => (
            <SkillTab 
              key={cat.id}
              {...cat}
              active={activeCategory === cat.id}
              onClick={(id) => {
                setActiveCategory(id);
                setSelectedSkill(null);
              }}
            />
          ))}
        </div>

        {/* CENTER: Toolkit modules */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Toolkit Modules</h3>
              <div className="w-10 h-0.5 bg-accent/30" />
            </div>
            <div className="text-[10px] font-bold text-accent uppercase tracking-widest animate-pulse">
              {activeCategory} ready
            </div>
          </div>

          <div className="flex-1 bg-secondary/10 border border-white/5 rounded-[32px] p-6 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {toolkitData[activeCategory].modules.map((skill) => (
                  <SkillModule 
                    key={skill.id}
                    skill={skill}
                    active={selectedSkill?.id === skill.id}
                    onClick={setSelectedSkill}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {selectedSkill && (
                <ProofDrawer 
                  skill={selectedSkill} 
                  onClose={() => setSelectedSkill(null)}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Output panel */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="mb-6">
            <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Build Output</h3>
            <div className="w-10 h-0.5 bg-accent/30" />
          </div>

          <div className="flex-1 space-y-4">
            {toolkitData[activeCategory].outcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-secondary/20 border border-white/5 rounded-2xl flex items-center gap-3 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform shadow-[0_0_8px_#f13024]" />
                <span className="text-sm font-medium text-white/80">{outcome}</span>
              </motion.div>
            ))}

            <div className="pt-8">
              <motion.button
                onClick={handleCompose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl border-2 font-black uppercase text-xs tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3 ${
                  isComposing 
                  ? 'bg-accent border-accent text-white shadow-[0_0_30px_#f13024]' 
                  : 'bg-transparent border-accent/30 text-accent hover:bg-accent/10'
                }`}
              >
                {isComposing ? (
                  <>Building System <span className="animate-bounce">...</span></>
                ) : (
                  <>Compose System</>
                )}
              </motion.button>
              
              {isComposing && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-[10px] text-center text-white/40 uppercase tracking-widest font-bold"
                >
                  Synthesizing E2E Workflow
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBuilderToolkit;