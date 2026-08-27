import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';

interface Props {
  name: string;
}

export const Scene09FinalLetter: React.FC<Props> = ({ name }) => {
  const lines = content.finalLetter.getLines(name);
  const { signatureOutro, signatureName, footer } = content.finalLetter;

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0, backgroundColor: '#000000' }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <div className="max-w-2xl mx-auto w-full space-y-8">
        
        <div className="space-y-6">
          {lines.map((line, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed text-center ${
                index === 0 ? 'text-brand-gold italic text-3xl' : 'text-white/90'
              }`}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 3 }}
          className="text-center w-full flex flex-col items-center justify-center pt-12 border-t border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 2 }}
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
              transition={{ delay: 4, duration: 3, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-brand-gold tracking-widest">{signatureName}</h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 2 }}
            className="mt-12 text-white/30 font-sans text-xs uppercase tracking-[0.2em]"
          >
            {footer}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
