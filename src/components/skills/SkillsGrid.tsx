"use client";

import { useState, useEffect, useRef } from "react";
import { skills } from "./skillsData";
import { Skill, categoryColors, domainColors } from "./types";
import Image from "next/image";

const categoryLabels = {
  languages: "Programming Languages",
  frameworks: "Frameworks & Libraries", 
  tools: "Tools & Technologies",
  databases: "Databases"
};

const domainLabels = {
  ml: "Machine Learning & Deep Learning",
  development: "Software Engineering & Development"
};

export function SkillsGrid() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const skillsByDomain = skills.reduce((acc, skill) => {
    if (!acc[skill.domain]) {
      acc[skill.domain] = {};
    }
    if (!acc[skill.domain][skill.category]) {
      acc[skill.domain][skill.category] = [];
    }
    acc[skill.domain][skill.category].push(skill);
    return acc;
  }, {} as Record<string, Record<string, Skill[]>>);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes react-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes docker-bob {
          0%, 100% {
            transform: rotate(0deg) translateY(0px);
          }
          50% {
            transform: rotate(2deg) translateY(-2px);
          }
        }
        
        @keyframes git-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(249, 115, 22, 0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .react-spin:hover {
          animation: react-spin 1s ease-in-out;
        }
        
        .docker-bob:hover {
          animation: docker-bob 2s ease-in-out infinite;
        }
        
        .git-pulse:hover {
          animation: git-pulse 2s ease-in-out infinite;
        }
      `}</style>
      <div ref={sectionRef} className={`space-y-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
      {/* Domain Sections */}
      {Object.entries(skillsByDomain).map(([domain, domainSkills]) => (
        <div key={domain} className="space-y-6">
          {/* Domain Header */}
          <div className={`text-center animate-slide-up ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <h2 
              className="text-2xl font-bold mb-2"
              style={{ color: domainColors[domain as keyof typeof domainColors] }}
            >
              {domainLabels[domain as keyof typeof domainLabels]}
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full" 
                 style={{ backgroundColor: domainColors[domain as keyof typeof domainColors] }} />
          </div>


          {/* Skills Grid for this domain */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(domainSkills).map(([category, categorySkills]) => (
              <div key={category} className="space-y-4">
                {/* Category Header */}
                <div className={`text-center animate-slide-up ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ animationDelay: '0.4s' }}>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: categoryColors[category as keyof typeof categoryColors] }}
                  >
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                </div>

                {/* Skills in this category */}
                <div className="space-y-2">
                  {categorySkills.map((skill, index) => {
                    const isHovered = hoveredSkill === skill.name;
                    const isGroupHovered = hoveredSkill && hoveredSkill !== skill.name;
                    const categoryColor = categoryColors[category as keyof typeof categoryColors];
                    
                    // Microinteraction classes
                    const getMicroInteractionClass = () => {
                      switch (skill.name.toLowerCase()) {
                        case 'react': return 'react-spin';
                        case 'docker': return 'docker-bob';
                        case 'git': return 'git-pulse';
                        default: return '';
                      }
                    };
                    
                    return (
                      <div
                        key={skill.name}
                        className={`group relative transition-all duration-500 ${
                          isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        } ${isGroupHovered ? 'opacity-80' : 'opacity-100'}`}
                        style={{
                          transitionDelay: `${0.6 + index * 0.1}s`,
                          animationDelay: `${0.6 + index * 0.1}s`
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onMouseMove={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setMousePosition({
                            x: e.clientX - rect.left - rect.width / 2,
                            y: e.clientY - rect.top - rect.height / 2
                          });
                        }}
                      >
                        <div
                          className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden ${
                            isHovered 
                              ? 'transform translate-y-[-8px] scale-105' 
                              : 'transform translate-y-0 scale-100'
                          }`}
                          onClick={() => setSelectedSkill(skill)}
                          style={{
                            background: isHovered 
                              ? `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}10)` 
                              : 'transparent',
                            boxShadow: isHovered 
                              ? `0 10px 25px ${categoryColor}30, 0 0 20px ${categoryColor}20` 
                              : 'none'
                          }}
                        >
                          {/* Glow effect behind logo */}
                          <div 
                            className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                              isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                              background: `radial-gradient(circle at center, ${categoryColor}20 0%, transparent 70%)`,
                              transform: 'scale(1.2)'
                            }}
                          />
                          
                          <div 
                            className={`w-8 h-8 flex-shrink-0 relative z-10 transition-all duration-300 ${
                              isHovered ? 'transform' : ''
                            } ${getMicroInteractionClass()}`}
                            style={{
                              transform: isHovered 
                                ? `translateZ(20px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)` 
                                : 'translateZ(0px) rotateX(0deg) rotateY(0deg)'
                            }}
                          >
                            <Image
                              src={`/${skill.logo}`}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain transition-transform duration-300"
                            />
                          </div>
                          
                          <h4 
                            className={`font-medium text-sm text-center transition-all duration-300 relative z-10 ${
                              isHovered 
                                ? 'transform translate-y-[-2px] brightness-110' 
                                : 'transform translate-y-0 brightness-100'
                            }`}
                            style={{
                              color: isHovered ? categoryColor : 'inherit'
                            }}
                          >
                            {skill.name}
                          </h4>
                        </div>

                        {/* Enhanced Hover tooltip */}
                        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-full transition-all duration-300 pointer-events-none z-20 ${
                          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}>
                          <div 
                            className="text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg"
                            style={{ backgroundColor: categoryColor }}
                          >
                            Click to view projects
                          </div>
                          <div 
                            className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent mx-auto"
                            style={{ borderTopColor: categoryColor }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>

      {/* Project Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg border border-border max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10">
                  <Image
                    src={`/${selectedSkill.logo}`}
                    alt={selectedSkill.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{selectedSkill.name}</h3>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-3">Projects</h4>
              <ul className="space-y-2">
                {selectedSkill.projects.map((project, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
