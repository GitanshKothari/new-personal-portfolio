"use client";

import { CardStack } from "@/components/ui/card-stack";
import { ProjectCard } from "./ProjectCard";
import { Project } from "./projectsData";
import { SectionHeader } from "@/components/ui/section-header";

interface FeaturedProjectStackProps {
  title: string;
  subtitle: string;
  projects: Project[];
}

export function FeaturedProjectStack({ title, subtitle, projects }: FeaturedProjectStackProps) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <SectionHeader title={title} subtitle={subtitle} align="center" />

      <div className="flex justify-center">
        <CardStack
          items={projects.map((project, index) => ({
            id: project.id,
            content: (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ),
          }))}
          offset={16}       // spacing between stacked cards
          scaleFactor={0.08} // scale shrink for background cards
        />
      </div>
    </section>
  );
}
