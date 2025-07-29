import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Navigation } from "@/components/Navigation";
import { DynamicFloatingBlobs } from "@/components/ui/LiquidBlob";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <Navigation />

      {/* Dynamic animated background blobs */}
      <DynamicFloatingBlobs />

      {/* Main content */}
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">
            © 2025 Sebaxe07. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm">
            Projects automatically synced from GitHub • Last updated:{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
}
