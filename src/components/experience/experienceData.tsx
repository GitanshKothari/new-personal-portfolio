export type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    location: string;
    type?: string;
    description: string;
    keyTakeaways: string[];
    tech: string[];
    logo?: string;
  };
  
  export const experienceData: ExperienceItem[] = [
    {
      role: "Software Engineering Intern",
      company: "Magna Vectrics",
      period: "May 2023 – June 2024",
      location: "Toronto, Canada",
      type: "Co-op",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      keyTakeaways: [
        "Updated drivable area segmentation plugin to support multiple model architectures; expanded functionality from semantic to instance segmentation with 46 classes.",
        "Implemented optimized custom post-processing algorithms for real-time segmentation without impacting performance.",
        "Restructured software architecture, reducing processing time by 50% and eliminating memory leaks; added CUDA support for GPU inference.",
      ],
      tech: ["C++", "Python", "PyTorch", "CUDA"],
      logo: "/experience/magna-logo.png",
    },
    {
      role: "Machine Learning Intern",
      company: "Mad Street Den",
      period: "Jun 2022 – Aug 2023",
      location: "Chennai, India",
      type: "Internship",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      keyTakeaways: [
        "Implemented reinforcement learning algorithms (PPO, DQN, A2C) and evaluated their performance on distinct VizDoom scenarios.",
        "Automated reward shaping process to optimize game variable weights.",
      ],
      tech: ["Python", "Stable Baselines", "OpenAI Gym", "PyTorch"],
      logo: "/experience/msd-logo.png",
    },
    {
      role: "Summer Intern",
      company: "Altiore Capital",
      period: "May 2019 – Jun 2019",
      location: "Bangalore, India",
      type: "Internship",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      keyTakeaways: [
        "Implemented a basic LSTM model to predict stock prices based on historical data.",
        "Visualized stock charts using Matplotlib.",
      ],
      tech: ["Python", "TensorFlow", "Matplotlib", "NumPy"],
      logo: "/experience/altiore-logo.png",
    },
  ];
  