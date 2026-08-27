import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { slowReveal } from '../../animations/variants';

interface Props {
  onNext: () => void;
}

export const Scene05EmotionalShift: React.FC<Props> = ({ onNext }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showInterruption, setShowInterruption] = useState(false);
  const [interruptionIndex, setInterruptionIndex] = useState(-1);
  const [showButton, setShowButton] = useState(false);

  const { lines, interruption, button } = content.appreciation;

  useEffect(() => {
    if (!showInterruption && currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 3000 : 4000); // Wait longer on the first lines
      return () => clearTimeout(timer);
    } else if (!showInterruption && currentLine === lines.length) {
      setTimeout(() => setShowInterruption(true), 3000);
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
      initial={{ opacity: 0, backgroundColor: '#0a0304' }} // Slightly darker for emotional shift
      animate={{ opacity: 1, backgroundColor: 'transparent' }}
      exit="hidden"
      transition={{ duration: 2 }}
    >
      <div className="max-w-3xl mx-auto text-center w-full relative h-[400px] flex items-center justify-center">
        
        {!showInterruption ? (
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentLine}
              variants={slowReveal}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 1.5 } }}
              className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed whitespace-pre-line absolute"
            >
              {lines[currentLine]}
            </motion.h2>
          </AnimatePresence>
        ) : (
          <AnimatePresence mode="wait">
            <motion.h2
              key={`int-${interruptionIndex}`}
              variants={slowReveal}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, filter: "blur(5px)", transition: { duration: 1 } }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed absolute ${
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
