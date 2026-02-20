import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const experiences = [
  {
    company: 'Walmart',
    role: 'Software Engineer',
    period: 'Jan 2024 – Present',
    details: [
      'Engineered microservices using Java, Spring Boot, and Kubernetes (99.8% uptime).',
      'Delivered full-stack features with React and TypeScript.',
      'MySQL query optimization + Redis caching (3.2s → 1.6s).',
      'Automated CI/CD with Jenkins + Docker (hours → minutes).',
      'Secured APIs with Spring Security, JWT, OAuth 2.0 (90% test coverage).'
    ]
  },
  {
    company: 'Verizon',
    role: 'Software Engineer',
    period: 'May 2023 – Dec 2023',
    details: [
      'Modernized 3 legacy Python systems for 300+ users using React, TS, Node, and .NET Core.',
      'PostgreSQL optimization (40% performance improvement).',
      'Built pipelines handling 2TB/month application data.',
      'Introduced Docker-based microservices and mentored team on TDD.'
    ]
  },
  {
    company: 'Reddy Private Limited',
    role: 'Software Engineer',
    period: 'Jan 2021 – Oct 2021',
    details: [
      'Django + React e-commerce features for 500+ active users.',
      'PostgreSQL tuning (2.5s → 1.0s, 60% improvement).',
      'Data workflows using Spark + NumPy (5TB/month).',
      'RESTful APIs using DRF + JWT (25% reduction in production defects).'
    ]
  }
];

const AboutTimeline = () => {
  return (
    <div className="relative max-w-6xl mx-auto py-12 px-4 overflow-hidden">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2 hidden md:block" />
      
      <div className="relative z-10 space-y-12 md:space-y-0">
        {experiences.map((exp, index) => {
          const isRight = index % 2 === 0;
          return (
            <div key={index} className="md:grid md:grid-cols-2 md:gap-x-16 items-center relative md:mb-16 last:mb-0">
              {/* Dot on Line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary z-20 hidden md:block" />
              
              {/* Card Content */}
              <motion.div
                variants={fadeIn(isRight ? 'left' : 'right', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`${isRight ? 'md:col-start-2' : 'md:col-start-1 md:text-right'} group relative`}
              >
                <div className={`bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-accent/40 transition-all duration-500 relative overflow-hidden`}>
                  {/* Active Glow Ring */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <span className="text-accent font-bold text-sm uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{exp.role}</h3>
                    <h4 className="text-lg text-white/60 font-semibold mb-4">{exp.company}</h4>
                    <ul className={`space-y-2 ${!isRight ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-white/70 text-sm leading-relaxed flex items-start gap-2">
                          {isRight ? (
                            <>
                              <span className="text-accent mt-1 flex-shrink-0">•</span>
                              <span>{detail}</span>
                            </>
                          ) : (
                            <>
                              <span className="md:order-2">{detail}</span>
                              <span className="text-accent mt-1 flex-shrink-0 md:order-1">•</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTimeline;
