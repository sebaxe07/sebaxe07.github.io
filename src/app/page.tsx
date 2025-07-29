export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Sebaxe07
          </h1>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sebastian
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I create amazing digital experiences with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View My Work
            </button>
            <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I&apos;m a passionate developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                user-friendly applications.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg h-64 flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">
                Your Photo Here
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-100 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-slate-200 dark:bg-slate-600 h-48 flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    Project Image
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    Project {project}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    A brief description of this amazing project and the
                    technologies used.
                  </p>
                  <div className="flex gap-2">
                    <button className="text-blue-600 dark:text-blue-400 hover:underline">
                      View Demo
                    </button>
                    <button className="text-slate-600 dark:text-slate-300 hover:underline">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-8">
            Get In Touch
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I&apos;m always open to discussing new opportunities and interesting
            projects.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Me
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
