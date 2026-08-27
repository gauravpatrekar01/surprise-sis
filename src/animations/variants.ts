import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  // slower fade-in for readability
  visible: { opacity: 1, transition: { duration: 2.5, ease: "easeOut" } }
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  // slower upward reveal
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } }
};

export const slowReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 3, ease: "easeInOut" } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // slower stagger for individual lines
      staggerChildren: 2.5
    }
  }
};

export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // moderately fast stagger for quick scenes
      staggerChildren: 0.8
    }
  }
};

export const letterSpacingReveal: Variants = {
  hidden: { opacity: 0, letterSpacing: "1em", filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    letterSpacing: "normal", 
    filter: "blur(0px)",
    transition: { duration: 2, ease: "easeOut" } 
  }
};
