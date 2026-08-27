import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { fadeIn } from '../../animations/variants';

interface Props {
  onNext: () => void;
}

export const Scene04Quiz: React.FC<Props> = ({ onNext }) => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'conclusion'>('intro');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const { questions, conclusion, button, preTitle, title } = content.sisterTest;

  const handleOptionClick = (response: string) => {
    setSelectedResponse(response);
    setTimeout(() => {
      setSelectedResponse(null);
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
      } else {
        setStep('conclusion');
      }
    }, 2500); // Wait for them to read the witty response
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeIn}
    >
      <AnimatePresence mode="wait">
        
        {step === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-xl"
          >
            <h3 className="text-brand-gold/70 font-sans tracking-widest text-sm mb-6 uppercase">{preTitle}</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white/90 leading-tight mb-12">{title}</h2>
            <button
              onClick={() => setStep('quiz')}
              className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all font-sans tracking-widest text-sm uppercase"
            >
              Let's see →
            </button>
          </motion.div>
        )}

        {step === 'quiz' && (
          <motion.div 
            key={`q-${currentQIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-lg mx-auto"
          >
            <div className="text-brand-gold/50 font-sans text-sm mb-8 tracking-widest">
              QUESTION 0{currentQIndex + 1} / 0{questions.length}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-white/90 mb-12 min-h-[80px]">
              {questions[currentQIndex].q}
            </h3>

            <div className="space-y-4">
              {questions[currentQIndex].options.map((opt, i) => (
                <button
                  key={i}
                  disabled={selectedResponse !== null}
                  onClick={() => handleOptionClick(opt.response)}
                  className={`w-full text-left p-5 rounded-xl border transition-all font-sans text-lg
                    ${selectedResponse 
                      ? 'border-white/5 bg-transparent text-white/30 cursor-default' 
                      : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-gold/50 text-white/80 hover:text-white cursor-pointer'
                    }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {selectedResponse && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-center p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-xl"
                >
                  <p className="font-serif text-brand-gold text-xl italic">"{selectedResponse}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {step === 'conclusion' && (
          <motion.div 
            key="conclusion"
            variants={fadeIn}
            className="text-center max-w-xl"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-serif text-white mb-6"
            >
              {conclusion[0]}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-brand-gold text-2xl font-serif mb-12 text-glow"
            >
              {conclusion[1]}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="font-sans text-white/50 space-y-2 mb-16 text-sm"
            >
              <p>{conclusion[2]}</p>
              <p>{conclusion[3]}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              <button
                onClick={onNext}
                className="px-8 py-3 rounded-full bg-brand-gold/20 border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/30 transition-all font-sans tracking-widest text-sm uppercase"
              >
                {button}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
