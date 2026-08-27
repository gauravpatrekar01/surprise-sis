import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <>
      <div className="bg-grain" />
      
      {/* Ambient slow moving gradients */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-gold/5 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-wine/20 blur-[150px] mix-blend-screen" />
      </motion.div>
    </>
  );
};
