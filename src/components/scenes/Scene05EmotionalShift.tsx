import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';

interface Props {
  onNext: () => void;
}

export const Scene05EmotionalShift: React.FC<Props> = ({ onNext }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showInterruption, setShowInterruption] = useState(false);
  const [interruptionIndex, setInterruptionIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const { lines, interruption, button } = content.appreciation;

  useEffect(() => {
    if (!showInterruption && currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 3000 : 4000);
      return () => clearTimeout(timer);
    } else if (!showInterruption && currentLine === lines.length) {
      setTimeout(() => setShowInterruption(true), 2000);
    }
  }, [currentLine, lines.length, showInterruption]);

  useEffect(() => {
    if (showInterruption && interruptionIndex < interruption.length) {
      const timer = setTimeout(() => {
        setInterruptionIndex(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (showInterruption && interruptionIndex === interruption.length) {
      setTimeout(() => setShowButton(true), 2000);
    }
  }, [showInterruption, interruptionIndex, interruption.length]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0, backgroundColor: '#0a0304' }}
      animate={{ opacity: 1, backgroundColor: 'transparent' }}
      exit="hidden"
      transition={{ duration: 2 }}
    >
      <div className="max-w-3xl mx-auto text-center w-full min-h-[200px] flex items-center justify-center">
        
        {!showInterruption ? (
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentLine}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed whitespace-pre-line"
            >
              {lines[currentLine]}
            </motion.h2>
          </AnimatePresence>
        ) : (
          <AnimatePresence mode="wait">
            <motion.h2
              key={`int-${interruptionIndex}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed ${
                interruptionIndex === 1 || interruptionIndex === 3 ? 'text-brand-gold italic' : 'text-white/90'
              }`}
            >
              {interruption[interruptionIndex]}
            </motion.h2>
          </AnimatePresence>
        )}
        
      </div>

      <AnimatePresence>
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
              {button}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
