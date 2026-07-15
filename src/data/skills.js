/**
 * Skills Data
 * @description Add, update, or remove skills by category. Adjust proficiency levels (0-100).
 * Categories are displayed as sections in the Skills component.
 */

export const SKILLS = {
  Programming: [
    { name: "Core Java", level: 75, icon: "☕" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "C", level: 75, icon: "⚙️" }, 
  ],
  Frameworks: [
    { name: "Scikit-Learn", level: 92, icon: "📊" }, 
    { name: "TensorFlow", level: 88, icon: "🧠" }, 
    { name: "PyTorch", level: 80, icon: "🔥" }, 
    { name: "Keras", level: 75, icon: "🔴" }, 
    { name: "OpenCV", level: 75, icon: "👁️" }, 
    { name: "YOLO", level: 75, icon: "🎯" }, 
  ],
  Database: [
    { name: "MySQL", level: 85, icon: "🐬" }, 
    { name: "PostgreSQL", level: 78, icon: "🐘" }, 
    { name: "SQLite", level: 70, icon: "🪶" }, 
  ],
  Tools: [
    { name: "Git", level: 90, icon: "🔀" },
    { name: "GitHub", level: 90, icon: "🐙" }, 
    { name: "VS Code", level: 68, icon: "💻" }, 
    { name: "Jupyter Notebook", level: 62, icon: "📓" }, 
    { name: "Google Colab", level: 62, icon: "♾️" }, 
  ],
  IoT: [
    { name: "ESP32", level: 85, icon: "📡" },
    { name: "Arduino", level: 88, icon: "🔌" },
    { name: "Blynk", level: 80, icon: "📱" },
    { name: "Sensors", level: 82, icon: "🌡" },
  ],
  Soft_Skills: [
    { name: "Leadership", level: 82, icon: "🧭" },
    { name: "Communication", level: 85, icon: "💬" }, 
    { name: "Teamwork", level: 88, icon: "🤝" }, 
    { name: "Problem Solving", level: 80, icon: "🧩" },
    { name: "Adaptability", level: 82, icon: "🌊" }, 
  ],
};
