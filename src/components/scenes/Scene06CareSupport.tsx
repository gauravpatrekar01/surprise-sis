import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';

interface Props {
  onNext: () => void;
}

export const Scene06CareSupport: React.FC<Props> = ({ onNext }) => {
  const [phase, setPhase] = useState<'lines' | 'reveal' | 'button'>('lines');
  const [lineIndex, setLineIndex] = useState(0);
  const [revealIndex, setRevealIndex] = useState(0);

  const { lines, reveal, button } = content.careSupport;

  useEffect(() => {
    if (phase === 'lines' && lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, lineIndex === lines.length - 2 ? 4000 : 3500);
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
      <div className="max-w-3xl mx-auto text-center w-full min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === 'lines' && lineIndex < lines.length && (
            <motion.h2
              key={`line-${lineIndex}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed ${
                lineIndex >= lines.length - 2 ? 'text-brand-gold italic' : 'text-white/90'
              }`}
            >
              {lines[lineIndex]}
            </motion.h2>
          )}

          {phase === 'reveal' && revealIndex < reveal.length && (
            <motion.h2
              key={`reveal-${revealIndex}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed whitespace-pre-line"
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
              className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 transition-all font-sans tracking-widest text-sm uppercase"
            >
              {button}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
