import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';

interface Props {
  name: string;
  onNext: () => void;
}

export const Scene02NameReveal: React.FC<Props> = ({ name, onNext }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const lines = content.nameReveal.getLines(name);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 1000);
      return () => clearTimeout(buttonTimer);
    }
  }, [currentLine, lines.length]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="text-center max-w-2xl mx-auto min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentLine < lines.length && (
            <motion.h1 
              key={currentLine}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`font-serif text-3xl md:text-5xl leading-relaxed ${
                currentLine === 0 ? 'text-brand-gold text-glow scale-110' : 'text-white/80'
              }`}
            >
              {lines[currentLine]}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {showButton && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="absolute bottom-20"
        >
          <button
            onClick={onNext}
            className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-white/10 hover:border-white/40 transition-all font-sans tracking-widest text-sm uppercase"
          >
            {content.nameReveal.button}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
