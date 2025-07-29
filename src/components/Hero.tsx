"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Sebastian_Perea_Lopez_CV.pdf";
    link.download = "Sebastian_Perea_Lopez_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard variant="secondary" className="p-8 mb-8">
            <div className="mb-6">
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Sebastian Perea Lopez
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl text-blue-200 font-light mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Full Stack Developer & Software Engineer
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Passionate software engineer with a Master&apos;s Degree in
                Computer Science from
                <span className="text-blue-300 font-medium">
                  {" "}
                  Politecnico di Milano
                </span>{" "}
                and Engineering from{" "}
                <span className="text-purple-300 font-medium">
                  Universidad del Norte
                </span>
                . Specializing in building innovative solutions from web
                applications to interactive simulations and robotics systems.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={downloadCV}
                className="px-8 py-3 cursor-pointer border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* Floating skills indicators */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "Next.js",
            "Robotics",
            "Computer Vision",
            "AWS",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Contact links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="https://www.linkedin.com/in/sebastian-perea-lopez-7a4005206"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-md rounded-lg text-blue-200 text-sm border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300 hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/sebastianperea4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-md rounded-lg text-purple-200 text-sm border border-purple-400/30 hover:bg-purple-600/30 transition-all duration-300 hover:scale-105"
          >
            Behance
          </a>
          <a
            href="https://github.com/sebaxe07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-600/20 backdrop-blur-md rounded-lg text-gray-200 text-sm border border-gray-400/30 hover:bg-gray-600/30 transition-all duration-300 hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="mailto:sebaxe09@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-green-600/20 backdrop-blur-md rounded-lg text-green-200 text-sm border border-green-400/30 hover:bg-green-600/30 transition-all duration-300 hover:scale-105"
          >
            Email
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
