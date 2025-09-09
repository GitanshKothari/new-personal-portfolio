"use client";

import { ProjectSection } from "./ProjectSection";
import { featuredProjects, allProjects } from "./projectsData";

export function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-purple-noir">
      {/* Featured Projects Section */}
      <ProjectSection
        title="Featured Projects"
        subtitle="A showcase of my most impactful machine learning and software engineering projects, featuring computer vision, reinforcement learning, and data science solutions"
        projects={featuredProjects}
        itemsPerView={3}
      />

      {/* All Projects Section */}
      <ProjectSection
        title="All Projects"
        subtitle="Complete portfolio of my work across various domains including web development, mobile apps, machine learning, and data visualization"
        projects={allProjects}
        itemsPerView={4}
      />
    </div>
  );
}
