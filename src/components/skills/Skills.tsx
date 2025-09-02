"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools" | "databases";
  logo: string;
  proficiency: number;
  projects: string[];
}

const skills: Skill[] = [
  // Programming Languages
  {
    name: "Python",
    category: "languages",
    logo: "skills/python.svg",
    proficiency: 95,
    projects: [
      "ML Pipeline Automation",
      "Data Analysis Dashboard",
      "AI Chatbot Backend",
    ],
  },
  {
    name: "JavaScript",
    category: "languages",
    logo: "skills/javascript.svg",
    proficiency: 90,
    projects: [
      "E-commerce Platform",
      "Real-time Chat App",
      "Portfolio Website",
    ],
  },
  {
    name: "TypeScript",
    category: "languages",
    logo: "skills/typescript.svg",
    proficiency: 85,
    projects: [
      "Enterprise CRM System",
      "API Gateway Service",
      "React Component Library",
    ],
  },
  {
    name: "C++",
    category: "languages",
    logo: "skills/cpp.svg",
    proficiency: 75,
    projects: [
      "High-Performance Computing",
      "Game Engine Development",
      "Algorithm Optimization",
    ],
  },

  // Frameworks & Libraries
  {
    name: "React",
    category: "frameworks",
    logo: "skills/react.svg",
    proficiency: 90,
    projects: ["Social Media Platform", "Admin Dashboard", "E-learning Portal"],
  },
  {
    name: "Next.js",
    category: "frameworks",
    logo: "skills/nextjs.svg",
    proficiency: 85,
    projects: ["Portfolio Website", "Blog Platform", "SaaS Landing Pages"],
  },
  {
    name: "PyTorch",
    category: "frameworks",
    logo: "skills/pytorch.svg",
    proficiency: 80,
    projects: [
      "Computer Vision Pipeline",
      "Deep Learning Research",
      "Neural Network Training",
    ],
  },
  {
    name: "Node.js",
    category: "frameworks",
    logo: "skills/nodejs.svg",
    proficiency: 80,
    projects: [
      "REST API Backend",
      "Real-time WebSocket Server",
      "Microservices Gateway",
    ],
  },

  // Tools & Technologies
  {
    name: "Git",
    category: "tools",
    logo: "skills/git.svg",
    proficiency: 90,
    projects: [
      "Version Control for All Projects",
      "CI/CD Pipeline Setup",
      "Code Review Workflows",
    ],
  },
  {
    name: "Docker",
    category: "tools",
    logo: "skills/docker.svg",
    proficiency: 80,
    projects: [
      "Containerized Microservices",
      "Development Environment Setup",
      "Production Deployment",
    ],
  },
  {
    name: "AWS",
    category: "tools",
    logo: "skills/aws.svg",
    proficiency: 75,
    projects: [
      "Serverless Architecture",
      "Auto-scaling Web Apps",
      "Data Lake Implementation",
    ],
  },
  {
    name: "Kubernetes",
    category: "tools",
    logo: "skills/kubernetes.svg",
    proficiency: 70,
    projects: [
      "Container Orchestration",
      "Service Mesh Implementation",
      "Auto-scaling Solutions",
    ],
  },
  {
    name: "Linux",
    category: "tools",
    logo: "skills/linux.svg",
    proficiency: 85,
    projects: [
      "Server Administration",
      "Shell Scripting Automation",
      "System Performance Optimization",
    ],
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "databases",
    logo: "skills/postgresql.svg",
    proficiency: 80,
    projects: [
      "E-commerce Database Design",
      "Analytics Data Warehouse",
      "Multi-tenant SaaS DB",
    ],
  },
  {
    name: "Redis",
    category: "databases",
    logo: "skills/redis.svg",
    proficiency: 70,
    projects: ["Session Management", "Caching Layer", "Real-time Leaderboards"],
  },
];

const categoryColors = {
  languages: "#8b5cf6", // purple
  frameworks: "#f59e0b", // amber
  tools: "#06b6d4", // cyan
  databases: "#10b981", // emerald
};

function ProjectModal({
  skill,
  onClose,
}: {
  skill: Skill;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{skill.name}</span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-muted-foreground">Proficiency:</span>
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-1000"
                style={{
                  width: `${skill.proficiency}%`,
                  backgroundColor: categoryColors[skill.category],
                }}
              />
            </div>
            <span className="text-sm font-medium">{skill.proficiency}%</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-3">
            Projects Used In:
          </h4>
          <div className="space-y-2">
            {skill.projects.map((project, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg p-3 border border-border/50"
              >
                <span className="text-sm text-foreground">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillSphere({
  skill,
  position,
  index,
  onClick,
}: {
  skill: Skill;
  position: [number, number, number];
  index: number;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const size = 0.4 + (skill.proficiency / 100) * 0.6;

  useFrame((state) => {
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + index) * 0.15;

    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;

    const targetScale = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={categoryColors[skill.category]}
          transparent
          opacity={0.9}
          emissive={categoryColors[skill.category]}
          emissiveIntensity={hovered ? 0.4 : 0.15}
        />
      </mesh>

      {hovered && (
        <Html
          position={[0, size + 0.8, 0]}
          center
          style={{
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <div className="bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-lg font-medium whitespace-nowrap border border-white/30">
            <div className="flex items-center gap-2">
              <img
                src={skill.logo}
                alt={skill.name + " logo"}
                style={{ width: 24, height: 24 }}
              />
              <span className="text-sm">{skill.name}</span>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

function SkillsCloud() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skillPositions = useMemo(() => {
    return skills.map((_, index) => {
      const total = skills.length;
      const radius = 4.5;

      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (index / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * index;

      return [
        Math.cos(theta) * radiusAtY * radius,
        y * radius,
        Math.sin(theta) * radiusAtY * radius,
      ] as [number, number, number];
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.7} />

      <directionalLight position={[10, 10, 5]} intensity={1.2} />

      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.6} />
      <pointLight position={[10, 10, 10]} color="#f59e0b" intensity={0.6} />

      {skills.map((skill, index) => (
        <SkillSphere
          key={index}
          skill={skill}
          position={skillPositions[index]}
          index={index}
          onClick={() => setSelectedSkill(skill)}
        />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={6}
        maxDistance={18}
        autoRotate
        autoRotateSpeed={0.8}
      />

      {selectedSkill && (
        <Html>
          <ProjectModal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        </Html>
      )}
    </>
  );
}

export default function SkillsSection3D() {
  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
            Technical Skills
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-4">
            Explore my technical expertise in a 3D spherical cloud
          </p>
          <p className="text-sm text-muted-foreground/80">
            Drag to rotate • Scroll to zoom • Hover to see names • Click to view
            projects
          </p>
        </div>

        <div className="h-[600px] w-full rounded-lg border border-border/50 bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm">
          <Canvas
            camera={{ position: [0, 0, 12], fov: 60 }}
            style={{ background: "transparent" }}
          >
            <SkillsCloud />
          </Canvas>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: categoryColors.languages }}
            />
            <span className="text-muted-foreground">Programming Languages</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: categoryColors.frameworks }}
            />
            <span className="text-muted-foreground">
              Frameworks & Libraries
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: categoryColors.tools }}
            />
            <span className="text-muted-foreground">Tools & Technologies</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: categoryColors.databases }}
            />
            <span className="text-muted-foreground">Databases</span>
          </div>
        </div>
      </div>
    </section>
  );
}
