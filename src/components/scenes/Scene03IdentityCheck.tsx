import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { content } from '../../data/content';
import { fadeIn } from '../../animations/variants';

interface Props {
  name: string;
  onNext: () => void;
}

export const Scene03IdentityCheck: React.FC<Props> = ({ name, onNext }) => {
  const [showButton, setShowButton] = useState(false);
  
  const { title, checks, getConclusion, button } = content.identityCheck;
  const conclusionLines = getConclusion(name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="w-6 h-6 rounded-full border border-brand-gold bg-brand-gold/20 flex items-center justify-center">
                <Check size={14} className="text-brand-gold" />
              </div>
              <span className="font-sans text-lg text-white/90">
                {check}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-6 mt-12 border-t border-white/10 pt-12">
          {conclusionLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              className={`font-serif text-2xl ${index === 3 ? 'text-brand-gold text-glow text-3xl my-8' : 'text-white/80'}`}
            >
              {line}
            </motion.div>
          ))}
        </div>

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
