/**
 * Projects Data
 * @description Add or update projects here. Each project requires: id, title, description, tech array, category, gradient, github, demo, and highlights.
 * Categories are used for filtering in the Projects section.
 */

export const PROJECTS = [
  {
    id: 1,
    title: "Home Automation System",
    description: "A full-stack IoT solution enabling remote control of home appliances via ESP32 and Blynk. Features real-time monitoring, voice commands, and automated scheduling with mobile app integration.",
    tech: ["ESP32", "Blynk", "Node.js", "MQTT", "React"],
    category: "IoT",
    gradient: "from-blue-600 to-cyan-500",
    github: "https://github.com/Jaya-AI",
    demo: "#",
    highlights: ["Real-time control", "Voice integration", "Mobile dashboard"],
  },
  {
    id: 2,
    title: "Smart Irrigation System",
    description: "Automated irrigation system using soil moisture sensors and weather API to optimize water usage. Reduced water consumption by 40% through intelligent scheduling and threshold-based automation.",
    tech: ["Arduino", "Python", "Flask", "MySQL", "Sensors"],
    category: "IoT",
    gradient: "from-green-600 to-teal-500",
    github: "https://github.com/Jaya-AI",
    demo: "#",
    highlights: ["40% water savings", "Weather API", "Auto-scheduling"],
  },
  {
    id: 3,
    title: "Industrial Motor Fault Detection",
    description: "ML-powered predictive maintenance system for industrial motors. Analyzes vibration, temperature, and current signals to detect faults before failure with 94% accuracy.",
    tech: ["Python", "TensorFlow", "scikit-learn", "MQTT", "React"],
    category: "ML/AI",
    gradient: "from-orange-600 to-red-500",
    github: "https://github.com/Jaya-AI",
    demo: "#",
    highlights: ["94% accuracy", "Real-time alerts", "Predictive maintenance"],
  },
  {
    id: 4,
    title: "Bone Crack Detection (YOLOv8)",
    description: "Deep learning system for automated detection of bone fractures in X-ray images using YOLOv8. Assists radiologists with 96% detection accuracy, reducing diagnostic time by 60%.",
    tech: ["Python", "YOLOv8", "OpenCV", "Flask", "TensorFlow"],
    category: "ML/AI",
    gradient: "from-purple-600 to-pink-500",
    github: "https://github.com/Jaya-AI",
    demo: "#",
    highlights: ["96% accuracy", "X-ray analysis", "60% faster diagnosis"],
  },
  {
    id: 5,
    title: "File Upload System",
    description: "Secure, scalable file management platform with drag-and-drop upload, cloud storage integration, and real-time progress tracking. Supports chunked uploads for large files.",
    tech: ["Spring Boot", "AWS S3", "React", "MySQL", "Docker"],
    category: "Full Stack",
    gradient: "from-indigo-600 to-blue-500",
    github: "https://github.com/Jaya-AI",
    demo: "#",
    highlights: ["AWS S3 storage", "Chunked uploads", "Real-time progress"],
  },
  {
    id: 6,
    title: "Stock Price Prediction",
    description: "AI-driven stock price forecasting using LSTM neural networks and real-time market data. Provides interactive charts, portfolio analytics, and buy/sell signal recommendations.",
    tech: ["Python", "LSTM", "Pandas", "Flask", "React"],
    category: "ML/AI",
    gradient: "from-cyan-600 to-blue-500",
    github: "https://github.com/Jaya-AI/Stock-Market-Price-Prediction",
    demo: "https://stock-market-price-prediction-2fmzmymsztouhxcvpf9vrw.streamlit.app/",
    highlights: ["LSTM model", "Live market data", "Portfolio analytics"],
  },
];
