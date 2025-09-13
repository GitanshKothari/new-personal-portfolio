"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ProjectCard } from "./ProjectCard";
import { Project } from "./projectsData";
import { SectionHeader } from "@/components/ui/section-header";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  projects: Project[];
}

export function ProjectSection({ title, subtitle, projects }: ProjectSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <SectionHeader title={title} subtitle={subtitle} align="center" />

      <InfiniteMovingCards
        items={projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
          />
        ))}
        direction="left"
        speed="fast"
        pauseOnHover={true}
      />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
