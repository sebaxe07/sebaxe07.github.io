"use client";

import React, { useState, useEffect } from "react";
import { PortfolioProject } from "@/types/github";
import { GitHubService } from "@/lib/github";
import { ProjectCard } from "./ProjectCard";
import { GlassCard } from "./ui/GlassCard";

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<
    "all" | "featured" | "web" | "mobile" | "desktop" | "robotics" | "unity" | "other"
  >("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const fetchedProjects = await GitHubService.fetchRepositories();
        setProjects(fetchedProjects);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.config.featured;
    return project.config.category === filter;
  });

  const filterButtons = [
    { key: "all", label: "All Projects" },
    { key: "featured", label: "Featured" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "desktop", label: "Desktop" },
    { key: "robotics", label: "Robotics" },
    { key: "unity", label: "Unity" },
    { key: "other", label: "Other" },
  ] as const;

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-gray-300 text-lg">
              Automatically synced from GitHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <GlassCard key={index} className="p-6 animate-pulse">
                <div className="h-4 bg-white/20 rounded mb-4"></div>
                <div className="h-3 bg-white/10 rounded mb-2"></div>
                <div className="h-3 bg-white/10 rounded mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-2 w-12 bg-white/10 rounded"></div>
                  <div className="h-2 w-16 bg-white/10 rounded"></div>
                </div>
                <div className="h-2 bg-white/10 rounded"></div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard variant="secondary" className="p-8">
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Retry
            </button>
          </GlassCard>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-300 text-lg mb-8">
            Automatically synced from GitHub • {projects.length} repositories
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterButtons.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === key
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white"
                }`}
              >
                {label}
                {key === "featured" && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {projects.filter((p) => p.config.featured).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <GlassCard variant="secondary" className="p-8 max-w-md mx-auto">
              <p className="text-gray-300">
                No projects found for the selected filter.
              </p>
            </GlassCard>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* GitHub link */}
        <div className="text-center mt-12">
          <GlassCard variant="secondary" className="p-6 max-w-md mx-auto">
            <p className="text-gray-300 mb-4">Want to see more?</p>
            <a
              href="https://github.com/sebaxe07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View All on GitHub
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
