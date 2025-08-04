// src/animation/navbarAnimate.js


// Original mobile menu variants
export const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Original icon rotate variants (keeping for backward compatibility)
export const iconRotateVariants = {
  open: { rotate: 180, transition: { duration: 0.3 } },
  closed: { rotate: 0, transition: { duration: 0.3 } },
};

// Enhanced Theme Toggle Animation Variants
export const containerVariants = {
  light: {
    backgroundColor: "rgba(249, 250, 251, 0.8)",
    borderColor: "rgba(229, 231, 235, 0.6)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  dark: {
    backgroundColor: "rgba(17, 24, 39, 0.8)",
    borderColor: "rgba(75, 85, 99, 0.6)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const iconSlideVariants = {
  light: {
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  dark: {
    x: 32,
    rotate: 180,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export const sunIconVariants = {
  light: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  dark: {
    opacity: 0,
    rotate: 90,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const moonIconVariants = {
  light: {
    opacity: 0,
    rotate: -90,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  dark: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const backgroundGlowVariants = {
  light: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
  dark: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export const starsVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: [0, 1, 0.7, 1],
    scale: [0, 1.2, 0.8, 1],
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      opacity: {
        times: [0, 0.3, 0.7, 1],
        duration: 1.2,
      },
    },
  },
};

// Additional navbar animation variants
export const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const navbarContainerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};