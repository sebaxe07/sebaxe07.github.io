"use client";

import React from "react";
import { PortfolioProject } from "@/types/github";
import { GitHubService } from "@/lib/github";
import { GlassCard } from "./ui/GlassCard";

interface ProjectCardProps {
  project: PortfolioProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const languageColor = GitHubService.getLanguageColor(project.language);
  const displayDescription =
    project.config.customDescription ||
    project.description ||
    "No description available";

  const handleCardClick = () => {
    window.open(project.config.liveUrl || project.html_url, "_blank");
  };

  const handleGitHubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.html_url, "_blank");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-400/20";
      case "in-progress":
        return "text-yellow-400 bg-yellow-400/20";
      case "archived":
        return "text-gray-400 bg-gray-400/20";
      default:
        return "text-blue-400 bg-blue-400/20";
    }
  };

  return (
    <GlassCard
      className="cursor-pointer group h-full"
      variant={project.config.featured ? "accent" : "primary"}
      onClick={handleCardClick}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                {project.name}
              </h3>
              {project.config.featured && (
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 rounded-full border border-yellow-400/30">
                  Featured
                </span>
              )}
            </div>

            {/* Status and Category */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                  project.config.status || "completed"
                )}`}
              >
                {project.config.status || "completed"}
              </span>
              {project.config.category && (
                <span className={`px-2 py-1 text-xs rounded-full border ${GitHubService.getCategoryColorClasses(project.config.category)}`}>
                  {project.config.category}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleGitHubClick}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="View on GitHub"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
          {displayDescription}
        </p>

        {/* Technologies */}
        {project.config.technologies &&
          project.config.technologies.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.config.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-white/10 text-white rounded-md border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
          <div className="flex items-center gap-4">
            {project.language && (
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: languageColor }}
                />
                <span>{project.language}</span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>{project.stargazers_count}</span>
              </div>

              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.5 12.5l-5-5L12 2l8.5 5.5-5 5-3.5-3.5-3.5 3.5z" />
                  <path d="M8.5 12.5l3.5 3.5 3.5-3.5 5 5L12 22l-8.5-5.5 5-5z" />
                </svg>
                <span>{project.forks_count}</span>
              </div>
            </div>
          </div>

          <span className="text-xs">
            Updated {formatDate(project.updated_at)}
          </span>
        </div>
      </div>
    </GlassCard>
  );
};
