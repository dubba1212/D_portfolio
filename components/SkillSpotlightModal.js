import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoArrowBack } from 'react-icons/io5';
import { useEffect } from 'react';

const SkillSpotlightModal = ({ skill, isOpen, onClose, onProjectClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-[#141223]/55 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Actions */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors group"
                aria-label="Back"
              >
                <IoArrowBack className="text-2xl group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium hidden sm:inline">Back</span>
              </button>
              
              <div className="absolute left-1/2 -translate-x-1/2 top-4 hidden md:block">
                 <div className="w-12 h-1.5 bg-white/10 rounded-full" />
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent/20 text-white/60 hover:text-accent transition-all"
                aria-label="Close"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-hide">
              {/* Main Branding */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/40 transition-all duration-500" />
                   <div className="relative w-20 h-20 bg-secondary/50 rounded-2xl flex items-center justify-center text-5xl text-accent border border-accent/30 shadow-[0_0_20px_rgba(241,48,36,0.3)]">
                     <Icon />
                   </div>
                   {/* Floating badge on edge */}
                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-2 border-[#141223] flex items-center justify-center text-[10px] text-white font-bold animate-pulse">
                     !
                   </div>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {skill.label}
                  </h2>
                  <div className="inline-flex items-center bg-accent/20 text-accent text-xs font-black px-4 py-1.5 rounded-full border border-accent/30 uppercase tracking-widest">
                    {skill.proofBadge}
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Core Focus</h3>
                    <p className="text-xl text-white font-medium leading-relaxed">
                      {skill.description}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Linked Projects</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.linkedProjects.map((project, i) => (
                        <button
                          key={i}
                          onClick={() => onProjectClick(project)}
                          className="bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 px-4 py-2 rounded-xl text-sm text-white hover:text-accent transition-all duration-300 font-semibold"
                        >
                          {project}
                        </button>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-6">
                   <section>
                    <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Technical Impact</h3>
                    <ul className="space-y-4">
                      {skill.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-4 text-white/80 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                          <span className="text-base leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Footer Tags */}
              <div className="pt-8 flex flex-wrap gap-2 opacity-40">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] text-white border border-white/20 px-2 py-0.5 rounded uppercase font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SkillSpotlightModal;
