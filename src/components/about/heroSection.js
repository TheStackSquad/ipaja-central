//src/components/about/heroSection.js


"use client";

import React from "react";
import { useFadeIn, useSlideIn } from "../../animation/aboutAnimate";

export default function HeroSection() {
  const [titleRef, titleVisible] = useFadeIn(200);
  const [subtitleRef, subtitleStyle] = useSlideIn("up", 400);
  const [descRef, descStyle] = useSlideIn("up", 600);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-900"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-indigo-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-pink-300 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-1000 ease-out ${
            titleVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            HON. AKINPELU
          </h1>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-300 mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            IBRAHIM
          </h2>
          <h3
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-pink-200"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            JOHNSON
          </h3>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} style={subtitleStyle}>
          <p
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 mt-8"
            style={{ fontFamily: "Roboto, serif" }}
          >
            Executive Chairman, Alimosho Local Government Area
          </p>
        </div>

        {/* Description */}
        <div ref={descRef} style={descStyle}>
          <p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: "Roboto, serif" }}
          >
            A dedicated leader driving innovative governance and sustainable
            development to create a brighter future for the Alimosho community.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div>
            <a href="/projects">
              <button
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Explore My Vision
              </button>
            </a>
            <a href="/contact">
              <button
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-indigo-800 font-bold rounded-full transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Connect with Us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
