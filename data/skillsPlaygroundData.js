import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiMicrosoftazure, SiGooglecloud
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const skillsData = [
  // Platform / DevOps
  { id: 'git', label: 'Git', icon: SiGit, proofBadge: '30% Faster Delivery', description: 'Expertise in Agile workflows and version control management.', bullets: ['Delivered 15+ production features.', 'Improved delivery velocity by 30%.'], tags: ['Git'], linkedProjects: [] },
  { id: 'jenkins', label: 'Jenkins', icon: SiGit, proofBadge: 'CI/CD Automation', description: 'Automated release cycles reducing manual overhead.', bullets: ['Automated CI/CD pipelines with Jenkins and Docker.'], tags: ['Jenkins', 'CI/CD'], linkedProjects: [] },
  { id: 'docker', label: 'Docker', icon: SiDocker, proofBadge: '15m Release Cycles', description: 'Containerization and environment standardization expert.', bullets: ['Reduced release cycles from 2 hours to 15 minutes.'], tags: ['Docker'], linkedProjects: [] },
  { id: 'kubernetes', label: 'Kubernetes', icon: SiKubernetes, proofBadge: '99.8% Uptime', description: 'Orchestrating large-scale microservices.', bullets: ['Maintained 99.8% uptime for enterprise retail apps.'], tags: ['K8s'], linkedProjects: [] },
  { id: 'terraform', label: 'Terraform', icon: SiTerraform, proofBadge: 'IaC Expert', description: 'Infrastructure as Code for multi-cloud deployments.', bullets: ['Managed cloud resources via Terraform scripts.'], tags: ['IaC'], linkedProjects: [] },
  { id: 'cloud', label: 'Cloud (AWS/GCP)', icon: SiAmazonaws, proofBadge: 'Multi-Cloud', description: 'Expertise in AWS, Azure, and GCP architectures.', bullets: ['Implemented cross-cloud deployment infrastructure.'], tags: ['AWS', 'GCP'], linkedProjects: [] },
  
  // App / Data / AI
  { id: 'typescript', label: 'TypeScript', icon: SiTypescript, proofBadge: 'Type-Safe', description: 'Building robust, maintainable full-stack applications.', bullets: ['Developed enterprise-grade apps with TS.'], tags: ['TS'], linkedProjects: [] },
  { id: 'java', label: 'Java', icon: FaJava, proofBadge: 'Enterprise Core', description: 'Backend engineering with focus on performance and security.', bullets: ['Engineered microservices using Java.'], tags: ['Java'], linkedProjects: [] },
  { id: 'springboot', label: 'Spring Boot', icon: SiSpringboot, proofBadge: 'Microservices', description: 'Architecting scalable backend services.', bullets: ['Engineered containerized microservices using Spring Boot.'], tags: ['Spring'], linkedProjects: [] },
  { id: 'react', label: 'React', icon: SiReact, proofBadge: 'High-Perf UI', description: 'Modern frontend engineering.', bullets: ['Delivered full-stack features with React.'], tags: ['React'], linkedProjects: [] },
  { id: 'node', label: 'Node.js', icon: SiNodedotjs, proofBadge: 'Real-time API', description: 'High-performance backend pipelines.', bullets: ['Built pipelines handling ~2TB/month.'], tags: ['Node'], linkedProjects: [] },
  { id: 'postgres', label: 'Postgres', icon: SiPostgresql, proofBadge: '40% Perf Boost', description: 'Database optimization and data architecture.', bullets: ['Improved performance by 40% via query optimization.'], tags: ['Postgres'], linkedProjects: [] },
  { id: 'redis', label: 'Redis', icon: SiRedis, proofBadge: 'Caching', description: 'Optimizing load times through intelligent caching.', bullets: ['Reduced page load times via Redis caching.'], tags: ['Redis'], linkedProjects: [] },
  { id: 'ai', label: 'AI/LLM', icon: SiOpenai, proofBadge: 'GPT-4 Powered', description: 'Integrating LLMs into production workflows.', bullets: ['Built AI Appointment Scheduler using ChatGPT API.'], tags: ['AI'], linkedProjects: [] }
];

export const pipelineRow1 = ['git', 'jenkins', 'docker', 'kubernetes', 'terraform', 'cloud'];
export const pipelineRow2 = ['react', 'typescript', 'java', 'springboot', 'postgres', 'redis', 'ai'];
