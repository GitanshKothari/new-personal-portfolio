"use client";

import { SkillsGrid } from "./SkillsGrid";
import { SectionHeader } from "@/components/ui/section-header";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technical Skills"
          subtitle="A comprehensive overview of my technical expertise organized by category. Click on any skill to explore related projects."
          align="center"
        />

        <SkillsGrid />
      </div>
    </section>
  );
}
