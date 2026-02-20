import { 
  SiDocker, SiKubernetes, SiReact, SiPostgresql, SiNodedotjs, SiGit, 
  SiAmazonaws, SiOpenai, SiTypescript, SiSpringboot, SiTerraform, 
  SiRedis, SiMicrosoftazure, SiGooglecloud, SiPython, SiDjango,
  SiDotnet, SiMongodb, SiMysql, SiApachespark, SiNumpy, SiSpringsecurity,
  SiJsonwebtokens, SiJunit, SiPytorch, SiTensorflow
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const skillsData = [
  // DevOps / Cloud
  { id: 'git', label: 'Git', icon: SiGit, proofBadge: 'Agile Expert', description: 'Version control and collaboration.', bullets: ['Branching strategies', 'Conflict resolution'], tags: ['Git'], linkedProjects: [] },
  { id: 'jenkins', label: 'Jenkins', icon: SiGit, proofBadge: 'Hours → Minutes', description: 'Automated CI/CD pipelines.', bullets: ['Reduced release cycles from hours to minutes.', 'Zero-downtime deployments.'], tags: ['Jenkins', 'CI/CD'], linkedProjects: [] },
  { id: 'docker', label: 'Docker', icon: SiDocker, proofBadge: 'Microservices', description: 'Containerization and environment standardization.', bullets: ['Docker-based microservices.', 'Mentored team on containerization.'], tags: ['Docker'], linkedProjects: [] },
  { id: 'kubernetes', label: 'Kubernetes', icon: SiKubernetes, proofBadge: '99.8% Uptime', description: 'Orchestrating large-scale microservices.', bullets: ['Maintained 99.8% uptime for enterprise retail apps.'], tags: ['K8s'], linkedProjects: [] },
  { id: 'terraform', label: 'Terraform', icon: SiTerraform, proofBadge: 'IaC', description: 'Infrastructure as Code.', bullets: ['Managed cloud resources via Terraform.'], tags: ['IaC'], linkedProjects: [] },
  { id: 'cloud', label: 'AWS/Azure/GCP', icon: SiAmazonaws, proofBadge: 'Multi-Cloud', description: 'Expertise in major cloud providers.', bullets: ['Cross-cloud deployment infrastructure (AWS + GCP).', 'GCP APIs integration.'], tags: ['AWS', 'GCP', 'Azure'], linkedProjects: [] },
  
  // App / Data / AI
  { id: 'react', label: 'React/TS', icon: SiReact, proofBadge: 'High-Perf UI', description: 'Modern frontend engineering with TypeScript.', bullets: ['Optimized component performance.', 'Seamless cross-device user experiences.'], tags: ['React', 'TypeScript'], linkedProjects: [] },
  { id: 'node', label: 'Node/Express', icon: SiNodedotjs, proofBadge: '2TB/Month', description: 'High-performance backend pipelines.', bullets: ['Built pipelines handling 2TB of application data monthly.'], tags: ['Node', 'Express'], linkedProjects: [] },
  { id: 'springboot', label: 'Spring Boot', icon: SiSpringboot, proofBadge: 'Enterprise Java', description: 'Architecting scalable backend services.', bullets: ['Engineered containerized microservices.', '90% automated test coverage with JUnit.'], tags: ['Java', 'Spring Boot'], linkedProjects: [] },
  { id: 'postgres', label: 'Postgres/MySQL', icon: SiPostgresql, proofBadge: '60% Perf Boost', description: 'Database optimization and data architecture.', bullets: ['Reduced execution time from 2.5s to 1.0s (60% improvement).', 'MySQL query optimization & indexing.'], tags: ['Postgres', 'MySQL', 'MongoDB'], linkedProjects: [] },
  { id: 'redis', label: 'Redis', icon: SiRedis, proofBadge: '3.2s → 1.6s', description: 'Intelligent caching for performance.', bullets: ['Reduced average page load times by 50%.'], tags: ['Redis'], linkedProjects: [] },
  { id: 'ai', label: 'AI/LLM', icon: SiOpenai, proofBadge: 'GPT & Bedrock', description: 'Integrating LLMs into production workflows.', bullets: ['AI-powered chatbot using ChatGPT API.', 'Product recommendation engine using AWS Bedrock.'], tags: ['OpenAI', 'AWS Bedrock'], linkedProjects: [] }
];

export const pipelineRow1 = ['git', 'jenkins', 'docker', 'kubernetes', 'terraform', 'cloud'];
export const pipelineRow2 = ['react', 'node', 'springboot', 'postgres', 'redis', 'ai'];
