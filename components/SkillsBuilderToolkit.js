import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiJenkins, SiMysql, SiPython, SiDjango, SiDotnet, SiMongodb, SiApachespark, SiNumpy
} from 'react-icons/si';
import { FaCode, FaServer, FaCogs, FaBrain, FaExternalLinkAlt, FaTimes, FaCopy, FaCheck, FaLock, FaRocket, FaFlask, FaSearch, FaDatabase, FaChartLine, FaEye } from 'react-icons/fa';

const SkillTab = ({ id, label, icon: Icon, active, locked, onClick, isComposingActive }) => (
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
    } ${active ? 'scanning-border' : ''}`}
  >
    <div className="holo-sweep group-hover:animate-holo-sweep" />
    <div className={`relative z-10 text-xl ${active || isComposingActive ? 'text-accent' : ''}`}>
      {locked ? <FaLock className="text-sm" /> : <Icon />}
    </div>
    <span className="relative z-10 text-xs font-black uppercase tracking-widest">{label}</span>
    {locked && <span className="ml-auto text-[8px] font-bold text-white/20 uppercase tracking-tighter">LOCKED</span>}
    {(active || isComposingActive) && (
      <motion.div 
        layoutId="activeTabDot"
        className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#f13024]"
      />
    )}
  </motion.button>
);

const SkillModule = ({ skill, active, onClick, isComposingActive, onHover, onDragStart, id, small }) => {
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
      }`}
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

const ProofDock = ({ mode, skill, scenario, githubRepo, onClose }) => {
  const [copied, setCopied] = useState(false);
  const dockRef = useRef(null);

  if (!skill && !scenario) return null;

  const title = mode === 'module' ? `MODULE_DATA_STREAM: ${skill.label.toUpperCase()}` : `SCENARIO_PLAN: ${scenario.label.toUpperCase()}`;
  const bullets = mode === 'module' ? skill.bullets : (scenario.plan || []);
  const description = mode === 'module' ? skill.description : scenario.description;

  return (
    <motion.div
      ref={dockRef}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="w-full mt-8"
    >
      <div className="bg-[#0a0a0c]/95 backdrop-blur-2xl border border-accent/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
          <div className="text-accent animate-pulse font-mono text-[10px] tracking-tighter">
            {title}
            <span className="cursor-blink">_</span>
          </div>
          <div className="flex items-center gap-4">
            {mode === 'module' && (
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
            )}
            <button onClick={onClose} className="text-white/30 hover:text-white">
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[300px] overflow-y-auto no-scrollbar">
          <div className="space-y-4">
            <ul className="space-y-2">
              {bullets?.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-white/70 font-mono">
                  <span className="text-accent">{'>'}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between items-end text-right">
            <p className="text-[10px] text-white/40 italic mb-4">{description}</p>
            {mode === 'scenario' && githubRepo && (
              <motion.button 
                whileHover={{ x: 5 }}
                onClick={() => window.open(githubRepo.html_url, '_blank')}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent border border-accent/20 px-4 py-2 rounded-lg hover:bg-accent/10 transition-all"
              >
                <FaExternalLinkAlt /> View matching repo
              </motion.button>
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
  const [dockOpen, setDockOpen] = useState(false);
  const [dockMode, setDockMode] = useState(null);
  const [githubRepo, setGithubRepo] = useState(null);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  const [isComposing, setIsComposing] = useState(false);
  const [composingStep, setComposingStep] = useState(null);
  const [guidedMode, setGuidedMode] = useState(false);
  const [unlockedTabs, setUnlockedTabs] = useState(['frontend', 'backend', 'infrastructure', 'ai']);
  const [connections, setConnections] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [dragCurrentPos, setDragCurrentPos] = useState({ x: 0, y: 0 });
  const [dragSourceId, setDragSourceId] = useState(null);
  const [activeDropTarget, setActiveDropTarget] = useState(null);

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

  const scenarios = [
    { 
      id: 'chatbot', 
      label: 'Build AI Chatbot', 
      icon: FaFlask, 
      keywords: ["chat", "bot", "llm", "openai", "assistant"],
      description: "Convergent AI architecture for conversational interfaces.",
      plan: ["FRONTEND: React/TS UI", "BACKEND: Node API", "INFRA: Docker", "AI: OpenAI / Bedrock"],
      required: { frontend: ['react'], backend: ['node'], infrastructure: ['docker'], ai: ['openai', 'bedrock'] },
      outputs: ['out-dash', 'out-api', 'out-cicd', 'out-gpt']
    },
    { 
      id: 'saas', 
      label: 'Build SaaS Dashboard', 
      icon: FaRocket, 
      keywords: ["dashboard", "admin", "portal", "ui"],
      description: "Scale-ready SaaS architecture with secure multitenancy.",
      plan: ["FRONTEND: Dashboard UI", "BACKEND: Auth/JWT", "INFRA: AWS/GCP", "DATA: Postgres"],
      required: { frontend: ['react', 'ui-perf'], backend: ['auth'], infrastructure: ['aws'], ai: [] },
      outputs: ['out-dash', 'out-perf', 'out-auth', 'out-cloud']
    },
    { 
      id: 'micro', 
      label: 'Build Microservices', 
      icon: FaCogs, 
      keywords: ["microservice", "spring", "services"],
      description: "Distributed systems architecture for enterprise scale.",
      plan: ["BACKEND: Spring Boot", "INFRA: K8s / Jenkins", "DATA: Redis"],
      required: { frontend: [], backend: ['springboot'], infrastructure: ['k8s', 'jenkins'], ai: [] },
      outputs: ['out-micro', 'out-k8s', 'out-cicd']
    },
    { 
      id: 'cicd', 
      label: 'Build CI/CD Pipeline', 
      icon: FaCogs, 
      keywords: ["devops", "ci", "cd", "jenkins", "kubernetes", "docker", "terraform"],
      description: "Automated delivery pipeline with full orchestration.",
      plan: ["INFRA: Git / Jenkins / Docker / K8s / Terraform"],
      required: { frontend: [], backend: [], infrastructure: ['jenkins', 'docker', 'k8s', 'terraform'], ai: [] },
      outputs: ['out-cicd', 'out-k8s', 'out-iac']
    },
    { 
      id: 'data', 
      label: 'Build Data Pipeline', 
      icon: FaDatabase, 
      keywords: ["data", "pipeline", "stream", "etl", "spark", "kafka"],
      description: "Real-time data processing and analytics architecture.",
      plan: ["BACKEND: Python / Node", "DATA: SQL / Redis", "INFRA: AWS"],
      required: { frontend: [], backend: ['python'], infrastructure: ['aws'], ai: [] },
      outputs: ['out-data', 'out-cloud']
    },
    { 
      id: 'rag', 
      label: 'Build AI Search (RAG)', 
      icon: FaSearch, 
      keywords: ["rag", "search", "retrieval", "vector", "embedding"],
      description: "Knowledge-augmented AI search system.",
      plan: ["BACKEND: Node / Python", "AI: RAG / OpenAI", "DATA: Vector DB"],
      required: { frontend: [], backend: ['node'], infrastructure: ['docker'], ai: ['rag', 'openai'] },
      outputs: ['out-rag', 'out-gpt']
    }
  ];

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
      setSelectedModule(null);
      setDockOpen(false);
      setDockMode(null);
      setConnections([]);
      return;
    }

    const scenario = scenarios.find(s => s.id === scenarioId);
    setActiveScenarioId(scenarioId);
    setSelectedModule(null);
    setDockMode('scenario');
    setDockOpen(true);
    setConnections([]);
    
    const repo = await fetchGithubRepo(scenario);
    setGithubRepo(repo);
  };

  const handleModuleClick = (skill) => {
    setSelectedModule(skill);
    setDockMode('module');
    setDockOpen(true);
  };

  const handleTabChange = (catId) => {
    setActiveCategory(catId);
    setSelectedModule(null);
    // Only close dock if not in scenario mode, or if scenario doesn't use this module
    if (dockMode === 'module') {
      setDockOpen(false);
      setDockMode(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dockContainerRef.current && !dockContainerRef.current.contains(e.target)) {
        const isModuleCard = e.target.closest('.skill-module-card');
        const isScenarioPill = e.target.closest('.scenario-pill');
        if (!isModuleCard && !isScenarioPill) {
          // Don't close if scenario is active and user just clicked category
          const isCategoryTab = e.target.closest('.category-tab');
          if (!isCategoryTab) {
            setDockOpen(false);
            setSelectedModule(null);
          }
        }
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

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
  }, [dragging, activeDropTarget, dragSourceId]);

  const activeScenario = scenarios.find(s => s.id === activeScenarioId);
  const visibleModules = activeScenario 
    ? toolkitData[activeCategory].modules.filter(m => activeScenario.required[activeCategory]?.includes(m.id))
    : toolkitData[activeCategory].modules;
  const visibleOutputs = activeScenario
    ? toolkitData[activeCategory].outcomes.filter(o => activeScenario.outputs.includes(o.id))
    : toolkitData[activeCategory].outcomes;

  return (
    <div className="relative w-full py-12 px-4 max-w-7xl mx-auto min-h-[900px] select-none flex flex-col" ref={boardRef}>
      <div className="scanline-overlay opacity-10" />
      
      {/* 1. TOP: Scenario Selector */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative z-20">
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {scenarios.map(s => (
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
                setSelectedModule(null);
                setDockOpen(false);
                setDockMode(null);
                setConnections([]);
              }}
              className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black uppercase tracking-widest text-accent hover:bg-accent/20 transition-all"
            >
              Clear Scenario
            </button>
          )}
        </div>
        <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full border border-white/5">
          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Guided Mode</span>
          <button 
            onClick={() => {
              setGuidedMode(!guidedMode);
              if (!guidedMode) setUnlockedTabs(['frontend']);
              else setUnlockedTabs(['frontend', 'backend', 'infrastructure', 'ai']);
              setSelectedModule(null);
              setDockOpen(false);
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
              {categories.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${unlockedTabs.length > i ? 'bg-accent shadow-[0_0_8px_#f13024]' : 'bg-white/10'}`} />
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
                isComposingActive={composingStep === cat.id}
                onClick={handleTabChange}
              />
            </div>
          ))}
        </div>

        {/* Center Side: Board */}
        <div className="lg:col-span-6 flex flex-col min-h-[500px] relative">
          <div className="flex-1 bg-[#0d0d0f]/60 border border-white/5 rounded-[40px] p-8 backdrop-blur-md holo-card neural-grid relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + (activeScenarioId || 'none')}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="grid grid-cols-2 gap-6 relative z-10"
              >
                {visibleModules.map((skill) => (
                  <SkillModule 
                    key={skill.id}
                    skill={skill}
                    active={selectedModule?.id === skill.id}
                    isComposingActive={composingStep === activeCategory}
                    onClick={handleModuleClick}
                    onHover={setHoveredSkillId}
                    onDragStart={onDragStart}
                  />
                ))}
              </motion.div>
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
          {visibleOutputs.map((out) => {
            const isConnected = connections.some(c => c.outputId === out.id);
            return (
              <div
                key={out.id}
                data-output-id={out.id}
                className={`p-4 bg-secondary/30 border rounded-xl transition-all duration-300 relative group holo-card ${
                  activeDropTarget === out.id ? 'drop-target-active' : isConnected ? 'border-accent/40 bg-accent/5' : 'border-white/5'
                }`}
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

      {/* 3. BOTTOM: Terminal Dock */}
      <div ref={dockContainerRef} className="relative z-30 mt-auto">
        <AnimatePresence>
          {dockOpen && (
            <ProofDock 
              mode={dockMode}
              skill={selectedModule} 
              scenario={activeScenario}
              githubRepo={githubRepo}
              onClose={() => {
                setDockOpen(false);
                setSelectedModule(null);
                // Also clear scenario if that was the mode, to stay consistent with user expectations
                if (dockMode === 'scenario') {
                  setActiveScenarioId(null);
                }
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsBuilderToolkit;