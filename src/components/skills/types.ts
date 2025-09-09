export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools" | "databases";
  domain: "ml" | "development";
  logo: string;
  proficiency: number;
  projects: string[];
}

export const categoryColors = {
  languages: "#8b5cf6", // purple
  frameworks: "#f59e0b", // amber
  tools: "#06b6d4", // cyan
  databases: "#10b981", // emerald
} as const;

export const domainColors = {
  ml: "#ec4899", // pink
  development: "#3b82f6", // blue
} as const;
