import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const experiences = [
  {
    company: 'Walmart',
    role: 'Software Engineer',
    period: 'Jan 2024 – Present',
    description: 'Engineered containerized microservices using Java, Spring Boot, and Kubernetes, maintaining 99.8% uptime. Delivered full-stack features with React and TypeScript.',
    side: 'right'
  },
  {
    company: 'Verizon',
    role: 'Software Engineer',
    period: 'May 2023 – Dec 2023',
    description: 'Architected full-stack web applications using React, Node.js, and .NET Core. Improved backend performance by 40% through PostgreSQL query optimization.',
    side: 'left'
  },
  {
    company: 'Reddy Private Limited',
    role: 'Software Engineer',
    period: 'Jan 2021 – Oct 2021',
    description: 'Delivered full-stack e-commerce features using Python (Django) and React.js. Optimized PostgreSQL performance, reducing execution time by 60%.',
    side: 'right'
  }
];

const AboutTimeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-12 px-4">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeIn(exp.side === 'right' ? 'left' : 'right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center ${exp.side === 'right' ? 'md:justify-start' : 'md:justify-end md:flex-row-reverse'} relative`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-secondary z-10 hidden md:block" />
            
            <div className={`w-full md:w-[45%] bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-accent/20 transition-all duration-500 group`}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-accent font-bold text-sm uppercase tracking-widest">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{exp.role}</h3>
                <h4 className="text-lg text-white/60 font-semibold mb-3">{exp.company}</h4>
                <p className="text-white/70 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutTimeline;
