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
    customDetails: {
      highlights: [
        "Comprehensive Electron-based desktop application for employee credit management",
        "Built with React and TypeScript for type-safe development",
        "Complete financial management solution for Panadería Nueva York employees",
        "Cross-platform compatibility with modern UI/UX design",
        "PDF generation and Excel export capabilities for reports",
        "PostgreSQL database integration for robust data management",
      ],
      behanceUrl: "https://www.behance.net/gallery/213059393/CrediYork",
      figmaUrl:
        "https://embed.figma.com/proto/UyQpptQHfII4a5RgDYa6R5/Crediyork?node-id=177-26&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=177%3A26&embed-host=share",
      customSections: [
        {
          title: "Project Overview",
          content:
            "CrediYork is a comprehensive **Electron-based desktop application** for managing employee credit operations and fund management at **Panadería Nueva York**. Built with modern web technologies and integrated with PostgreSQL for robust financial data management.",
        },
      ],
    },
  },
  "hackzit-web": {
    featured: true,
    priority: 2,
    technologies: ["TypeScript", "Web Development", "React"],
    category: "web",
    status: "completed",
    liveUrl: "https://www.hackzit.dev/",
    customDetails: {
      highlights: [
        "Modern web application with responsive design",
        "Built with TypeScript and React for type safety",
        "Optimized for performance and user experience",
        "Clean and intuitive user interface",
      ],
      customSections: [
        {
          title: "Project Overview",
          content:
            "A comprehensive web application showcasing modern development practices and user-centered design principles.",
        },
      ],
    },
  },
  "Tino-Robot": {
    featured: true,
    priority: 3,
    technologies: ["Python", "ROS2", "Robotics", "Control Systems"],
    category: "robotics",
    status: "completed",
    customDetails: {
      highlights: [
        "Multi-component robot with mobile base, articulated head, and leg mechanism",
        "Real-time control system with sensor integration",
        "Advanced navigation and obstacle avoidance",
        "Custom hardware-software integration",
      ],
      customSections: [
        {
          title: "Project Overview",
          content:
            "Tino Robot represents a comprehensive approach to multi-component robotics, featuring seamless integration between hardware and software systems. The project demonstrates advanced concepts in robotics control, real-time processing, and autonomous navigation.",
        },
      ],
    },
  },
  BovisaBabyLMmodule: {
    featured: true,
    priority: 4,
    technologies: ["Python", "Machine Learning", "Robotics", "AI"],
    category: "robotics",
    status: "completed",
    customDetails: {
      highlights: [
        "Advanced AI-powered robotics module for livestock monitoring",
        "Machine learning algorithms for behavioral analysis and health detection",
        "Real-time sensor integration for comprehensive data collection",
        "Python-based implementation with robust AI frameworks",
        "Automated decision-making system for farm management optimization",
        "Scalable architecture for integration with existing farm systems",
      ],
      vimeoVideoId: "1105574616",
      customSections: [
        {
          title: "Project Overview",
          content:
            "The **Bovisa Baby Controller System** is a sophisticated modular robot control system designed for autonomous navigation and human interaction. Features advanced LIDAR-based obstacle detection, computer vision for human tracking, and distributed processing across multiple Raspberry Pi devices.",
        },
      ],
    },
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
    customDetails: {
      highlights: [
        "Innovative mobile mapping application with advanced location services",
        "Built with TypeScript for robust and type-safe mobile development",
        "Real-time location tracking and interactive map visualization",
        "Comprehensive UI/UX design with user-centered approach",
        "Cross-platform mobile solution with optimized performance",
        "Advanced geolocation features and mapping integration",
      ],
      behanceUrl: "https://www.behance.net/gallery/231368723/Mapuka",
      figmaUrl:
        "https://embed.figma.com/proto/1rrUsGdVqTZefkp1cFJnrK/Mapuka-Design?node-id=230-592&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=230%3A592&embed-host=share",
      figmaDeckUrl:
        "https://embed.figma.com/deck/vRWEl9pyWIcXVo9rE4b48G/Mapuka-Slides?node-id=14-43&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share",
      customSections: [
        {
          title: "Project Overview",
          content:
            "Mapuka is an innovative **mobile mapping application** that revolutionizes location-based services and geographical data interaction. Built with **TypeScript** and modern mobile frameworks, providing comprehensive mapping, navigation, and real-time location tracking capabilities.",
        },
      ],
    },
  },
  "DemHouse-Portfolio": {
    featured: true,
    priority: 6,
    technologies: ["React Native", "TypeScript", "Expo", "Redux Toolkit"],
    category: "mobile",
    status: "completed",
    customDetails: {
      highlights: [
        "Comprehensive mobile application for house/room sharing and co-living",
        "Built with React Native, Expo, and TypeScript for cross-platform development",
        "Complete user authentication, property listings, and matching system",
        "Real-time chat functionality with modern UI/UX design",
        "Multi-language support with internationalization (English/Italian)",
        "Clean architecture with Redux Toolkit state management and Supabase backend",
      ],
      behanceUrl: "https://www.behance.net/gallery/205260507/DemHouse",
      figmaUrl:
        "https://embed.figma.com/proto/GuJpZIoYMM2d8l4iho5l11/DEMHOUSE?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2131-817&starting-point-node-id=2131%3A817&show-proto-sidebar=1&embed-host=share",
      vimeoVideoId: "997160968",
      customSections: [
        {
          title: "Project Overview",
          content:
            "DemHouse is a comprehensive **mobile application** built with **React Native** and **Expo** for house/room sharing and co-living connections. Features complete user management, property listings, smart matching systems, and real-time chat functionality with modern UI/UX design.",
        },
      ],
    },
  },

  // Non-featured projects
  LotusHaven: {
    featured: false,
    priority: 101,
    technologies: ["Vue.js", "Nuxt 3", "TypeScript", "Tailwind CSS"],
    category: "web",
    status: "completed",
    liveUrl: "https://lotus-haven.vercel.app",
    customDetails: {
      highlights: [
        "Accessible Vue.js-based website for a yoga studio with modern design",
        "Built with Nuxt 3, Vue.js 3, and Tailwind CSS for optimal performance",
        "WCAG 2.1 compliant with comprehensive accessibility features",
        "Complete yoga studio functionality: classes, teachers, schedules, and search",
        "Responsive design optimized for all device sizes",
        "Integrated with Supabase backend and content management system",
      ],
      behanceUrl: "https://www.behance.net/gallery/231369895/Lotus-Haven",
      figmaUrl:
        "https://embed.figma.com/proto/xsQvm4TC0kT94yD7DoXyR1/Wireframes-Design?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=398-2538&starting-point-node-id=398%3A2538&embed-host=share",
      customSections: [
        {
          title: "Project Overview",
          content:
            "Lotus Haven is an accessible **Vue.js-based website** for a yoga studio, built with **Nuxt 3** and modern web technologies. Features comprehensive yoga studio functionality including class schedules, teacher profiles, and wellness resources with strong focus on accessibility and responsive design.",
        },
      ],
    },
  },
  "sebaxe07.github.io": {
    featured: false,
    priority: 102,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "web",
    status: "completed",
    hidden: true,
  },
  "SoS-Construction-Site-Simulation": {
    featured: false,
    priority: 103,
    technologies: ["Unity", "C#", "MQTT", "IoT", "Real-time Systems"],
    category: "unity",
    status: "completed",
    customDetails: {
      highlights: [
        "Intelligent System of Systems (SoS) for modern construction site simulation",
        "Unity 3D development with advanced C# scripting and behavior trees",
        "Real-time IoT integration using MQTT protocol for device communication",
        "3D visualization with complex terrain generation and interactive UI design",
        "Microservices architecture with Node-RED flows for hardware simulation",
        "Real-time monitoring and control systems with data analysis capabilities",
      ],
      vimeoVideoId: "1105651524", // Primary demo video - Simulation Demo
      vimeoVideoIds: ["1105651524", "1105651620", "1105651686"], // All three videos: Simulation Demo, Machine collision avoidance, MQTT Demo
      customSections: [
        {
          title: "Project Overview",
          content:
            "SoS Construction Site Simulation is an **Intelligent System of Systems** built with **Unity 3D** and **IoT technologies** to simulate, monitor, and optimize modern construction site operations. Features real-time MQTT communication, 3D visualization, and comprehensive workflow analysis.",
        },
      ],
    },
  },
  CodeKataBattleWebApp: {
    featured: false,
    priority: 104,
    technologies: ["React", "Django", "PostgreSQL", "Celery", "Tailwind CSS"],
    category: "web",
    status: "completed",
    customDetails: {
      highlights: [
        "Full-stack web platform for organizing programming tournaments and code kata battles",
        "Django REST Framework backend with React.js frontend and PostgreSQL database",
        "Automated code evaluation system with GitHub integration and real-time scoring",
        "Celery task queue with Redis for background processing and automated evaluation",
        "Comprehensive tournament management with team formation and role-based access control",
        "Software Engineering II course project at Politecnico di Milano",
      ],
      behanceUrl: "https://www.behance.net/gallery/205259021/CodeKataBattle",
      figmaUrl:
        "https://embed.figma.com/proto/IU4b5EL3R8yNqevp8RNPHJ/codeKataBattle?node-id=28-997&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A275&embed-host=share",
      customSections: [
        {
          title: "Project Overview",
          content:
            "CodeKataBattle is a comprehensive **full-stack web application** built with **React** and **Django REST Framework** for organizing programming tournaments where students compete in coding challenges. Features automated code evaluation, GitHub integration, team management, and real-time scoring systems.",
        },
      ],
    },
  },
  Immaginario: {
    featured: false,
    priority: 105,
    technologies: ["TypeScript", "React Native", "Expo", "Firebase"],
    category: "mobile",
    status: "completed",
    customDetails: {
      highlights: [
        "Educational mobile application to improve language skills for children with ASD",
        "React Native and Expo development with TypeScript for cross-platform compatibility",
        "Firebase backend integration with React Native Paper Material Design",
        "Client-server architecture designed for therapeutic communication support",
        "Collaborative development with Finger Talks therapists for autism spectrum disorder support",
        "Advanced User Interfaces course project with comprehensive accessibility features",
      ],
      behanceUrl: "https://www.behance.net/gallery/205215965/Immaginario",
      vimeoVideoId: "1105652622",
      customSections: [
        {
          title: "Project Overview",
          content:
            "Immaginario is an educational **mobile application** built with **React Native** and **Expo** to improve language skills for children with autism spectrum disorder (ASD). Developed in collaboration with Finger Talks therapists, featuring modern cross-platform architecture and comprehensive accessibility support.",
        },
      ],
    },
  },
  Believes: {
    featured: false,
    priority: 106,
    technologies: ["Unity", "C#", "3D Graphics", "Game Design"],
    category: "unity",
    status: "completed",
    liveUrl: "https://polimi-game-collective.itch.io/believes",
    customDetails: {
      highlights: [
        "3D isometric action-adventure game with soul possession mechanics",
        "Unity 2022.3.47f1 development with Universal Render Pipeline (URP)",
        "Multiple robot types with unique abilities and combat systems",
        "Rich narrative exploring AI consciousness and robot souls",
        "Custom audio management with BroAudio system and dynamic lighting",
        "Collaborative development by Polimi Game Collective team",
      ],
      vimeoVideoId: "1105650479",
      customSections: [
        {
          title: "Project Overview",
          content:
            "BeliEves is a **3D isometric action-adventure game** built with **Unity** where players control Eve, a lost soul navigating a robot factory. Features unique soul possession mechanics allowing seamless switching between different robot types, each with distinct abilities and combat systems.",
        },
      ],
    },
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
        .filter((project) => !project.config.hidden) // Filter out hidden projects
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

  static async fetchReadme(repoName: string): Promise<string | null> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/repos/${this.USERNAME}/${repoName}/readme`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      // Decode base64 content properly handling UTF-8
      const base64Content = data.content.replace(/\s/g, "");

      // Convert base64 to binary string, then to UTF-8
      const binaryString = atob(base64Content);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Decode as UTF-8
      const decoder = new TextDecoder("utf-8");
      return decoder.decode(bytes);
    } catch (error) {
      console.error(`Error fetching README for ${repoName}:`, error);
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

    return (
      colorClasses[category || "other"] ||
      "text-gray-300 bg-gray-500/20 border-gray-400/30"
    );
  }
}

export { PROJECT_CONFIGS };
