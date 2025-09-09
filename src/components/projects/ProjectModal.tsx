"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "./projectsData";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/95 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-white h-10 w-10 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Content */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="lg:w-1/2 h-64 lg:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="lg:w-1/2 p-8 overflow-y-auto">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="text-sm">
                      {project.category}
                    </Badge>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Featured Project
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">
                    About This Project
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-sm border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.githubUrl && (
                    <Button
                      asChild
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button
                      asChild
                      className="flex-1 bg-purple-600 hover:bg-purple-500 text-white"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                    <div>
                      <span className="font-medium text-gray-300">Category:</span>
                      <p>{project.category}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-300">Status:</span>
                      <p>{project.featured ? "Featured" : "Completed"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
