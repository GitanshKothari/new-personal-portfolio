"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    title: "Drivable Area Segmentation",
    description:
      "Real-time computer vision system for autonomous vehicles using PyTorch and CUDA acceleration. Achieved 50% performance improvement through optimized post-processing algorithms.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["PyTorch", "C++", "CUDA", "OpenCV"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Reinforcement Learning Game AI",
    description:
      "Implemented PPO, DQN, and A2C algorithms for VizDoom scenarios with automated reward shaping. Developed comprehensive evaluation framework for RL performance analysis.",
    image: "/task-management-dashboard.png",
    technologies: ["Python", "PyTorch", "OpenAI Gym", "Stable Baselines"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Stock Price Prediction System",
    description:
      "LSTM-based financial forecasting model with data visualization tools. Implemented time series analysis and statistical modeling for quantitative trading insights.",
    image: "/weather-analytics-dashboard-with-charts.png",
    technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsDisplay() {
  function useCardTilt() {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
    const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
          A showcase of my machine learning and software engineering projects, 
          featuring computer vision, reinforcement learning, and data science solutions
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
