import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { slowReveal } from '../../animations/variants';

interface Props {
  name: string;
}

export const Scene09FinalLetter: React.FC<Props> = ({ name }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [showSignature, setShowSignature] = useState(false);

  const lines = content.finalLetter.getLines(name);
  const { signatureOutro, signatureName, footer } = content.finalLetter;

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, lineIndex === 0 || lineIndex === lines.length - 1 ? 5000 : 4000); // Longer pause on Dear [Name] and Happy Raksha Bandhan
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowSignature(true), 2000);
    }
  }, [lineIndex, lines.length]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0, backgroundColor: '#000000' }} // Pitch black for the final letter
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <div className="max-w-2xl mx-auto w-full relative min-h-[400px] flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          {lineIndex < lines.length && !showSignature && (
            <motion.h2
              key={lineIndex}
              variants={slowReveal}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 2 } }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed absolute text-center w-full ${
                lineIndex === 0 ? 'text-brand-gold italic text-3xl' : 'text-white/90'
              }`}
            >
              {lines[lineIndex]}
            </motion.h2>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSignature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="text-center w-full flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2 }}
                className="mb-12"
              >
                <h1 className="text-5xl md:text-7xl font-serif text-brand-gold text-glow mb-2">{name}</h1>
              </motion.div>
              
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 2 }}
                  className="font-serif text-white/60 text-lg md:text-xl italic"
                >
                  {signatureOutro}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 5, duration: 3, ease: "easeOut" }}
                >
                  <h2 className="text-4xl md:text-6xl font-serif text-brand-gold tracking-widest">{signatureName}</h2>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8, duration: 2 }}
                className="absolute bottom-[-100px] text-white/30 font-sans text-xs uppercase tracking-[0.2em]"
              >
                {footer}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </motion.div>
  );
};
