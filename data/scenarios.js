import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiJenkins, SiPython, SiDjango, SiMongodb, SiApachespark, SiNumpy
} from 'react-icons/si';
import { FaFlask, FaRocket, FaCogs, FaDatabase, FaSearch } from 'react-icons/fa';

export const scenariosData = [
  { 
    id: 'chatbot', 
    label: 'Build AI Chatbot', 
    icon: FaFlask, 
    keywords: ["chat", "bot", "llm", "openai", "assistant"],
    description: "Convergent AI architecture for conversational interfaces.",
    plan: ["FRONTEND: React/TS UI", "BACKEND: Node API", "INFRA: Docker", "AI: OpenAI / Bedrock"],
    requiredModules: { 
      frontend: ['react'], 
      backend: ['node'], 
      infrastructure: ['docker'], 
      ai: ['openai', 'bedrock'] 
    },
    outputs: ['out-dash', 'out-api', 'out-cicd', 'out-gpt'],
    matchingRepoUrl: "https://github.com/dubba1212/ai-chatbot"
  },
  { 
    id: 'saas', 
    label: 'Build SaaS Dashboard', 
    icon: FaRocket, 
    keywords: ["dashboard", "admin", "portal", "ui"],
    description: "Scale-ready SaaS architecture with secure multitenancy.",
    plan: ["FRONTEND: Dashboard UI", "BACKEND: Auth/JWT", "INFRA: AWS/GCP", "DATA: Postgres"],
    requiredModules: { 
      frontend: ['react', 'ui-perf'], 
      backend: ['auth'], 
      infrastructure: ['aws'], 
      ai: [] 
    },
    outputs: ['out-dash', 'out-perf', 'out-auth', 'out-cloud']
  },
  { 
    id: 'micro', 
    label: 'Build Microservices', 
    icon: FaCogs, 
    keywords: ["microservice", "spring", "services"],
    description: "Distributed systems architecture for enterprise scale.",
    plan: ["BACKEND: Spring Boot", "INFRA: K8s / Jenkins", "DATA: Redis"],
    requiredModules: { 
      frontend: [], 
      backend: ['springboot'], 
      infrastructure: ['k8s', 'jenkins'], 
      ai: [] 
    },
    outputs: ['out-micro', 'out-k8s', 'out-cicd']
  },
  { 
    id: 'cicd', 
    label: 'Build CI/CD Pipeline', 
    icon: FaCogs, 
    keywords: ["devops", "ci", "cd", "jenkins", "kubernetes", "docker", "terraform"],
    description: "Automated delivery pipeline with full orchestration.",
    plan: ["INFRA: Git / Jenkins / Docker / K8s / Terraform"],
    requiredModules: { 
      frontend: [], 
      backend: [], 
      infrastructure: ['jenkins', 'docker', 'k8s', 'terraform'], 
      ai: [] 
    },
    outputs: ['out-cicd', 'out-k8s', 'out-iac']
  },
  { 
    id: 'data', 
    label: 'Build Data Pipeline', 
    icon: FaDatabase, 
    keywords: ["data", "pipeline", "stream", "etl", "spark", "kafka"],
    description: "Real-time data processing and analytics architecture.",
    plan: ["BACKEND: Python / Node", "DATA: SQL / Redis", "INFRA: AWS"],
    requiredModules: { 
      frontend: [], 
      backend: ['python'], 
      infrastructure: ['aws'], 
      ai: [] 
    },
    outputs: ['out-data', 'out-cloud']
  },
  { 
    id: 'rag', 
    label: 'Build AI Search (RAG)', 
    icon: FaSearch, 
    keywords: ["rag", "search", "retrieval", "vector", "embedding"],
    description: "Knowledge-augmented AI search system.",
    plan: ["BACKEND: Node / Python", "AI: RAG / OpenAI", "DATA: Vector DB"],
    requiredModules: { 
      frontend: [], 
      backend: ['node'], 
      infrastructure: ['docker'], 
      ai: ['rag', 'openai'] 
    },
    outputs: ['out-rag', 'out-gpt']
  }
];
