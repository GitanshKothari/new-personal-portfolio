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
      title: "Scholarspace AI",
      description: "Scholarspace AI is a personalized learning platform designed to bridge the gap between teachers and students by combining classroom management with AI-driven coding assistance. The platform allows teachers to seamlessly create classrooms, assign coding problems, and track student progress, while students can write and submit code directly through an integrated editor. The highlight of the project is an AI-powered assistant that provides real-time feedback and guidance to students without revealing solutions, encouraging independent problem-solving. Built with TypeScript, React, and PostgreSQL, the system emphasizes scalability and user-friendly workflows, making it an effective digital companion for both teaching and learning.",
      image: "/projects/scholarspaceai.png",
      technologies: ["TypeScript", "React", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/hitarthdesai/scholar-space-ai",
      featured: true,
      category: "Full Stack / AI"
    },
    {
      id: 2,
      title: "Object Detection and Segmentation",
      description: "This project focuses on enhancing the YOLOv5 model to perform multi-task learning by combining object detection and semantic segmentation within a single forward pass. Rather than maintaining separate models for each task, I re-architected the training pipeline, modifying the model architecture, data loaders, loss functions, and inference scripts to support both tasks simultaneously. The system was optimized to maintain detection accuracy while adding the ability to segment drivable areas, reducing computational overhead and improving inference efficiency. Built with PyTorch, NumPy, and OpenCV, the project demonstrates advanced model customization and highlights my ability to improve efficiency in real-time computer vision tasks relevant to autonomous driving.",
      image: "/projects/yolo-seg.jpg",
      technologies: ["Python", "PyTorch", "OpenCV", "NumPy"],
      liveUrl: "#",
      githubUrl: "https://github.com/GitanshKothari/yolov5_segmentation",
      featured: true,
      category: "Computer Vision"
    },
    {
      id: 3,
      title: "Optical Character Recognition",
      description: "The Optical Character Recognition project involved building a robust Convolutional Recurrent Neural Network (CRNN) capable of extracting text from natural images. The system combined convolutional layers for feature extraction with recurrent layers to model sequential dependencies, achieving over 80% accuracy in text recognition. To ensure reliability, I implemented a comprehensive training pipeline including preprocessing techniques such as image normalization and augmentation, as well as a custom loss function tailored for sequence prediction. The project showcases my ability to design end-to-end deep learning solutions, from data handling to architecture design, with real-world applications in digitizing text from images and scanned documents.",
      image: "/projects/ocr.png",
      technologies: ["Python", "PyTorch", "OpenCV"],
      liveUrl: "#",
      githubUrl: "https://github.com/GitanshKothari/OCR-using-CRNN",
      featured: false,
      category: "Computer Vision / NLP"
    },
    {
      id: 4,
      title: "UniMaps – GIS Application",
      description: "UniMaps is a C++-based geographic information system application built to provide users with an intuitive navigation experience across university campuses. The application includes features such as location search, bookmarking, and route planning, with the core pathfinding functionality powered by the A* algorithm. To optimize performance, a Trie data structure was integrated for rapid search operations, enabling efficient retrieval of location data even in large datasets. The user interface, developed using Glade, offers an accessible way to interact with the system, blending efficiency with usability. This project highlights my ability to design systems-level applications with an emphasis on algorithms and data structures.",
      image: "/projects/gis.png",
      technologies: ["C++", "C++ STL", "Glade"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Systems / Mapping"
    },
    {
      id: 5,
      title: "Reinforcement Learning in ViZDoom",
      description: "In this project, I implemented reinforcement learning agents within the ViZDoom environment, a 3D first-person shooter designed for AI research. By experimenting with algorithms such as PPO, DQN, and A2C, I trained agents to detect enemies and navigate complex arenas in real time. The neural networks were designed to process visual inputs and make strategic decisions that improved responsiveness and survivability within the game environment. To further enhance learning efficiency, I automated reward shaping and conducted hyperparameter tuning, which significantly improved performance across different scenarios. The project demonstrates my practical understanding of reinforcement learning and my ability to apply it to dynamic, real-time environments where perception and decision-making are tightly coupled.",
      image: "/projects/vizdoom.png",
      technologies: ["Python", "PyTorch", "OpenAI Gym", "Stable Baselines"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Reinforcement Learning"
    }
];

export const featuredProjects = projects.filter(project => project.featured);
export const allProjects = projects;
