
import { Timeline } from "@/components/experience/Timeline";
import { Hero } from "@/components/about/Hero";
import Education from "@/components/education/Education";
import { Projects } from "@/components/projects/Projects";
import SkillsSection3D from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-noir">

      <Hero />
      <Education />
      <Timeline />
      <Projects />
      <SkillsSection3D />
      <Contact />
    </main>
  );
}
