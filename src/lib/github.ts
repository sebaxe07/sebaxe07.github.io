import { GitHubRepo, PortfolioProject, ProjectConfig } from "@/types/github";

// Configuration for specific repositories
const PROJECT_CONFIGS: Record<string, ProjectConfig> = {
  "sebaxe07.github.io": {
    featured: true,
    priority: 1,
    customDescription:
      "Personal portfolio website built with Next.js and modern liquid glass design",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "web",
    status: "completed",
  },
  // Add more project configurations here
  // 'your-repo-name': {
  //   featured: true,
  //   priority: 2,
  //   customDescription: 'Custom description for your project',
  //   liveUrl: 'https://your-live-url.com',
  //   technologies: ['React', 'Node.js'],
  //   category: 'web',
  //   status: 'completed'
  // }
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

      // Filter out forks and add configuration
      const portfolioProjects: PortfolioProject[] = repos
        .filter((repo) => !repo.fork && !repo.archived && !repo.disabled)
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
}

export { PROJECT_CONFIGS };
