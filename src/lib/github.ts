import { GitHubRepo, PortfolioProject, ProjectConfig } from "@/types/github";

// Configuration for specific repositories
const PROJECT_CONFIGS: Record<string, ProjectConfig> = {
  // Featured projects (in priority order)
  "CrediYork-Portfolio": {
    featured: true,
    priority: 1,
    technologies: ["TypeScript", "Electron", "Desktop Development"],
    category: "desktop",
    status: "completed",
  },
  "hackzit-web": {
    featured: true,
    priority: 2,
    technologies: ["TypeScript", "Web Development", "React"],
    category: "web",
    status: "completed",
  },
  "Tino-Robot": {
    featured: true,
    priority: 3,
    technologies: ["Python", "ROS2", "Robotics", "Control Systems"],
    category: "robotics",
    status: "completed",
  },
  BovisaBabyLMmodule: {
    featured: true,
    priority: 4,
    technologies: ["Python", "Machine Learning", "Robotics", "AI"],
    category: "robotics",
    status: "completed",
  },
  Mapuka: {
    featured: true,
    priority: 5,
    technologies: [
      "TypeScript",
      "Mobile Development",
      "Maps",
      "Location Services",
    ],
    category: "mobile",
    status: "completed",
  },
  "DemHouse-Portfolio": {
    featured: true,
    priority: 6,
    technologies: ["TypeScript", "Mobile Development", "Portfolio"],
    category: "mobile",
    status: "completed",
  },

  // Non-featured projects
  LotusHaven: {
    featured: false,
    priority: 101,
    technologies: ["Vue.js", "JavaScript", "Web Design", "Accessibility"],
    category: "web",
    status: "completed",
    liveUrl: "https://lotus-haven.vercel.app",
  },
  "sebaxe07.github.io": {
    featured: false,
    priority: 102,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "web",
    status: "completed",
  },
  "SoS-Construction-Site-Simulation": {
    featured: false,
    priority: 103,
    technologies: ["Unity", "C#", "MQTT", "IoT", "Real-time Systems"],
    category: "unity",
    status: "completed",
  },
  CodeKataBattleWebApp: {
    featured: false,
    priority: 104,
    technologies: ["JavaScript", "Web Development", "Coding Challenges"],
    category: "web",
    status: "completed",
  },
  Immaginario: {
    featured: false,
    priority: 105,
    technologies: ["TypeScript", "Mobile Development", "Creative Tools"],
    category: "mobile",
    status: "completed",
  },
  Believes: {
    featured: false,
    priority: 106,
    technologies: ["Unity", "C#", "3D Graphics", "Game Design"],
    category: "unity",
    status: "completed",
  },
};

export class GitHubService {
  private static readonly BASE_URL = "https://api.github.com";
  private static readonly USERNAME = "sebaxe07"; // Change this to your GitHub username

  static async fetchRepositories(): Promise<PortfolioProject[]> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/users/${this.USERNAME}/repos?sort=updated&per_page=100`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos: GitHubRepo[] = await response.json();

      // Filter out forks (except for specific configured forks) and add configuration
      const portfolioProjects: PortfolioProject[] = repos
        .filter((repo) => {
          // Include if it's not a fork, or if it's a specifically configured fork
          const isConfiguredFork = repo.fork && PROJECT_CONFIGS[repo.name];
          return (
            (!repo.fork || isConfiguredFork) && !repo.archived && !repo.disabled
          );
        })
        .map((repo) => ({
          ...repo,
          config: PROJECT_CONFIGS[repo.name] || {
            featured: false,
            priority: 999,
            category: "other",
            status: "completed",
          },
        }))
        .sort((a, b) => {
          // Sort by featured status first, then by priority, then by stars
          if (a.config.featured !== b.config.featured) {
            return a.config.featured ? -1 : 1;
          }
          if (a.config.priority !== b.config.priority) {
            return a.config.priority - b.config.priority;
          }
          return b.stargazers_count - a.stargazers_count;
        });

      return portfolioProjects;
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      return [];
    }
  }

  static async fetchRepository(repoName: string): Promise<GitHubRepo | null> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/repos/${this.USERNAME}/${repoName}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching repository ${repoName}:`, error);
      return null;
    }
  }

  static getLanguageColor(language: string | null): string {
    const colors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      "C++": "#f34b7d",
      C: "#555555",
      "C#": "#239120",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#fa7343",
      Kotlin: "#A97BFF",
      Dart: "#00B4AB",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Vue: "#41b883",
      React: "#61dafb",
      Angular: "#dd1b16",
      Svelte: "#ff3e00",
      Flutter: "#02569B",
    };

    return colors[language || ""] || "#6b7280";
  }

  static getCategoryColor(category: string | null): string {
    const colors: Record<string, string> = {
      web: "#3b82f6", // Blue
      mobile: "#06b6d4", // Cyan  
      desktop: "#8b5cf6", // Purple
      robotics: "#f59e0b", // Amber
      unity: "#ef4444", // Red
      other: "#6b7280", // Gray
    };

    return colors[category || "other"] || "#6b7280";
  }

  static getCategoryColorClasses(category: string | null): string {
    const colorClasses: Record<string, string> = {
      web: "text-blue-300 bg-blue-500/20 border-blue-400/30",
      mobile: "text-cyan-300 bg-cyan-500/20 border-cyan-400/30",
      desktop: "text-purple-300 bg-purple-500/20 border-purple-400/30", 
      robotics: "text-amber-300 bg-amber-500/20 border-amber-400/30",
      unity: "text-red-300 bg-red-500/20 border-red-400/30",
      other: "text-gray-300 bg-gray-500/20 border-gray-400/30",
    };

    return colorClasses[category || "other"] || "text-gray-300 bg-gray-500/20 border-gray-400/30";
  }
}

export { PROJECT_CONFIGS };
