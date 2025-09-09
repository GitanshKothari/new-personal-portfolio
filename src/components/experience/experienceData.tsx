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
      description: "Developed and optimized computer vision algorithms for autonomous vehicle systems, focusing on real-time segmentation and performance improvements. Worked on drivable area detection and instance segmentation models for ADAS applications.",
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
      description: "Developed and implemented reinforcement learning algorithms for game AI applications. Worked on automated reward shaping and performance optimization for various VizDoom scenarios using state-of-the-art RL frameworks.",
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
      description: "Developed machine learning models for financial data analysis and stock price prediction. Implemented LSTM networks and data visualization tools for quantitative analysis in the fintech sector.",
      keyTakeaways: [
        "Implemented a basic LSTM model to predict stock prices based on historical data.",
        "Visualized stock charts using Matplotlib.",
      ],
      tech: ["Python", "TensorFlow", "Matplotlib", "NumPy"],
      logo: "/experience/altiore-logo.png",
    },
  ];
  