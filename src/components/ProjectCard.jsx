import { useState } from "react";
import useInView from "../hooks/useInView.js";

export default function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease", cursor: "pointer", background: "rgba(15,23,42,0.8)", border: hovered ? "1px solid rgba(99,179,237,0.6)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden", boxShadow: hovered ? "0 20px 60px rgba(6,182,212,0.15)" : "0 4px 24px rgba(0,0,0,0.3)" }}>
      <div style={{ background: `linear-gradient(135deg, ${project.gradient.includes("blue-600") ? "#2563eb,#06b6d4" : project.gradient.includes("green") ? "#16a34a,#14b8a6" : project.gradient.includes("orange") ? "#ea580c,#ef4444" : project.gradient.includes("purple") ? "#7c3aed,#ec4899" : project.gradient.includes("indigo") ? "#4338ca,#3b82f6" : "#0891b2,#3b82f6"})`, padding: "28px 24px 20px", position: "relative" }}>
        <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.3)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#e2e8f0", fontWeight: 600 }}>{project.category}</div>
        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, margin: "0 0 8px", lineHeight: 1.3 }}>{project.title}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.slice(0, 4).map(t => (
            <span key={t} style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "2px 8px", fontSize: 11, color: "#fff", fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7, margin: "0 0 14px" }}>{project.description.slice(0, 100)}...</p>
        <div style={{ display: "flex", gap: 8 }}>
          <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
            style={{ flex: 1, textAlign: "center", padding: "7px 0", borderRadius: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}>
            GitHub
          </a>
          <button onClick={e => { e.stopPropagation(); onClick(project); }}
            style={{ flex: 1, padding: "7px 0", borderRadius: 8, background: "linear-gradient(90deg,#06b6d4,#818cf8)", border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Details →
          </button>
        </div>
      </div>
    </div>
  );
}
