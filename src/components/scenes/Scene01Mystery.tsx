import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeIn, staggerContainer } from '../../animations/variants';

interface Props {
  onComplete: (name: string) => void;
}

export const Scene01Mystery: React.FC<Props> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        onComplete(name.trim());
      }, 1000);
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      initial="hidden"
      animate={isSubmitting ? "hidden" : "visible"}
      variants={fadeIn}
    >
      <motion.div variants={staggerContainer} className="text-center max-w-2xl mx-auto mb-16">
        {content.mystery.lines.map((line, i) => (
          <motion.h1 
            key={i} 
            variants={fadeIn} 
            className="text-2xl md:text-4xl font-serif text-white/90 mb-8 whitespace-pre-line leading-relaxed"
          >
            {line}
          </motion.h1>
        ))}
      </motion.div>

      <motion.form 
        variants={fadeIn} 
        onSubmit={handleSubmit}
        className="w-full max-w-sm relative mt-8"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={content.mystery.inputPlaceholder}
          className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-center text-xl text-brand-gold placeholder:text-white/20 focus:outline-none focus:border-brand-gold transition-colors font-sans"
        />
        
        <div className="mt-12 text-center h-12">
          {name.trim() && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              type="submit"
              className="px-8 py-3 rounded-full bg-white/5 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-all font-sans tracking-widest text-sm uppercase"
            >
              {content.mystery.button}
            </motion.button>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
};
