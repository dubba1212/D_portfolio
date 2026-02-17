import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const SkillDetailPanel = ({ skill, isOpen, onClose, onProjectClick }) => {
  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] xl:hidden"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-secondary/95 backdrop-blur-xl border-l border-white/10 z-[70] shadow-2xl p-8 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-2xl text-white/50 hover:text-accent transition-colors"
            >
              <IoClose />
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl text-accent">
                <Icon />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{skill.label}</h2>
                <div className="bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/30 inline-block mt-1">
                  {skill.proofBadge}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-3">What I Do</h3>
                <p className="text-lg text-white/80 leading-relaxed">{skill.description}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-3">Key Proof Points</h3>
                <ul className="space-y-4">
                  {skill.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-white/70">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Projects Using This</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.linkedProjects.map((project, i) => (
                    <button
                      key={i}
                      onClick={() => onProjectClick(project)}
                      className="bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 px-4 py-2 rounded-xl text-sm text-white/80 hover:text-accent transition-all duration-300"
                    >
                      {project}
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] text-white/30 border border-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SkillDetailPanel;
