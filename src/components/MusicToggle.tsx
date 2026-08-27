import React, { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/tum-tak.mp3");

    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Browser blocked autoplay.
          // It will start after the first user interaction.
        });
    };

    // Try autoplay immediately
    startMusic();

    // Fallback: start after first user interaction
    const handleFirstInteraction = () => {
      startMusic();

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Audio playback failed:", error);
        });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
      aria-label={isPlaying ? "Pause Background Music" : "Play Background Music"}
    >
      {isPlaying ? (
        <Music size={18} />
      ) : (
        <VolumeX size={18} />
      )}
    </motion.button>
  );
};