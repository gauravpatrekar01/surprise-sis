import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/background.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Catch potential errors if audio file doesn't exist
      audioRef.current.play().catch(e => console.log('Audio playback failed', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
      aria-label="Toggle Background Music"
    >
      {isPlaying ? <Music size={18} /> : <VolumeX size={18} />}
    </motion.button>
  );
};
