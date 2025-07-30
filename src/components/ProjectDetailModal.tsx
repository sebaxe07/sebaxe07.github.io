"use client";

import React, { useState, useEffect } from "react";
import { PortfolioProject } from "@/types/github";
import { GitHubService } from "@/lib/github";
import { GlassCard } from "./ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "readme" | "media">(
    "overview"
  );

  useEffect(() => {
    if (project && isOpen) {
      setLoading(true);
      GitHubService.fetchReadme(project.name)
        .then(setReadme)
        .finally(() => setLoading(false));
    }
  }, [project, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const customDetails = project.config.customDetails;
  const languageColor = GitHubService.getLanguageColor(project.language);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-hidden"
          >
            <GlassCard variant="secondary" className="h-full">
              <div className="flex flex-col h-full max-h-[90vh]">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-white">
                          {project.name}
                        </h2>
                        {project.config.featured && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 rounded-full border border-yellow-400/30">
                            Featured
                          </span>
                        )}
                        <span
                          className={`px-2 py-1 text-xs rounded-full border ${GitHubService.getCategoryColorClasses(
                            project.config.category || "other"
                          )}`}
                        >
                          {project.config.category}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-4">
                        {project.config.customDescription ||
                          project.description ||
                          "No description available"}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        {project.language && (
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: languageColor }}
                            />
                            <span>{project.language}</span>
                          </div>
                        )}
                        <span>⭐ {project.stargazers_count}</span>
                        <span>🍴 {project.forks_count}</span>
                        <span>Updated {formatDate(project.updated_at)}</span>
                      </div>
                    </div>

                    <button
                      onClick={onClose}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-1 mt-4">
                    {["overview", "readme", "media"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setActiveTab(tab as "overview" | "readme" | "media")
                        }
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeTab === tab
                            ? "bg-blue-500 text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/15"
                        }`}
                      >
                        {tab === "overview" && "Overview"}
                        {tab === "readme" && "README"}
                        {tab === "media" && "Media & Links"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      {/* Technologies */}
                      {project.config.technologies &&
                        project.config.technologies.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.config.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-sm bg-white/10 text-white rounded-lg border border-white/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      {/* Custom Highlights */}
                      {customDetails?.highlights &&
                        customDetails.highlights.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Key Highlights
                            </h3>
                            <ul className="space-y-2">
                              {customDetails.highlights.map(
                                (highlight, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2 text-gray-300"
                                  >
                                    <span className="text-blue-400 mt-1">
                                      •
                                    </span>
                                    {highlight}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                      {/* Custom Sections */}
                      {customDetails?.customSections &&
                        customDetails.customSections.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              {section.title}
                            </h3>
                            <div className="text-gray-300">
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={
                                  {
                                    p: ({ children }) => (
                                      <p className="text-gray-300 mb-4 leading-relaxed">
                                        {children}
                                      </p>
                                    ),
                                    strong: ({ children }) => (
                                      <strong className="font-semibold text-white">
                                        {children}
                                      </strong>
                                    ),
                                    em: ({ children }) => (
                                      <em className="italic text-gray-200">
                                        {children}
                                      </em>
                                    ),
                                  } as Components
                                }
                              >
                                {section.content}
                              </ReactMarkdown>
                            </div>
                          </div>
                        ))}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors inline-flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View on GitHub
                        </a>
                        {project.config.liveUrl && (
                          <a
                            href={project.config.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors inline-flex items-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === "readme" && (
                    <div>
                      {loading ? (
                        <div className="flex items-center justify-center py-12">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                        </div>
                      ) : readme ? (
                        <div className="prose prose-invert max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={
                              {
                                code: (props) => {
                                  const { children, className } = props;
                                  const match = /language-(\w+)/.exec(
                                    className || ""
                                  );
                                  const isInline = !className;

                                  if (isInline) {
                                    return (
                                      <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-blue-300 border border-white/20">
                                        {children}
                                      </code>
                                    );
                                  }

                                  return (
                                    <div className="relative my-6 group">
                                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                      <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                                          <span className="text-xs text-gray-400 font-mono">
                                            {match ? match[1] : "code"}
                                          </span>
                                          <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                                          </div>
                                        </div>
                                        <div className="p-4 overflow-x-auto">
                                          <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                                            <code>
                                              {String(children).replace(
                                                /\n$/,
                                                ""
                                              )}
                                            </code>
                                          </pre>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                },
                                h1: ({ children }) => (
                                  <h1 className="text-2xl font-bold text-white mb-6 mt-8">
                                    {children}
                                  </h1>
                                ),
                                h2: ({ children }) => (
                                  <h2 className="text-xl font-semibold text-white mb-4 mt-6">
                                    {children}
                                  </h2>
                                ),
                                h3: ({ children }) => (
                                  <h3 className="text-lg font-semibold text-white mb-3 mt-4">
                                    {children}
                                  </h3>
                                ),
                                p: ({ children }) => (
                                  <p className="text-gray-300 mb-4 leading-relaxed">
                                    {children}
                                  </p>
                                ),
                                ul: ({ children }) => (
                                  <ul className="text-gray-300 mb-4 list-disc list-inside space-y-1">
                                    {children}
                                  </ul>
                                ),
                                ol: ({ children }) => (
                                  <ol className="text-gray-300 mb-4 list-decimal list-inside space-y-1">
                                    {children}
                                  </ol>
                                ),
                                li: ({ children }) => (
                                  <li className="text-gray-300">{children}</li>
                                ),
                                strong: ({ children }) => (
                                  <strong className="font-semibold text-white">
                                    {children}
                                  </strong>
                                ),
                                em: ({ children }) => (
                                  <em className="italic text-gray-200">
                                    {children}
                                  </em>
                                ),
                                a: ({ href, children }) => (
                                  <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 underline"
                                  >
                                    {children}
                                  </a>
                                ),
                                blockquote: ({ children }) => (
                                  <blockquote className="border-l-4 border-blue-400/50 pl-4 my-4 text-gray-300 italic">
                                    {children}
                                  </blockquote>
                                ),
                              } as Components
                            }
                          >
                            {readme}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-gray-400 text-center py-12">
                          No README found for this repository.
                        </p>
                      )}
                    </div>
                  )}

                  {activeTab === "media" && (
                    <div className="space-y-6">
                      {/* Images */}
                      {customDetails?.images &&
                        customDetails.images.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Screenshots
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {customDetails.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`${project.name} screenshot ${
                                    index + 1
                                  }`}
                                  className="rounded-lg border border-white/20 w-full h-48 object-cover"
                                />
                              ))}
                            </div>
                          </div>
                        )}

                      {/* Videos */}
                      {customDetails?.videos &&
                        customDetails.videos.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Videos
                            </h3>
                            <div className="space-y-4">
                              {customDetails.videos.map((video, index) => (
                                <video
                                  key={index}
                                  controls
                                  className="w-full rounded-lg border border-white/20"
                                >
                                  <source src={video} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              ))}
                            </div>
                          </div>
                        )}

                      {/* Vimeo Videos */}
                      {(customDetails?.vimeoVideoId ||
                        customDetails?.vimeoVideoIds) && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Project Demonstration
                          </h3>
                          <div className="space-y-4">
                            {/* Single video */}
                            {customDetails?.vimeoVideoId &&
                              !customDetails?.vimeoVideoIds && (
                                <div className="relative">
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-50"></div>
                                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                                      <div className="flex items-center gap-2">
                                        <svg
                                          className="w-4 h-4 text-cyan-400"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                                        </svg>
                                        <span className="text-xs text-gray-400 font-medium">
                                          Vimeo Video
                                        </span>
                                      </div>
                                      <a
                                        href={`https://vimeo.com/${customDetails.vimeoVideoId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                      >
                                        Watch on Vimeo
                                      </a>
                                    </div>
                                    <div
                                      className="relative w-full"
                                      style={{ padding: "56.25% 0 0 0" }}
                                    >
                                      <iframe
                                        src={`https://player.vimeo.com/video/${customDetails.vimeoVideoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          width: "100%",
                                          height: "100%",
                                        }}
                                        title="Project Demonstration Video"
                                      ></iframe>
                                    </div>
                                  </div>
                                </div>
                              )}

                            {/* Multiple videos */}
                            {customDetails?.vimeoVideoIds &&
                              customDetails.vimeoVideoIds.map(
                                (videoId, index) => (
                                  <div key={videoId} className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-50"></div>
                                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
                                      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                          <svg
                                            className="w-4 h-4 text-cyan-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                                          </svg>
                                          <span className="text-xs text-gray-400 font-medium">
                                            Demo Video {index + 1}
                                          </span>
                                        </div>
                                        <a
                                          href={`https://vimeo.com/${videoId}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                          Watch on Vimeo
                                        </a>
                                      </div>
                                      <div
                                        className="relative w-full"
                                        style={{ padding: "56.25% 0 0 0" }}
                                      >
                                        <iframe
                                          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=${
                                            index === 0 ? 1 : 0
                                          }&muted=1&loop=1`}
                                          frameBorder="0"
                                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                          referrerPolicy="strict-origin-when-cross-origin"
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                          }}
                                          title={`Project Demonstration Video ${
                                            index + 1
                                          }`}
                                        ></iframe>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                          </div>
                        </div>
                      )}

                      {/* Figma Prototype */}
                      {customDetails?.figmaUrl && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Interactive Prototype
                          </h3>
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-sm opacity-50"></div>
                            <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
                              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                  <svg
                                    className="w-4 h-4 text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.002c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.488 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z" />
                                  </svg>
                                  <span className="text-xs text-gray-400 font-medium">
                                    Figma Prototype
                                  </span>
                                </div>
                                <a
                                  href={
                                    customDetails.figmaUrl.includes(
                                      "embed.figma.com"
                                    )
                                      ? customDetails.figmaUrl.replace(
                                          "embed.figma.com/proto/",
                                          "www.figma.com/proto/"
                                        )
                                      : customDetails.figmaUrl
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  Open in Figma
                                </a>
                              </div>
                              <div className="aspect-[16/9] w-full">
                                <iframe
                                  src={
                                    customDetails.figmaUrl.includes(
                                      "embed.figma.com"
                                    )
                                      ? customDetails.figmaUrl
                                      : `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
                                          customDetails.figmaUrl
                                        )}`
                                  }
                                  className="w-full h-full"
                                  allowFullScreen
                                  title="Figma Prototype"
                                  style={{
                                    border:
                                      "1px solid rgba(255, 255, 255, 0.1)",
                                  }}
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Figma Presentation Deck */}
                      {customDetails?.figmaDeckUrl && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Project Presentation
                          </h3>
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm opacity-50"></div>
                            <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
                              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                  <svg
                                    className="w-4 h-4 text-indigo-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.002c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.488 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z" />
                                  </svg>
                                  <span className="text-xs text-gray-400 font-medium">
                                    Figma Presentation
                                  </span>
                                </div>
                                <a
                                  href={
                                    customDetails.figmaDeckUrl.includes(
                                      "embed.figma.com"
                                    )
                                      ? customDetails.figmaDeckUrl.replace(
                                          "embed.figma.com/deck/",
                                          "www.figma.com/deck/"
                                        )
                                      : customDetails.figmaDeckUrl
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  Open in Figma
                                </a>
                              </div>
                              <div className="aspect-[16/9] w-full">
                                <iframe
                                  src={customDetails.figmaDeckUrl}
                                  className="w-full h-full"
                                  allowFullScreen
                                  title="Figma Presentation Deck"
                                  style={{
                                    border:
                                      "1px solid rgba(255, 255, 255, 0.1)",
                                  }}
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Additional Links */}
                      {(customDetails?.behanceUrl ||
                        (customDetails?.additionalLinks &&
                          customDetails.additionalLinks.length > 0)) && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Additional Links
                          </h3>
                          <div className="space-y-3">
                            {customDetails?.behanceUrl && (
                              <a
                                href={customDetails.behanceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/15 rounded-lg transition-colors"
                              >
                                <svg
                                  className="w-5 h-5 text-blue-400"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                                </svg>
                                <div>
                                  <div className="text-white font-medium">
                                    Behance Portfolio
                                  </div>
                                  <div className="text-gray-400 text-sm">
                                    View design portfolio
                                  </div>
                                </div>
                              </a>
                            )}
                            {customDetails?.additionalLinks?.map(
                              (link, index) => (
                                <a
                                  key={index}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/15 rounded-lg transition-colors"
                                >
                                  <svg
                                    className="w-5 h-5 text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                  <div>
                                    <div className="text-white font-medium">
                                      {link.title}
                                    </div>
                                    {link.description && (
                                      <div className="text-gray-400 text-sm">
                                        {link.description}
                                      </div>
                                    )}
                                  </div>
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {!customDetails?.images &&
                        !customDetails?.videos &&
                        !customDetails?.vimeoVideoId &&
                        !customDetails?.figmaUrl &&
                        !customDetails?.figmaDeckUrl &&
                        !customDetails?.behanceUrl &&
                        !customDetails?.additionalLinks && (
                          <p className="text-gray-400 text-center py-12">
                            No additional media or links configured for this
                            project.
                          </p>
                        )}
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
