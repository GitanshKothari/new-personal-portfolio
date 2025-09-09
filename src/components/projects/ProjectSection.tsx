"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "./projectsData";

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  projects: Project[];
  itemsPerView?: number;
}

export function ProjectSection({ 
  title, 
  subtitle, 
  projects, 
  itemsPerView = 3 
}: ProjectSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items per view
  const getResponsiveItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return itemsPerView; // Desktop
    }
    return itemsPerView;
  };

  const [responsiveItemsPerView, setResponsiveItemsPerView] = useState(itemsPerView);

  // Update responsive items per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setResponsiveItemsPerView(getResponsiveItemsPerView());
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - responsiveItemsPerView);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + responsiveItemsPerView);

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
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Projects Container */}
      <div className="relative overflow-x-clip">
        {/* Navigation Buttons - Only show when there are items to navigate to */}
        {canGoPrev && (
          <Button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-purple-600/80 text-white h-12 w-12 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        )}

        {canGoNext && (
          <Button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-purple-600/80 text-white h-12 w-12 rounded-full shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        )}

        {/* Projects Grid */}
        <div 
          ref={containerRef}
          className="overflow-hidden"
        >
          <motion.div
            className="flex -mx-3 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / responsiveItemsPerView)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full box-border px-3"
                style={{ width: `${100 / responsiveItemsPerView}%` }}
              >
                <ProjectCard 
                  project={project} 
                  index={index} 
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        {projects.length > responsiveItemsPerView && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
