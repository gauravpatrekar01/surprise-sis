import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { content } from '../../data/content';
import { fadeIn } from '../../animations/variants';

interface Props {
  name: string;
  onNext: () => void;
}

export const Scene03IdentityCheck: React.FC<Props> = ({ name, onNext }) => {
  const [currentCheck, setCurrentCheck] = useState(-1);
  const [showConclusion, setShowConclusion] = useState(false);
  const [conclusionIndex, setConclusionIndex] = useState(-1);
  const [showButton, setShowButton] = useState(false);
  
  const { title, checks, getConclusion, button } = content.identityCheck;
  const conclusionLines = getConclusion(name);

  useEffect(() => {
    if (currentCheck < checks.length) {
      const timer = setTimeout(() => {
        setCurrentCheck(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowConclusion(true), 1000);
    }
  }, [currentCheck, checks.length]);

  useEffect(() => {
    if (showConclusion && conclusionIndex < conclusionLines.length - 1) {
      const timer = setTimeout(() => {
        setConclusionIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (showConclusion && conclusionIndex >= conclusionLines.length - 1) {
      setTimeout(() => setShowButton(true), 1000);
    }
  }, [showConclusion, conclusionIndex, conclusionLines.length]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeIn}
    >
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-brand-gold font-sans tracking-[0.3em] text-sm md:text-base text-center mb-12 opacity-80">
          {title}
        </h2>

        <div className="space-y-6 mb-16">
          {checks.map((check, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: index <= currentCheck ? 1 : 0,
                x: index <= currentCheck ? 0 : -20 
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-500 ${index < currentCheck ? 'border-brand-gold bg-brand-gold/20' : 'border-white/20'}`}>
                {index < currentCheck && <Check size={14} className="text-brand-gold" />}
              </div>
              <span className={`font-sans text-lg ${index < currentCheck ? 'text-white/90' : 'text-white/50'}`}>
                {check}
              </span>
            </motion.div>
          ))}
        </div>

        {showConclusion && (
          <div className="text-center min-h-[200px] flex items-center justify-center mt-12 border-t border-white/10 pt-12">
            <AnimatePresence mode="wait">
              {conclusionIndex < conclusionLines.length && (
                <motion.div
                  key={conclusionIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`font-serif text-2xl ${conclusionIndex === 3 ? 'text-brand-gold text-glow text-3xl my-8' : 'text-white/80'}`}
                >
                  {conclusionLines[conclusionIndex]}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {showButton && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center mt-16"
          >
            <button
              onClick={onNext}
              className="px-8 py-3 rounded-full bg-white/5 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-all font-sans tracking-widest text-sm uppercase"
            >
              {button}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
