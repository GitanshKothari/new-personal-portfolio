import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Timeline } from "@/components/experience/Timeline";
import { Hero } from "@/components/about/Hero";
import Education from "@/components/education/Education";
import ProjectsCarousel from "@/components/projects/ProjectCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-noir">
      <Navbar />

      <Hero />
      <Education />
      <Timeline />
      <ProjectsCarousel />

      <Footer />
    </main>
  );
}
