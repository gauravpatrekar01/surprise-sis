import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { slowReveal, staggerContainer, fadeIn } from '../../animations/variants';

interface Props {
  name: string;
  onNext: () => void;
}

export const Scene02NameReveal: React.FC<Props> = ({ name, onNext }) => {
  const [showButton, setShowButton] = useState(false);
  const lines = content.nameReveal.getLines(name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div variants={fadeIn} className="text-center max-w-2xl mx-auto space-y-8">
        {lines.map((line, i) => (
          <motion.h1 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            className={`font-serif text-3xl md:text-5xl leading-relaxed ${
              i === 0 ? 'text-brand-gold text-glow scale-110' : 'text-white/80'
            }`}
          >
            {line}
          </motion.h1>
        ))}
      </motion.div>

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
