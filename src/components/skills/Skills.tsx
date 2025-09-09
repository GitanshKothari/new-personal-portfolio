"use client";

import { SkillsGrid } from "./SkillsGrid";

export default function SkillsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
            Technical Skills
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise organized by category. 
            Click on any skill to explore related projects.
          </p>
        </div>

        <SkillsGrid />
      </div>
    </section>
  );
}
