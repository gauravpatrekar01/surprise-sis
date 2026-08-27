import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';

interface Props {
  onNext: () => void;
}

export const Scene06CareSupport: React.FC<Props> = ({ onNext }) => {
  const [showButton, setShowButton] = useState(false);

  const { lines, reveal, button } = content.careSupport;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-3xl mx-auto text-center w-full space-y-8">
        
        <div className="space-y-6">
          {lines.map((line, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed ${
                index >= lines.length - 2 ? 'text-brand-gold italic' : 'text-white/90'
              }`}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        <div className="space-y-6 mt-12 pt-8 border-t border-white/10">
          {reveal.map((line, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed whitespace-pre-line"
            >
              {line}
            </motion.h2>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showButton && (
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
