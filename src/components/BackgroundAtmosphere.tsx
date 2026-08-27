import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundAtmosphere: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number, x: number, y: number, size: number, duration: number }[]>([]);

  useEffect(() => {
    // Generate some random lightweight particles for the ambient atmosphere
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <div className="bg-grain" />
      <div className="vignette-overlay" />
      
      {/* Ambient slow moving gradients */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-gold/10 blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-brand-wine/40 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-red-900/10 blur-[100px] mix-blend-screen animate-float" />
        
        {/* Subtle light rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent opacity-30 mix-blend-screen" />
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-brand-gold/30 blur-[1px]"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </>
  );
};
