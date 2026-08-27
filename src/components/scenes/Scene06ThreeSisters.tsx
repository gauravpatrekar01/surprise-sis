import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { slowReveal } from '../../animations/variants';

interface Props {
  onNext: () => void;
}

export const Scene06ThreeSisters: React.FC<Props> = ({ onNext }) => {
  const [phase, setPhase] = useState<'lines' | 'reveal' | 'button'>('lines');
  const [lineIndex, setLineIndex] = useState(0);
  const [revealIndex, setRevealIndex] = useState(0);

  const { lines, reveal, button } = content.threeSisters;

  useEffect(() => {
    if (phase === 'lines' && lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, 3500);
      return () => clearTimeout(timer);
    } else if (phase === 'lines' && lineIndex === lines.length) {
      const timer = setTimeout(() => {
        setPhase('reveal');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, lineIndex, lines.length]);

  useEffect(() => {
    if (phase === 'reveal' && revealIndex < reveal.length) {
      const timer = setTimeout(() => {
        setRevealIndex(prev => prev + 1);
      }, 3500);
      return () => clearTimeout(timer);
    } else if (phase === 'reveal' && revealIndex === reveal.length) {
      setPhase('button');
    }
  }, [phase, revealIndex, reveal.length]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-3xl mx-auto text-center w-full relative h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === 'lines' && lineIndex < lines.length && (
            <motion.h2
              key={`line-${lineIndex}`}
              variants={slowReveal}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 1.5 } }}
              className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed absolute"
            >
              {lines[lineIndex]}
            </motion.h2>
          )}

          {phase === 'reveal' && revealIndex < reveal.length && (
            <motion.h2
              key={`reveal-${revealIndex}`}
              variants={slowReveal}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 1.5 } }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed absolute whitespace-pre-line ${
                revealIndex >= 3 ? 'text-brand-gold text-glow' : 'text-white/90'
              }`}
            >
              {reveal[revealIndex]}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {phase === 'button' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            className="absolute bottom-20"
          >
            <button
              onClick={onNext}
              className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-white/10 hover:border-white/40 transition-all font-sans tracking-widest text-sm uppercase"
            >
              {button}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
