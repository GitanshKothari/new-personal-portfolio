"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-900/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer project-card flex flex-col"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 rounded-lg hover:bg-purple-600/80 transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 rounded-lg hover:bg-purple-600/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category Badge */}
        <Badge variant="secondary" className="mb-3 text-xs">
          {project.category}
        </Badge>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <div className="flex-1 mb-4">
          <p className="text-gray-300 text-sm line-clamp-3 mb-2">
            {project.description}
          </p>
          
          {/* Click indicator */}
          <p className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to view full details →
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto min-h-[3.5rem] max-h-[3.5rem] overflow-hidden">
          {project.technologies.slice(0, 6).map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="project-tech-badge border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors flex-shrink-0"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 6 && (
            <Badge
              variant="outline"
              className="project-tech-badge border-gray-600 text-gray-300 flex-shrink-0"
            >
              +{project.technologies.length - 6} more
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}
