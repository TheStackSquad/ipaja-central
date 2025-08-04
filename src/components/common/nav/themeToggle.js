// src/components/common/nav/themeToggle.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Stars } from "lucide-react";
import {
  containerVariants,
  iconSlideVariants,
  sunIconVariants,
  moonIconVariants,
  backgroundGlowVariants,
  starsVariants,
} from "@/animation/navbarAnimate";

export default function ThemeToggle({ theme, toggleTheme }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Background glow effect for dark mode */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600"
        variants={backgroundGlowVariants}
        animate={theme}
        style={{ scale: 1.5 }}
      />

      {/* Main toggle container */}
      <motion.button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-16 h-8 rounded-full border backdrop-blur-sm cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-500 focus:ring-opacity-50 overflow-hidden"
        variants={containerVariants}
        animate={theme}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Toggle Theme"
      >
        {/* Sliding background */}
        <motion.div
          className="absolute top-0.5 left-0.5 w-7 h-7 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-indigo-500 dark:to-purple-600 shadow-lg"
          variants={iconSlideVariants}
          animate={theme}
        />

        {/* Sun Icon */}
        <motion.div
          className="absolute top-1 left-1 w-6 h-6 flex items-center justify-center"
          variants={sunIconVariants}
          animate={theme}
        >
          <Sun
            size={16}
            className="text-white drop-shadow-sm"
            strokeWidth={2.5}
          />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center"
          variants={moonIconVariants}
          animate={theme}
        >
          <Moon
            size={16}
            className="text-white drop-shadow-sm"
            strokeWidth={2.5}
          />
        </motion.div>

        {/* Stars animation for dark mode */}
        <AnimatePresence>
          {theme === "dark" && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              variants={starsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Stars size={4} className="text-yellow-300" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ripple effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-purple-400"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 1.3, opacity: 0 }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating particles for enhanced effect */}
      <AnimatePresence>
        {theme === "dark" && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-purple-400 opacity-60"
                style={{
                  left: `${-10 + Math.random() * 120}%`,
                  top: `${-10 + Math.random() * 120}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  y: [-20, -40],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
