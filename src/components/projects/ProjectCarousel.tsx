"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    image: "/task-management-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description:
      "Interactive weather data visualization with historical trends, forecasting, and location-based insights.",
    image: "/weather-analytics-dashboard-with-charts.png",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
];

export default function ProjectsDisplay() {
  function useCardTilt() {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
    const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateMax = 15; // max tilt
      const rotateYVal = (x / rect.width - 0.5) * 2 * rotateMax;
      const rotateXVal = -(y / rect.height - 0.5) * 2 * rotateMax;

      rotateX.set(rotateXVal);
      rotateY.set(rotateYVal);
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    return { springX, springY, handleMouseMove, handleMouseLeave };
  }
  const { springX, springY, handleMouseMove, handleMouseLeave } = useCardTilt();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    const total = projects.length;

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + total) % total;
      cards.push({
        project: projects[index],
        position: i, // -1 = left, 0 = center, 1 = right
        index,
      });
    }

    return cards;
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto  min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          A showcase of my latest work, featuring modern web applications and
          innovative solutions
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto h-[600px] flex items-center justify-center perspective-[1500px]">
        {getVisibleCards().map(({ project, position, index }) => (
          <div
            key={`${project.id}-${index}`}
            className={`absolute transition-all duration-700 ease-in-out cursor-pointer`}
            style={{
              transform: `
                ${
                  position === -1
                    ? "translateX(-300px) translateZ(-150px) rotateY(-25deg)"
                    : ""
                }
                ${
                  position === 0
                    ? "translateX(0) translateZ(0) rotateY(0deg)"
                    : ""
                }
                ${
                  position === 1
                    ? "translateX(300px) translateZ(-150px) rotateY(25deg)"
                    : ""
                }
              `,
              transformStyle: "preserve-3d",
              zIndex: position === 0 ? 30 : 20,
              opacity: position === 0 ? 1 : 0.6,
              scale: position === 0 ? 1 : 0.85,
            }}
            onClick={() => position !== 0 && goToSlide(index)}
          >
            <motion.div
              className="w-[22rem] h-[28rem] bg-gray-900/60 border border-gray-700/50 rounded-xl p-6 flex flex-col justify-between shadow-lg cursor-pointer group"
              style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.h3
                className="text-xl font-bold text-purple-300"
                style={{ transform: "translateZ(50px)" }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-sm text-gray-300 mt-2"
                style={{ transform: "translateZ(60px)" }}
              >
                {project.description}
              </motion.p>

              <motion.img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover rounded-lg mt-4"
                style={{ transform: "translateZ(80px)" }}
              />

              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-500 transition-colors"
                style={{ transform: "translateZ(40px)" }}
              >
                View Project →
              </motion.a>
            </motion.div>
          </div>
        ))}

        {/* Arrows */}
        <Button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-purple-600/80 text-white h-12 w-12 rounded-full shadow-lg z-40"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-purple-600/80 text-white h-12 w-12 rounded-full shadow-lg z-40"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}

// function ThreeDCard({ project }: { project: Project }) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Rotate the card based on mouse position
//   const rotateX = useTransform(y, [-100, 100], [15, -15]);
//   const rotateY = useTransform(x, [-100, 100], [-15, 15]);

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left - rect.width / 2;
//     const offsetY = e.clientY - rect.top - rect.height / 2;
//     x.set(offsetX);
//     y.set(offsetY);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   return (
//     <motion.div
//       className="w-[22rem] h-[28rem] bg-gray-900/40 border border-gray-700/50 rounded-xl p-6 flex flex-col justify-between shadow-lg cursor-pointer"
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//     >
//       <motion.h3
//         className="text-xl font-bold text-purple-300"
//         style={{ transform: "translateZ(50px)" }}
//       >
//         {project.title}
//       </motion.h3>
//       <motion.p
//         className="text-sm text-gray-300 mt-2"
//         style={{ transform: "translateZ(60px)" }}
//       >
//         {project.description}
//       </motion.p>
//       <motion.img
//         src={project.image}
//         alt={project.title}
//         className="h-40 w-full object-cover rounded-lg mt-4"
//         style={{ transform: "translateZ(80px)" }}
//       />
//       <motion.a
//         href={project.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-6 inline-block px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-500 transition-colors"
//         style={{ transform: "translateZ(40px)" }}
//       >
//         View Project →
//       </motion.a>
//     </motion.div>
//   );
// }

// export default function ProjectsCarousel() {
//   return (
//     <section id="projects" className="py-20 bg-[#0b0b12] text-white">
//       <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
//       <div className="flex gap-8 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide">
//         {projects.map((project, idx) => (
//           <div key={idx} className="snap-center">
//             <ThreeDCard project={project} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
