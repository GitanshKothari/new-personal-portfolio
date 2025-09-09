export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Drivable Area Segmentation",
    description: "Real-time computer vision system for autonomous vehicles using PyTorch and CUDA acceleration. Achieved 50% performance improvement through optimized post-processing algorithms.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["PyTorch", "C++", "CUDA", "OpenCV", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/drivable-segmentation",
    featured: true,
    category: "Computer Vision"
  },
  {
    id: 2,
    title: "Reinforcement Learning Game AI",
    description: "Implemented PPO, DQN, and A2C algorithms for VizDoom scenarios with automated reward shaping. Developed comprehensive evaluation framework for RL performance analysis.",
    image: "/task-management-dashboard.png",
    technologies: ["Python", "PyTorch", "OpenAI Gym", "Stable Baselines", "NumPy"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/rl-game-ai",
    featured: true,
    category: "Reinforcement Learning"
  },
  {
    id: 3,
    title: "Stock Price Prediction System",
    description: "LSTM-based financial forecasting model with data visualization tools. Implemented time series analysis and statistical modeling for quantitative trading insights.",
    image: "/weather-analytics-dashboard-with-charts.png",
    technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib", "Pandas"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/stock-prediction",
    featured: true,
    category: "Data Science"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Stripe"],
    liveUrl: "https://your-ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: false,
    category: "Web Development"
  },
  {
    id: 5,
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    liveUrl: "https://your-task-demo.com",
    githubUrl: "https://github.com/yourusername/task-dashboard",
    featured: false,
    category: "Web Development"
  },
  {
    id: 6,
    title: "Weather Analytics Dashboard",
    description: "Interactive data visualization dashboard for weather patterns and climate analysis with real-time data processing and forecasting.",
    image: "/weather-analytics-dashboard-with-charts.png",
    technologies: ["D3.js", "Python", "Flask", "MongoDB", "Chart.js"],
    liveUrl: "https://your-weather-demo.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    featured: false,
    category: "Data Visualization"
  },
  {
    id: 7,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction management, and real-time notifications.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/mobile-banking",
    featured: false,
    category: "Mobile Development"
  },
  {
    id: 8,
    title: "Machine Learning Pipeline",
    description: "Automated ML pipeline for data preprocessing, model training, and deployment with MLOps best practices and monitoring.",
    image: "/task-management-dashboard.png",
    technologies: ["Python", "Docker", "Kubernetes", "MLflow", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/ml-pipeline",
    featured: false,
    category: "Machine Learning"
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export const allProjects = projects;
