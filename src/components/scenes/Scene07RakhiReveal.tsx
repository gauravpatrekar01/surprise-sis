import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';

interface Props {
  name: string;
  onNext: () => void;
}

export const Scene07RakhiReveal: React.FC<Props> = ({ name, onNext }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  
  const lines = content.rakhiReveal.getLines(name);
  const showRakhiArt = lineIndex >= 3;

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, lineIndex === 3 ? 5000 : 3500);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowButton(true), 2000);
    }
  }, [lineIndex, lines.length]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backgroundColor: showRakhiArt ? '#1a0508' : '#0f0505' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      
      {/* Background glow when Rakhi is revealed */}
      <AnimatePresence>
        {showRakhiArt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto text-center w-full relative z-10">
        
        {/* CSS Rakhi Art */}
        <AnimatePresence>
          {showRakhiArt && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="flex items-center justify-center mb-12"
            >
              {/* Thread line */}
              <div className="absolute w-[300px] h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
              
              {/* Center ornament */}
              <div className="relative w-16 h-16 rounded-full rakhi-thread border border-brand-gold/40 flex items-center justify-center bg-brand-dark">
                <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                </div>
                
                {/* Decorative dots */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-1 h-1 rounded-full bg-brand-gold/60"
                    style={{
                      transform: `rotate(${i * 45}deg) translateY(-24px)`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {lineIndex < lines.length && (
              <motion.h2
                key={lineIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`text-2xl md:text-4xl font-serif leading-relaxed ${
                  lineIndex === 3 || lineIndex === lines.length - 1 ? 'text-brand-gold text-glow text-4xl md:text-6xl' : 'text-white/90'
                }`}
              >
                {lines[lineIndex]}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
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
              {content.rakhiReveal.button}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
