import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiJenkins, SiMysql, SiPython, SiDjango, SiDotnet, SiMongodb, SiApachespark, SiNumpy
} from 'react-icons/si';
import { FaCode, FaServer, FaCogs, FaBrain, FaExternalLinkAlt, FaTimes, FaCopy, FaCheck, FaLock, FaRocket, FaFlask, FaSearch, FaDatabase, FaChartLine, FaEye, FaQuestionCircle } from 'react-icons/fa';
import { scenariosData } from '../data/scenarios';

const SkillTab = ({ id, label, icon: Icon, active, locked, onClick, isComposingActive, guidedMode }) => (
  <motion.button
    onClick={() => !locked && onClick(id)}
    whileHover={!locked ? { x: 5 } : {}}
    whileTap={!locked ? { scale: 0.95 } : {}}
    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border holo-card group relative ${
      active || isComposingActive
      ? 'bg-accent/20 border-accent/50 text-white shadow-[0_0_20px_rgba(241,48,36,0.3)]' 
      : locked 
      ? 'bg-black/40 border-white/5 text-white/20 cursor-not-allowed opacity-50'
      : 'bg-secondary/20 border-white/5 text-white/50 hover:border-white/20 hover:text-white'
    } ${active ? 'scanning-border' : ''} ${guidedMode && !locked && !active ? 'animate-pulse border-accent/30' : ''}`}
  >
    <div className="holo-sweep group-hover:animate-holo-sweep" />
    <div className={`relative z-10 text-xl ${active || isComposingActive ? 'text-accent' : ''}`}>
      {locked ? <FaLock className="text-sm" /> : <Icon />}
    </div>
    <div className="flex flex-col items-start relative z-10">
      <span className="text-xs font-black uppercase tracking-widest">{label}</span>
      {locked && <span className="text-[7px] font-bold text-accent/60 uppercase tracking-tighter">LOCKED — CONNECT TO PROCEED</span>}
    </div>
    {(active || isComposingActive) && (
      <motion.div 
        layoutId="activeTabDot"
        className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#f13024]"
      />
    )}
  </motion.button>
);

const SkillModule = ({ skill, active, onClick, isComposingActive, onHover, onDragStart, id, small, guidedMode }) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const Icon = skill.icon || SiReact;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
    onHover?.(null);
  };

  return (
    <motion.button
      id={`module-${skill.id}`}
      style={{ x: springX, y: springY, perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => onHover?.(skill.id)}
      onPointerDown={(e) => onDragStart?.(e, skill.id)}
      onClick={() => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 800);
        onClick(skill);
      }}
      className={`relative group rounded-xl border bg-secondary/40 backdrop-blur-md transition-all duration-300 text-left holo-card touch-none skill-module-card ${
        small ? 'p-2' : 'p-4'
      } ${
        active || isComposingActive
        ? 'border-accent/50 shadow-[0_0_30px_rgba(241,48,36,0.2)]' 
        : 'border-white/5 hover:border-accent/30'
      } ${guidedMode && !active ? 'animate-pulse border-accent/20' : ''}`}
    >
      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-accent led-blink" />
      <div className={`relative z-10 flex flex-col ${small ? 'gap-1' : 'gap-3'}`}>
        <div className="relative w-fit">
          <div className={`${small ? 'text-lg' : 'text-2xl'} ${active || isComposingActive ? 'text-accent' : 'text-white/40 group-hover:text-accent'} transition-colors`}>
            <Icon />
          </div>
          {(isPulsing || active || isComposingActive) && (
            <div className="pulse-ring absolute inset-0 bg-accent/20 rounded-full pointer-events-none" />
          )}
        </div>
        <div>
          <h4 className={`${small ? 'text-[9px]' : 'text-[11px]'} font-black text-white/90 uppercase tracking-tighter mb-1`}>{skill.label}</h4>
          <div className="w-6 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.button>
  );
};

const ModuleTerminal = ({ skill, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!skill) return null;

  const title = `MODULE_DATA_STREAM: ${skill.label.toUpperCase()}`;
  const bullets = skill.bullets || [];
  const description = skill.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-auto pt-6 border-t border-white/5"
    >
      <div className="bg-black/60 rounded-xl border border-accent/30 p-4 font-mono shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="text-accent animate-pulse font-mono text-[10px] tracking-tighter">
            {title}
            <span className="cursor-blink">_</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(bullets.join('\n'));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-[10px] text-white/40 hover:text-white flex items-center gap-1 uppercase font-bold"
            >
              {copied ? <FaCheck className="text-green-500" /> : <FaCopy />} {copied ? 'COPIED' : 'COPY'}
            </button>
            <button onClick={onClose} className="text-white/30 hover:text-white text-xs">
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-1">
            {bullets?.map((bullet, i) => (
              <li key={i} className="text-[10px] text-white/60 flex gap-2 font-mono">
                <span className="text-accent">{'>'}</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between items-end text-right">
            <p className="text-[9px] text-white/40 italic mb-3 max-w-[200px]">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ScenarioTerminal = ({ scenario, githubRepo, onClose }) => {
  if (!scenario) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-auto pt-6 border-t border-white/5"
    >
      <div className="bg-black/60 rounded-xl border border-accent/30 p-4 font-mono">
        <div className="flex items-center justify-between mb-3">
          <span className="text-accent text-[10px] font-black uppercase tracking-tighter">
            SCENARIO_PLAN: {scenario.label.toUpperCase()}
          </span>
          <button onClick={onClose} className="text-white/30 hover:text-white text-xs">
            <FaTimes />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-1">
            {(scenario.plan || []).map((step, i) => (
              <li key={i} className="text-[10px] text-white/60 flex gap-2">
                <span className="text-accent">{'>'}</span> {step}
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between items-end">
            <p className="text-[9px] text-white/40 italic mb-3 text-right max-w-[200px]">{scenario.description}</p>
            {githubRepo && (
              <button 
                onClick={() => window.open(githubRepo.html_url, '_blank')}
                className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-accent border border-accent/20 px-3 py-1.5 rounded-lg hover:bg-accent/10 transition-all"
              >
                <FaExternalLinkAlt /> View matching repo
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsBuilderToolkit = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [selectedModule, setSelectedModule] = useState(null);
  const [activeScenarioId, setActiveScenarioId] = useState(null);
  const [githubRepo, setGithubRepo] = useState(null);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  const [guidedMode, setGuidedMode] = useState(false);
  const [unlockedTabs, setUnlockedTabs] = useState(['frontend', 'backend', 'infrastructure', 'ai']);
  const [connections, setConnections] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [dragCurrentPos, setDragCurrentPos] = useState({ x: 0, y: 0 });
  const [dragSourceId, setDragSourceId] = useState(null);
  const [activeDropTarget, setActiveDropTarget] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  const boardRef = useRef(null);
  const dockContainerRef = useRef(null);

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: FaCode },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'infrastructure', label: 'Infrastructure', icon: FaCogs },
    { id: 'ai', label: 'AI / LLM', icon: FaBrain },
  ];

  const toolkitData = {
    frontend: {
      modules: [
        { id: 'react', label: 'React / TS', icon: SiReact, tag: 'UI', bullets: ['Built high-performance dashboards.', 'Reusable component libraries.'], description: 'Modern UI engineering with strong focus on performance and accessibility.' },
        { id: 'ui-perf', label: 'UI Perf', icon: SiTypescript, tag: 'Optimize', bullets: ['Reduced LCP by 40%.', 'Implemented code splitting.'], description: 'Frontend optimization and performance metrics auditing.' },
        { id: 'state', label: 'State Mgmt', icon: SiRedis, tag: 'Data', bullets: ['Complex Redux/Zustand workflows.', 'Real-time data synchronization.'], description: 'Scalable state management patterns for enterprise applications.' },
      ],
      outcomes: [
        { id: 'out-dash', label: 'Dashboard UI' },
        { id: 'out-perf', label: 'Performance UI' },
        { id: 'out-comp', label: 'Component Systems' }
      ]
    },
    backend: {
      modules: [
        { id: 'node', label: 'Node/Express', icon: SiNodedotjs, tag: 'API', bullets: ['Scalable RESTful services.', 'Real-time WebSockets integration.'], description: 'Server-side engineering for high-traffic data pipelines.' },
        { id: 'springboot', label: 'Spring Boot', icon: SiSpringboot, tag: 'Enterprise', bullets: ['Microservices architecture.', '90%+ test coverage.'], description: 'Robust enterprise Java development with Spring ecosystem.' },
        { id: 'auth', label: 'Auth/JWT', icon: SiGit, tag: 'Security', bullets: ['OAuth2 & JWT implementation.', 'Secure session management.'], description: 'Authentication and authorization security protocols.' },
        { id: 'python', label: 'Python/Django', icon: SiPython, tag: 'Data', bullets: ['Rapid API development.', 'Data processing backends.'], description: 'Flexible backend development for AI and data-heavy applications.' },
      ],
      outcomes: [
        { id: 'out-api', label: 'REST APIs' },
        { id: 'out-auth', label: 'Auth/JWT' },
        { id: 'out-micro', label: 'Microservices' },
        { id: 'out-data', label: 'Data Processing' }
      ]
    },
    infrastructure: {
      modules: [
        { id: 'docker', label: 'Docker', icon: SiDocker, tag: 'Container', bullets: ['Optimized multi-stage builds.', 'Standardized dev environments.'], description: 'Containerization and environment orchestration.' },
        { id: 'k8s', label: 'Kubernetes', icon: SiKubernetes, tag: 'Orchestrate', bullets: ['Helm chart management.', 'Auto-scaling production clusters.'], description: 'Cluster management and cloud-native scaling.' },
        { id: 'terraform', label: 'Terraform', icon: SiTerraform, tag: 'IaC', bullets: ['Infrastructure as Code for AWS/GCP.', 'Automated environment teardowns.'], description: 'Cloud infrastructure automation and management.' },
        { id: 'jenkins', label: 'Jenkins', icon: SiJenkins, tag: 'CI/CD', bullets: ['Automated build & test pipelines.', 'Blue/Green deployment strategy.'], description: 'Continuous integration and deployment engineering.' },
        { id: 'aws', label: 'AWS/GCP', icon: SiAmazonaws, tag: 'Cloud', bullets: ['Multi-region deployments.', 'Cost optimization.'], description: 'Enterprise cloud infrastructure architecture.' },
      ],
      outcomes: [
        { id: 'out-cicd', label: 'CI/CD Pipelines' },
        { id: 'out-k8s', label: 'K8s Clusters' },
        { id: 'out-iac', label: 'IaC Automation' },
        { id: 'out-cloud', label: 'Cloud Environments' }
      ]
    },
    ai: {
      modules: [
        { id: 'openai', label: 'OpenAI API', icon: SiOpenai, tag: 'LLM', bullets: ['Prompt engineering for RAG.', 'Token optimization strategies.'], description: 'Integrating large language models into production applications.' },
        { id: 'bedrock', label: 'AWS Bedrock', icon: SiAmazonaws, tag: 'Cloud AI', bullets: ['Multi-model evaluations.', 'Enterprise AI deployments.'], description: 'Cloud-native AI services and foundation models.' },
        { id: 'rag', label: 'RAG Pipeline', icon: SiTypescript, tag: 'Data', bullets: ['Vector DB integration (Pinecone).', 'Context-aware AI responses.'], description: 'Retrieval Augmented Generation for intelligent data access.' },
        { id: 'nlp', label: 'NLP Engine', icon: SiPython, tag: 'ML', bullets: ['Sentiment analysis.', 'Entity extraction.'], description: 'Natural Language Processing for unstructured data analysis.' },
      ],
      outcomes: [
        { id: 'out-gpt', label: 'ChatGPT Tools' },
        { id: 'out-bed', label: 'Bedrock Apps' },
        { id: 'out-rag', label: 'RAG Pipelines' },
        { id: 'out-nlp', label: 'NLP Analytics' }
      ]
    }
  };

  const fetchGithubRepo = async (scenario) => {
    try {
      const cached = sessionStorage.getItem(`gh-repo-${scenario.id}`);
      if (cached) return JSON.parse(cached);

      const res = await fetch('https://api.github.com/users/dubba1212/repos?per_page=100');
      if (!res.ok) return null;
      const repos = await res.json();
      
      const match = repos.find(repo => {
        const text = `${repo.name} ${repo.description} ${repo.topics?.join(' ')}`.toLowerCase();
        return scenario.keywords.some(kw => text.includes(kw));
      });

      if (match) {
        sessionStorage.setItem(`gh-repo-${scenario.id}`, JSON.stringify(match));
      }
      return match;
    } catch {
      return null;
    }
  };

  const handleScenario = async (scenarioId) => {
    if (activeScenarioId === scenarioId) {
      setActiveScenarioId(null);
      setGithubRepo(null);
      return;
    }

    const scenario = scenariosData.find(s => s.id === scenarioId);
    setActiveScenarioId(scenarioId);
    setSelectedModule(null);
    
    const repo = await fetchGithubRepo(scenario);
    setGithubRepo(repo);
  };

  const handleModuleClick = (skill) => {
    setSelectedModule(skill);
  };

  const handleTabChange = (catId) => {
    setActiveCategory(catId);
    setSelectedModule(null);
  };

  const resetGuidedMode = () => {
    setGuidedMode(false);
    setUnlockedTabs(['frontend', 'backend', 'infrastructure', 'ai']);
    setSelectedModule(null);
    setConnections([]);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dockContainerRef.current && !dockContainerRef.current.contains(e.target)) {
        if (!e.target.closest('.skill-module-card') && !e.target.closest('.scenario-pill') && !e.target.closest('.category-tab')) {
          setSelectedModule(null);
        }
      }
      if (showHelp && !e.target.closest('.help-popover') && !e.target.closest('.help-trigger')) {
        setShowHelp(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setShowHelp(false);
        setSelectedModule(null);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [showHelp]);

  const onDragStart = (e, moduleId) => {
    setDragging(true);
    setDragSourceId(moduleId);
    const rect = e.currentTarget.getBoundingClientRect();
    const boardRect = boardRef.current.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 - boardRect.left;
    const startY = rect.top + rect.height / 2 - boardRect.top;
    setDragStartPos({ x: startX, y: startY });
    setDragCurrentPos({ x: startX, y: startY });
  };

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e) => {
      const boardRect = boardRef.current.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      const x = clientX - boardRect.left;
      const y = clientY - boardRect.top;
      setDragCurrentPos({ x, y });
      
      const elements = document.elementsFromPoint(clientX, clientY);
      const target = elements.find(el => el.hasAttribute('data-output-id'));
      setActiveDropTarget(target ? target.getAttribute('data-output-id') : null);
    };
    const handleUp = () => {
      if (activeDropTarget && dragSourceId) {
        setConnections(prev => [...prev, { moduleId: dragSourceId, outputId: activeDropTarget }]);
        if (guidedMode) {
          const currentIdx = categories.findIndex(c => c.id === activeCategory);
          if (currentIdx < categories.length - 1) {
            setUnlockedTabs(prev => [...new Set([...prev, categories[currentIdx + 1].id])]);
          }
        }
      }
      setDragging(false);
      setDragSourceId(null);
      setActiveDropTarget(null);
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [dragging, activeDropTarget, dragSourceId, guidedMode, activeCategory]);

  const activeScenario = scenariosData.find(s => s.id === activeScenarioId);
  
  const getGuidedStepHint = () => {
    if (!guidedMode) return null;
    const hasModule = selectedModule !== null;
    const currentCatConnected = connections.some(c => toolkitData[activeCategory].modules.some(m => m.id === c.moduleId));
    
    if (!activeCategory) return "Step 1: Select a System Node";
    if (!hasModule && !currentCatConnected) return "Step 2: Select a Module from the board";
    if (hasModule && !currentCatConnected) return "Step 3: Drag the module to an Output Stream";
    return "Step 4: Select the next unlocked System Node";
  };

  return (
    <div className="relative w-full py-12 px-4 max-w-7xl mx-auto min-h-[900px] select-none flex flex-col" ref={boardRef}>
      <div className="scanline-overlay opacity-10" />
      
      {/* 1. TOP: Scenario Selector */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative z-40">
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {scenariosData.map(s => (
            <button
              key={s.id}
              onClick={() => handleScenario(s.id)}
              className={`scenario-pill px-4 py-2 bg-secondary/40 border rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeScenarioId === s.id 
                ? 'border-accent text-accent shadow-[0_0_15px_rgba(241,48,36,0.3)]' 
                : 'border-white/5 text-white/40 hover:text-accent hover:border-accent/30'
              }`}
            >
              <s.icon className="text-xs" /> {s.label}
            </button>
          ))}
          {activeScenarioId && (
            <button 
              onClick={() => {
                setActiveScenarioId(null);
                setGithubRepo(null);
              }}
              className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black uppercase tracking-widest text-accent hover:bg-accent/20 transition-all"
            >
              Clear Scenario
            </button>
          )}
        </div>
        <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full border border-white/5">
          <div className="relative">
            <button 
              onClick={() => setShowHelp(!showHelp)}
              className="help-trigger text-white/40 hover:text-white transition-colors"
            >
              <FaQuestionCircle className="text-sm" />
            </button>
            <AnimatePresence>
              {showHelp && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="help-popover absolute bottom-full mb-4 right-0 w-64 p-4 bg-[#121214] border border-white/10 rounded-2xl backdrop-blur-xl z-50 shadow-2xl"
                >
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-3">System Simulation Mode</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="text-[10px] text-white/60 flex gap-2"><span className="text-accent">•</span> Explore skills step-by-step</li>
                    <li className="text-[10px] text-white/60 flex gap-2"><span className="text-accent">•</span> Connect modules to unlock nodes</li>
                    <li className="text-[10px] text-white/60 flex gap-2"><span className="text-accent">•</span> Build complete system flows</li>
                  </ul>
                  <button 
                    onClick={resetGuidedMode}
                    className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-white/40 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all"
                  >
                    Reset Guided Mode
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Guided Mode</span>
          <button 
            onClick={() => {
              const newState = !guidedMode;
              setGuidedMode(newState);
              if (newState) setUnlockedTabs(['frontend']);
              else setUnlockedTabs(['frontend', 'backend', 'infrastructure', 'ai']);
              setSelectedModule(null);
            }}
            className={`w-8 h-4 rounded-full relative transition-all ${guidedMode ? 'bg-accent' : 'bg-white/10'}`}
          >
            <motion.div animate={{ x: guidedMode ? 16 : 2 }} className="absolute top-1 left-0 w-2 h-2 rounded-full bg-white shadow-sm" />
          </button>
        </div>
      </div>

      {/* 2. MIDDLE: Skills Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 flex-1">
        {/* Left Side: Category Tabs */}
        <div className="lg:col-span-3 space-y-4">
          <div className="mb-4">
            <h3 className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] mb-3">SYSTEM_NODES</h3>
            <div className="flex gap-1">
              {categories.map((cat, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${unlockedTabs.includes(cat.id) ? 'bg-accent shadow-[0_0_8px_#f13024]' : 'bg-white/10'}`} />
              ))}
            </div>
          </div>
          {categories.map((cat) => (
            <div key={cat.id} className="category-tab">
              <SkillTab 
                id={cat.id}
                label={cat.label}
                icon={cat.icon}
                active={activeCategory === cat.id}
                locked={guidedMode && !unlockedTabs.includes(cat.id)}
                isComposingActive={false}
                guidedMode={guidedMode && !activeCategory && unlockedTabs.includes(cat.id)}
                onClick={handleTabChange}
              />
            </div>
          ))}
        </div>

        {/* Center Side: Board */}
        <div className="lg:col-span-6 flex flex-col min-h-[600px] relative" ref={dockContainerRef}>
          <div className="flex-1 bg-[#0d0d0f]/60 border border-white/5 rounded-[40px] p-8 backdrop-blur-md holo-card neural-grid relative overflow-hidden flex flex-col">
            
            {guidedMode && (
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent animate-pulse">
                  {getGuidedStepHint()}
                </span>
              </div>
            )}

            <div className="flex-1 min-h-0 relative overflow-y-auto no-scrollbar pb-4">
              <AnimatePresence mode="wait">
                {activeScenario ? (
                  <motion.div
                    key="scenario-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 gap-x-8 gap-y-8"
                  >
                    {categories.map(cat => {
                      const modules = toolkitData[cat.id].modules.filter(m => activeScenario.requiredModules[cat.id]?.includes(m.id));
                      if (modules.length === 0) return null;
                      return (
                        <div key={cat.id} className="space-y-3">
                          <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 border-l border-accent/40 pl-3">{cat.label}</h5>
                          <div className="grid grid-cols-1 gap-3">
                            {modules.map(skill => (
                              <SkillModule 
                                key={skill.id}
                                skill={skill}
                                active={selectedModule?.id === skill.id}
                                onClick={handleModuleClick}
                                onHover={setHoveredSkillId}
                                onDragStart={onDragStart}
                                small
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    className="grid grid-cols-2 gap-6 relative z-10"
                  >
                    {toolkitData[activeCategory].modules.map((skill) => (
                      <SkillModule 
                        key={skill.id}
                        skill={skill}
                        active={selectedModule?.id === skill.id}
                        guidedMode={guidedMode && !selectedModule}
                        onClick={handleModuleClick}
                        onHover={setHoveredSkillId}
                        onDragStart={onDragStart}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Inline Scenario Terminal */}
            <AnimatePresence>
              {activeScenario && (
                <div className="flex-none">
                  <ScenarioTerminal 
                    scenario={activeScenario} 
                    githubRepo={githubRepo}
                    onClose={() => {
                      setActiveScenarioId(null);
                      setGithubRepo(null);
                    }}
                  />
                </div>
              )}
            </AnimatePresence>

            {/* Inline Module Terminal (Normal Mode) */}
            <AnimatePresence>
              {!activeScenario && selectedModule && (
                <div className="flex-none">
                  <ModuleTerminal 
                    skill={selectedModule} 
                    onClose={() => setSelectedModule(null)}
                  />
                </div>
              )}
            </AnimatePresence>

            {/* Neural Wiring SVG Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {dragging && (
                <motion.line
                  x1={dragStartPos.x} y1={dragStartPos.y}
                  x2={dragCurrentPos.x} y2={dragCurrentPos.y}
                  stroke="#f13024" strokeWidth="2" strokeDasharray="4,4" filter="url(#glow)"
                  initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
                />
              )}
              {connections.map((conn, idx) => {
                const modEl = document.getElementById(`module-${conn.moduleId}`);
                const outEl = document.querySelector(`[data-output-id="${conn.outputId}"]`);
                if (!modEl || !outEl) return null;
                const bRect = boardRef.current.getBoundingClientRect();
                const mRect = modEl.getBoundingClientRect();
                const oRect = outEl.getBoundingClientRect();
                return (
                  <motion.path
                    key={idx}
                    d={`M ${mRect.left + mRect.width/2 - bRect.left} ${mRect.top + mRect.height/2 - bRect.top} 
                       C ${mRect.right - bRect.left + 50} ${mRect.top + mRect.height/2 - bRect.top}, 
                         ${oRect.left - bRect.left - 50} ${oRect.top + oRect.height/2 - bRect.top}, 
                         ${oRect.left - bRect.left} ${oRect.top + oRect.height/2 - bRect.top}`}
                    stroke="#f13024" strokeWidth="1" fill="none" opacity="0.3" filter="url(#glow)"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Side: Output Streams */}
        <div className="lg:col-span-3 flex flex-col space-y-3">
          <h3 className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] mb-3">OUTPUT_STREAMS</h3>
          {(activeScenario ? toolkitData[activeCategory].outcomes.filter(o => activeScenario.outputs.includes(o.id)) : toolkitData[activeCategory].outcomes).map((out) => {
            const isConnected = connections.some(c => c.outputId === out.id);
            return (
              <div
                key={out.id}
                data-output-id={out.id}
                className={`p-4 bg-secondary/30 border rounded-xl transition-all duration-300 relative group holo-card ${
                  activeDropTarget === out.id ? 'drop-target-active' : isConnected ? 'border-accent/40 bg-accent/5' : 'border-white/5'
                } ${guidedMode && selectedModule && !isConnected ? 'animate-pulse border-accent/20' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-3 rounded-full ${isConnected ? 'bg-accent' : 'bg-white/10'}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isConnected ? 'text-white' : 'text-white/40'}`}>
                    {out.label}
                  </span>
                  {isConnected && <FaCheck className="ml-auto text-accent text-[8px]" />}
                </div>
                {isConnected && (
                  <div className="absolute top-1 right-2 text-[6px] text-accent font-black uppercase tracking-tighter">Connected</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsBuilderToolkit;
