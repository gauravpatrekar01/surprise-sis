import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { content } from '../../data/content';
import { slowReveal } from '../../animations/variants';

interface Props {
  onNext: () => void;
}

export const Scene08GiftReveal: React.FC<Props> = ({ onNext }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [showGift, setShowGift] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const { lines, button } = content.giftReveal;

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowGift(true), 1500);
    }
  }, [lineIndex, lines.length]);

  const handleOpenGift = () => {
    setIsOpened(true);
    
    // Confetti celebration
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d4af37', '#ffffff', '#1a0508']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#d4af37', '#ffffff', '#1a0508']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(onNext, 2000); // Transition to final letter after celebration
      }
    };
    frame();
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-3xl mx-auto text-center w-full relative h-[400px] flex flex-col items-center justify-center">
        
        {!showGift && (
          <AnimatePresence mode="wait">
            {lineIndex < lines.length && (
              <motion.h2
                key={lineIndex}
                variants={slowReveal}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 1 } }}
                className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed absolute"
              >
                {lines[lineIndex]}
              </motion.h2>
            )}
          </AnimatePresence>
        )}

        <AnimatePresence>
          {showGift && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              {/* CSS Gift Box */}
              <div className="relative w-32 h-32 mb-12">
                <motion.div 
                  animate={isOpened ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "anticipate" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-10 bg-brand-gold/20 border border-brand-gold/40 z-20 backdrop-blur-sm"
                >
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-full bg-brand-gold/50" />
                </motion.div>
                
                <div className="absolute bottom-0 w-32 h-28 bg-brand-gold/10 border border-brand-gold/30 z-10 backdrop-blur-sm">
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-full bg-brand-gold/40" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-4 bg-brand-gold/40" />
                </div>
                
                {/* Glow coming from inside */}
                <motion.div 
                  animate={isOpened ? { opacity: 1, scale: 2 } : { opacity: 0, scale: 1 }}
                  transition={{ duration: 2 }}
                  className="absolute bottom-0 w-32 h-32 bg-brand-gold blur-[40px] z-0"
                />
              </div>

              {!isOpened && (
                <button
                  onClick={handleOpenGift}
                  className="px-8 py-3 rounded-full bg-brand-gold border border-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all font-sans tracking-widest text-sm uppercase font-semibold"
                >
                  {button}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </motion.div>
  );
};
