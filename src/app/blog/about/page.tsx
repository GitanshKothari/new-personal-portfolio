import { Metadata } from "next";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Gitansh's Blog",
  description: "Learn more about Gitansh Kothari and his journey in technology and development.",
};

export default function BlogAboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About This Blog</h1>
          <p className="text-white/70 text-lg">
            A space for sharing knowledge, experiences, and insights
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Welcome to My Digital Space</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Hi there! I&apos;m Gitansh Kothari, and this blog is my corner of the internet where I share 
                my journey through the fascinating world of technology. From machine learning algorithms 
                to web development frameworks, I&apos;m passionate about exploring how technology can solve 
                real-world problems.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Here, you&apos;ll find tutorials, insights, and personal reflections on the technologies 
                I&apos;m working with. Whether you&apos;re a fellow developer, a student, or just curious about 
                tech, I hope you&apos;ll find something valuable in these posts.
              </p>
            </div>
          </section>

          {/* What You'll Find */}
          <section className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">What You&apos;ll Find Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Machine Learning</h3>
                <p className="text-white/70">
                  Deep dives into ML algorithms, model architectures, and practical implementations.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Web Development</h3>
                <p className="text-white/70">
                  Modern web technologies, frameworks, and best practices for building great applications.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technology Insights</h3>
                <p className="text-white/70">
                  Thoughts on industry trends, emerging technologies, and the future of development.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Tutorials</h3>
                <p className="text-white/70">
                  Step-by-step guides to help you learn new skills and technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Connect */}
          <section className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h2>
            <p className="text-white/80 text-lg mb-6">
              I&apos;d love to hear from you! Whether you have questions about a post, want to collaborate, 
              or just want to say hello, feel free to reach out.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/yourusername"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-purple-500/20 transition-colors hover:text-purple-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-purple-500/20 transition-colors hover:text-purple-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-purple-500/20 transition-colors hover:text-purple-300"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </section>

          {/* Portfolio Link */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-2xl p-8 border border-purple-500/20 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Explore My Portfolio</h2>
              <p className="text-white/70 mb-6">
                Want to see my projects and learn more about my work? Check out my main portfolio.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                View Portfolio
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
