"use client";

import React from "react";
import { GlassCard } from "./ui/GlassCard";

export const AboutSection: React.FC = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Vue.js", "Nuxt 3", "Node.js", "Express"],
    },
    {
      category: "Backend & Databases",
      items: ["Flask", "Django", "MySQL", "SQL", "REST APIs"],
    },
    {
      category: "Robotics & AI",
      items: ["ROS2", "LIDAR", "Computer Vision", "Unity", "SLAM"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Docker", "Git", "GitHub"],
    },
    {
      category: "Operating Systems",
      items: ["Windows", "Linux", "MacOS", "Android", "iOS"],
    },
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Software engineer and creative thinker with a Master&apos;s Degree
            in Computer Science from Politecnico di Milano, passionate about
            building innovative solutions from web applications to robotics
            systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* About text */}
          <GlassCard variant="secondary" className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I&apos;m a passionate software engineer with a{" "}
                <span className="text-blue-300 font-medium">
                  Master&apos;s Degree in Computer Science from Politecnico di
                  Milano
                </span>{" "}
                and an{" "}
                <span className="text-purple-300 font-medium">
                  Engineering Degree from Universidad del Norte
                </span>
                . My journey combines technical depth with creative
                problem-solving across diverse domains.
              </p>
              <p>
                With experience spanning{" "}
                <span className="text-green-300 font-medium">
                  web development, robotics systems, and interactive simulations
                </span>
                , I specialize in building innovative solutions that bridge the
                gap between complex technology and user-friendly experiences. My
                work in{" "}
                <span className="text-yellow-400 font-medium">robotics</span>{" "}
                includes projects focused on sensing, localization, and
                real-time interaction.
              </p>
              <p>
                I develop custom web and software solutions using modern
                front-end and back-end technologies. I&apos;m multilingual
                (Spanish native, English C1, Italian B1) and have earned
                multiple honors including the{" "}
                <span className="text-cyan-300 font-medium">
                  Promigas Talent Scholarship
                </span>{" "}
                and consistent Honor Roll recognition.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies like AI, AR/VR, game development, or working on
                robotics projects that combine my technical skills with creative
                innovation.
              </p>
            </div>
          </GlassCard>

          {/* Quick stats */}
          <div className="space-y-6">
            <GlassCard variant="primary" className="p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    4+
                  </div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300 text-sm">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    6+
                  </div>
                  <div className="text-gray-300 text-sm">Tech Stacks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-300 text-sm">Languages Spoken</div>
                </div>
              </div>
            </GlassCard>

            {/* Contact info */}
            <GlassCard variant="accent" className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Let&apos;s Connect
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:sebaxe09@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  sebaxe09@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sebastian-perea-lopez-7a4005206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.behance.net/sebastianperea4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                  Behance Portfolio
                </a>
                <a
                  href="https://github.com/sebaxe07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Skills section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <GlassCard
                key={skillGroup.category}
                variant="primary"
                className="p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/15 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Education & Achievements
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard variant="secondary" className="p-6">
              <h4 className="text-xl font-semibold text-blue-300 mb-3">
                🎓 Master&apos;s in Computer Science
              </h4>
              <p className="text-white font-medium mb-2">
                Politecnico di Milano
              </p>
              <p className="text-gray-300 text-sm mb-3">
                Milano, Italy • 2023 - Present
              </p>
              <p className="text-gray-300 text-sm">
                Specializing in Computer Science and Engineering with focus on
                advanced software systems, robotics, and interactive
                simulations.
              </p>
            </GlassCard>

            <GlassCard variant="secondary" className="p-6">
              <h4 className="text-xl font-semibold text-purple-300 mb-3">
                💻 Systems Engineering
              </h4>
              <p className="text-white font-medium mb-2">
                Universidad del Norte
              </p>
              <p className="text-gray-300 text-sm mb-3">
                Barranquilla, Colombia • 2019 - Present
              </p>
              <p className="text-gray-300 text-sm">
                Comprehensive engineering program with focus on software
                development, algorithms, and system design.
              </p>
            </GlassCard>

            <GlassCard variant="accent" className="p-6">
              <h4 className="text-xl font-semibold text-yellow-300 mb-3">
                🏆 Honors & Awards
              </h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>
                  •{" "}
                  <span className="text-yellow-200">
                    Promigas Talent Scholarship
                  </span>{" "}
                  - 100% tuition coverage
                </div>
                <div>
                  • <span className="text-blue-200">Honor Roll</span> - Multiple
                  semesters (2019-2022)
                </div>
                <div>
                  •{" "}
                  <span className="text-green-200">Best UN Model Speaker</span>{" "}
                  - 2017, 2018, 2019
                </div>
                <div>
                  •{" "}
                  <span className="text-purple-200">
                    Best Science Fair Project
                  </span>{" "}
                  - 2018
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="accent" className="p-6">
              <h4 className="text-xl font-semibold text-green-300 mb-3">
                🌍 Languages
              </h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>
                  <span className="text-white font-medium">Spanish</span>
                  <span className="text-gray-400 block">Native</span>
                </div>
                <div>
                  <span className="text-white font-medium">English</span>
                  <span className="text-gray-400 block">C1 - Proficient</span>
                </div>
                <div>
                  <span className="text-white font-medium">Italian</span>
                  <span className="text-gray-400 block">B1 - Independent</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
