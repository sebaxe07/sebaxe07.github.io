export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  default_branch: string;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  private: boolean;
}

export interface ProjectConfig {
  featured: boolean;
  priority: number;
  customDescription?: string;
  liveUrl?: string;
  technologies?: string[];
  category?: "web" | "mobile" | "desktop" | "robotics" | "unity" | "other";
  status?: "completed" | "in-progress" | "archived";
}

export interface PortfolioProject extends GitHubRepo {
  config: ProjectConfig;
}
