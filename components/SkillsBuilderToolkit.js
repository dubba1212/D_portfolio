import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiJenkins
} from 'react-icons/si';
import { FaCode, FaServer, FaCogs, FaBrain, FaExternalLinkAlt, FaTimes, FaCopy, FaCheck } from 'react-icons/fa';

const SkillTab = ({ id, label, icon: Icon, active, onClick, isComposingActive }) => (
  <motion.button
    onClick={() => onClick(id)}
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border holo-card group relative ${
      active || isComposingActive
      ? 'bg-accent/20 border-accent/50 text-white shadow-[0_0_20px_rgba(241,48,36,0.3)]' 
      : 'bg-secondary/20 border-white/5 text-white/50 hover:border-white/20 hover:text-white'
    } ${active ? 'scanning-border' : ''}`}
  >
    <div className="holo-sweep group-hover:animate-holo-sweep" />
    <div className={`relative z-10 text-xl ${active || isComposingActive ? 'text-accent' : ''}`}>
      <Icon />
    </div>
    <span className="relative z-10 text-xs font-black uppercase tracking-widest">{label}</span>
    {(active || isComposingActive) && (
      <motion.div 
        layoutId="activeTabDot"
        className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#f13024]"
      />
    )}
  </motion.button>
);

const SkillModule = ({ skill, active, onClick, isComposingActive, onHover, boardRef }) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const Icon = skill.icon || SiReact;
  
  // Magnetic Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Max 8px movement
    x.set(distanceX * 0.1);
    y.set(distanceY * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onHover(null);
  };

  const handleClick = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 800);
    onClick(skill);
  };

  return (
    <motion.button
      style={{ x: springX, y: springY, perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => onHover(skill.id)}
      onClick={handleClick}
      className={`relative group p-4 rounded-xl border bg-secondary/40 backdrop-blur-md transition-all duration-300 text-left holo-card ${
        active || isComposingActive
        ? 'border-accent/50 shadow-[0_0_30px_rgba(241,48,36,0.2)]' 
        : 'border-white/5 hover:border-accent/30'
      }`}
    >
      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-accent led-blink" />
      <div className="relative z-10 flex flex-col gap-3">
        <div className="relative w-fit">
          <div className={`text-2xl ${active || isComposingActive ? 'text-accent' : 'text-white/40 group-hover:text-accent'} transition-colors`}>
            <Icon />
          </div>
          {(isPulsing || active || isComposingActive) && (
            <div className="pulse-ring absolute inset-0 bg-accent/20 rounded-full pointer-events-none" />
          )}
        </div>
        <div>
          <h4 className="text-[11px] font-black text-white/90 uppercase tracking-tighter mb-1">{skill.label}</h4>
          <div className="w-6 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.button>
  );
};

const ProofDock = ({ skill, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!skill) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="absolute bottom-0 left-0 w-full z-50 p-4"
    >
      <div className="bg-[#0a0a0c]/90 backdrop-blur-2xl border border-accent/30 rounded-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="text-accent animate-pulse font-mono text-xs tracking-tighter">
              {skill.id === 'blueprint' ? 'SYSTEM_BLUEPRINT_GEN' : `MODULE_DATA_STREAM: ${skill.label.toUpperCase()}`}
              <span className="cursor-blink">_</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(skill.bullets.join('\n'));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-[10px] text-white/40 hover:text-accent flex items-center gap-1 uppercase font-bold"
            >
              {copied ? <FaCheck className="text-green-500" /> : <FaCopy />} {copied ? 'COPIED' : 'COPY'}
            </button>
            <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[250px] overflow-y-auto no-scrollbar">
          <ul className="space-y-2">
            {skill.bullets?.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-[12px] text-white/70 font-mono">
                <span className="text-accent">{'>'}</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {skill.id !== 'blueprint' && (
            <div className="flex items-end justify-end">
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent border border-accent/20 px-4 py-2 rounded-lg hover:bg-accent/10 transition-all"
              >
                <FaExternalLinkAlt /> View Source
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsBuilderToolkit = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  const [isComposing, setIsComposing] = useState(false);
  const [composingStep, setComposingStep] = useState(null);
  const boardRef = useRef(null);

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

  const handleCompose = useCallback(() => {
    if (isComposing) return;
    setIsComposing(true);
    setSelectedSkill(null);
    
    const steps = ['frontend', 'backend', 'infrastructure', 'ai'];
    let currentStep = 0;

    const runStep = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        setComposingStep(step);
        setActiveCategory(step);
        currentStep++;
        setTimeout(runStep, 250);
      } else {
        setComposingStep(null);
        setSelectedSkill({
          id: 'blueprint',
          label: 'System Blueprint',
          bullets: [
            'STACK: React/TS + Node/Express + Postgres/Redis',
            'SERVICES: Microservices + Auth/JWT',
            'DEPLOY: Docker + Kubernetes + Jenkins CI/CD',
            'INTELLIGENCE: OpenAI RAG Pipeline'
          ]
        });
        setTimeout(() => setIsComposing(false), 500);
      }
    };
    runStep();
  }, [isComposing]);

  return (
    <div className="relative w-full py-12 px-4 max-w-7xl mx-auto min-h-[800px]">
      <div className="scanline-overlay opacity-20" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 h-full">
        
        {/* LEFT: Neural Workflow Switches */}
        <div className="lg:col-span-3 space-y-4">
          <div className="mb-6">
            <h3 className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              PROCESS_SELECT
            </h3>
            <div className="w-full h-[1px] bg-white/5" />
          </div>
          {categories.map((cat) => (
            <SkillTab 
              key={cat.id}
              {...cat}
              active={activeCategory === cat.id}
              isComposingActive={composingStep === cat.id}
              onClick={(id) => {
                setActiveCategory(id);
                setSelectedSkill(null);
              }}
            />
          ))}
        </div>

        {/* CENTER: Neural Sandbox Board */}
        <div className="lg:col-span-6 flex flex-col min-h-[500px] relative" ref={boardRef}>
          <div className="mb-6 flex justify-between items-end">
            <h3 className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">NEURAL_BOARD_V5</h3>
            <div className="text-[9px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full led-blink" />
              ACTIVE_BUS: {activeCategory}
            </div>
          </div>

          <div className="flex-1 bg-[#0d0d0f]/60 border border-white/5 rounded-[40px] p-8 backdrop-blur-md holo-card neural-grid relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-2 gap-6"
              >
                {toolkitData[activeCategory].modules.map((skill) => (
                  <SkillModule 
                    key={skill.id}
                    skill={skill}
                    active={selectedSkill?.id === skill.id}
                    isComposingActive={composingStep === activeCategory}
                    onClick={setSelectedSkill}
                    onHover={setHoveredSkillId}
                    boardRef={boardRef}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Neural Wiring SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <AnimatePresence>
                {hoveredSkillId && (
                  <motion.path
                    d="M 300 250 L 600 250" // Placeholder, dynamic calculation would be better
                    stroke="#f13024"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </svg>

            <AnimatePresence>
              {selectedSkill && (
                <ProofDock 
                  skill={selectedSkill} 
                  onClose={() => setSelectedSkill(null)}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Output Streams */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="mb-6">
            <h3 className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">OUTPUT_STREAMS</h3>
            <div className="w-full h-[1px] bg-white/5" />
          </div>

          <div className="flex-1 space-y-3">
            {toolkitData[activeCategory].outcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 bg-secondary/30 border rounded-xl flex items-center gap-3 group holo-card transition-all duration-500 ${
                  hoveredSkillId ? 'border-accent/30 bg-accent/5' : 'border-white/5'
                }`}
              >
                <div className="w-1 h-3 bg-accent/20 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ y: [-12, 12] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-2 bg-accent shadow-[0_0_8px_#f13024]"
                  />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-white/60 group-hover:text-white">{outcome}</span>
              </motion.div>
            ))}

            <div className="pt-8 relative">
              <motion.button
                onClick={handleCompose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-xl border-2 font-black uppercase text-[10px] tracking-[0.3em] transition-all duration-700 flex items-center justify-center gap-3 holo-card overflow-hidden ${
                  isComposing 
                  ? 'bg-accent border-accent text-white shadow-[0_0_50px_rgba(241,48,36,0.5)]' 
                  : 'bg-transparent border-accent/20 text-accent hover:border-accent hover:bg-accent/5'
                }`}
              >
                {isComposing ? 'INITIALIZING_BUILD_SEQUENCE...' : 'COMPOSE_ARCHITECTURE'}
              </motion.button>
              
              <AnimatePresence>
                {isComposing && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 font-mono text-[9px] text-center text-accent/60 uppercase tracking-widest animate-pulse"
                  >
                    MAPPING_NEURAL_PATHWAYS...
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBuilderToolkit;