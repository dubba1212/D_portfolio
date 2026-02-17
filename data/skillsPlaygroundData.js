import { 
  SiDocker, 
  SiKubernetes, 
  SiReact, 
  SiPostgresql, 
  SiNodedotjs, 
  SiGit, 
  SiAmazonaws,
  SiOpenai
} from 'react-icons/si';
import { FaJenkins } from 'react-icons/fa';

export const skillsData = [
  {
    id: 'git',
    label: 'Git',
    icon: SiGit,
    proofBadge: '30% Faster Delivery',
    description: 'Expertise in Agile workflows and version control management.',
    bullets: [
      'Delivered 15+ production features following strict Agile methodologies.',
      'Improved delivery velocity by 30% through optimized code review processes.',
      'Advanced branching strategies for multi-environment CI/CD pipelines.'
    ],
    tags: ['Git', 'Agile', 'DevOps'],
    linkedProjects: ['Walmart Microservices', 'Version Full-stack Modernization']
  },
  {
    id: 'docker',
    label: 'Docker',
    icon: SiDocker,
    proofBadge: '15m Release Cycles',
    description: 'Containerization and environment standardization expert.',
    bullets: [
      'Reduced release cycles from 2 hours to 15 minutes using Jenkins + Docker.',
      'Implemented zero-downtime deployments for critical services.',
      'Orchestrated multi-container applications for local and production parity.'
    ],
    tags: ['Docker', 'Jenkins', 'CI/CD'],
    linkedProjects: ['Walmart Microservices', 'E-commerce']
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    icon: SiKubernetes,
    proofBadge: '99.8% Uptime',
    description: 'Orchestrating large-scale microservices with high availability.',
    bullets: [
      'Maintained 99.8% uptime for enterprise retail microservices.',
      'Serving 1,000+ daily users on production-grade clusters.',
      'Automated scaling and self-healing for critical retail infrastructure.'
    ],
    tags: ['Kubernetes', 'K8s', 'Microservices'],
    linkedProjects: ['Walmart Microservices']
  },
  {
    id: 'aws',
    label: 'AWS',
    icon: SiAmazonaws,
    proofBadge: '60% Faster Deploy',
    description: 'Cloud infrastructure management and serverless architectures.',
    bullets: [
      'Reduced deployment time by 60% with automated pipelines.',
      'Achieved 99.9% uptime with load balancing and autoscaling.',
      'Engineered cloud-native solutions using AWS Bedrock for AI features.'
    ],
    tags: ['AWS', 'Bedrock', 'CloudMart'],
    linkedProjects: ['CloudMart']
  },
  {
    id: 'postgres',
    label: 'Postgres',
    icon: SiPostgresql,
    proofBadge: '40% Perf Boost',
    description: 'Advanced database optimization and data architecture.',
    bullets: [
      'Improved backend performance by 40% via query optimization.',
      'Reduced latency from 2.5s to 1.0s (60%) through indexing and tuning.',
      'Managed scalable relational schemas for high-traffic applications.'
    ],
    tags: ['Postgres', 'SQL', 'Optimization'],
    linkedProjects: ['E-commerce', 'Version Full-stack Modernization']
  },
  {
    id: 'node',
    label: 'Node.js',
    icon: SiNodedotjs,
    proofBadge: '2TB/mo Data Scale',
    description: 'Building high-performance backend pipelines and real-time APIs.',
    bullets: [
      'Built pipelines handling ~2TB/month for real-time analytics.',
      'Engineered RESTful and GraphQL APIs for enterprise scale.',
      'Implemented real-time dashboards with low-latency streaming.'
    ],
    tags: ['Node.js', 'Express', 'Streaming'],
    linkedProjects: ['AI Appointment Scheduler', 'E-commerce']
  },
  {
    id: 'react',
    label: 'React',
    icon: SiReact,
    proofBadge: 'High-Perf UI',
    description: 'Modern frontend engineering with focus on performance and DX.',
    bullets: [
      'Built full-stack features with React + TypeScript.',
      'Improved component performance and state management architecture.',
      'Delivered seamless user experiences for data-heavy dashboards.'
    ],
    tags: ['React', 'TypeScript', 'Frontend'],
    linkedProjects: ['E-commerce', 'CloudMart', 'Version Full-stack Modernization']
  },
  {
    id: 'ai',
    label: 'AI Integration',
    icon: SiOpenai,
    proofBadge: 'LLM Powered',
    description: 'Specialized in building AI-driven features and automations.',
    bullets: [
      'Built AI Appointment Scheduler using ChatGPT + GCP APIs.',
      'Engineered CloudMart AI recommendations using OpenAI + AWS Bedrock.',
      'Integrated LLMs into production workflows for real-time intelligence.'
    ],
    tags: ['OpenAI', 'Bedrock', 'GCP'],
    linkedProjects: ['AI Appointment Scheduler', 'CloudMart']
  }
];

export const pipelineFlow = ['git', 'docker', 'kubernetes', 'aws', 'postgres', 'node', 'react', 'ai'];
