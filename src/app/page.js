// src/app/page.js
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  heroCardVariants,
  titleVariants,
  subtitleVariants,
  descriptionVariants,
  buttonVariants,
  floatingElementVariants,
} from "@/animation/layoutAnimate";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  // Add state to track the theme (dark or light)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check the theme once the component is mounted on the client
    setIsDarkTheme(document.documentElement.classList.contains("dark"));

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  // Determine the background style based on the client-side state
  const backgroundStyle = {
    background: isDarkTheme
      ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
         linear-gradient(135deg, #1f2937 0%, #374151 25%, #4b5563 50%, #6b7280 75%, #9ca3af 100%)`
      : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
         linear-gradient(135deg, #e5e7eb 0%, #f3f4f6 25%, #f9fafb 50%, #fdf2f8 75%, #ffffff 100%)`,
  };

  return (
    <motion.main
      className="min-h-screen relative overflow-hidden text-gray-800 bg-gray-200 dark:text-gray-100 dark:bg-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      // Use the dynamically generated style object
      style={backgroundStyle}
    >
      {/* Rest of your component code remains the same */}
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(148, 163, 184, 0.1)"
                strokeWidth="1"
                className="dark:stroke-gray-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 dark:opacity-30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl dark:opacity-25"
        style={{
          background:
            "radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 bg-gray-200 dark:bg-gray-800">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={heroCardVariants}
          style={{ perspective: "1000px" }}
        >
          {/* Hero card */}
          <div className="relative">
            {/* Glass morphism card */}
            <motion.div
              className="relative backdrop-blur-xl bg-white/80 border-2 border-gray-300/40 rounded-3xl p-12 shadow-xl shadow-blue-500/20
              dark:bg-gray-900/80 dark:border-gray-600/40 dark:shadow-2xl dark:shadow-indigo-900/40"
              whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Content */}
              <div className="text-center">
                {/* Time and date display */}
                <motion.div
                  className="mb-6 text-sm font-mono text-blue-600 tracking-wider dark:text-blue-300"
                  variants={subtitleVariants}
                >
                  {currentTime.toLocaleString()}
                </motion.div>

                {/* Main title */}
                <motion.h1
                  className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent leading-tight dark:from-white dark:via-blue-100 dark:to-purple-200"
                  variants={titleVariants}
                  style={{
                    textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  Ipaja Central
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                  className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-200"
                  variants={subtitleVariants}
                >
                  Vision • Action • Impact
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 dark:text-gray-300"
                  variants={descriptionVariants}
                >
                  Empowering communities and creating a lasting legacy through
                  visionary leadership and sustainable progress.
                </motion.p>

                {/* Action buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  variants={containerVariants}
                >
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full border border-blue-400/30 shadow-lg backdrop-blur-sm hover:from-blue-700 hover:to-purple-700 dark:border-blue-300/40"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Our Vision
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 bg-transparent text-gray-700 font-semibold rounded-full border-2 border-gray-400/40 hover:bg-gray-100/20 transition-colors duration-300 dark:text-gray-200 dark:border-gray-500/40 dark:hover:bg-gray-700/20"
                    variants={buttonVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(156, 163, 175, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore
                  </motion.button>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-60 dark:opacity-70"
                variants={floatingElementVariants}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-60 dark:opacity-70"
                variants={floatingElementVariants}
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom status bar */}
      <motion.div
        className="absolute bottom-6 left-6 right-6 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse dark:bg-green-300"></div>
            <span>System Online</span>
          </div>
          <div>Iyana-Ipaja, Lagos | 6.64° N, 3.28° E</div>
        </div>
      </motion.div>
    </motion.main>
  );
}
