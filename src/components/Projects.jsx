import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#0f172a", border: "1px solid rgba(99,179,237,0.3)", borderRadius: 20, padding: "0 0 28px", maxWidth: 540, width: "100%", maxHeight: "80vh", overflowY: "auto" }}>
        <div style={{ background: `linear-gradient(135deg, ${project.gradient.includes("blue-600") ? "#2563eb,#06b6d4" : project.gradient.includes("green") ? "#16a34a,#14b8a6" : project.gradient.includes("orange") ? "#ea580c,#ef4444" : project.gradient.includes("purple") ? "#7c3aed,#ec4899" : project.gradient.includes("indigo") ? "#4338ca,#3b82f6" : "#0891b2,#3b82f6"})`, padding: "24px", borderRadius: "20px 20px 0 0", position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.4)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          <span style={{ background: "rgba(0,0,0,0.3)", borderRadius: 20, padding: "3px 12px", fontSize: 11, color: "#e2e8f0", fontWeight: 600 }}>{project.category}</span>
          <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 22, margin: "10px 0 0" }}>{project.title}</h2>
        </div>
        <div style={{ padding: "24px 28px 0" }}>
          <p style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.8, margin: "0 0 20px" }}>{project.description}</p>
          <h4 style={{ color: "#67e8f9", fontSize: 13, fontWeight: 700, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: 1 }}>Key Highlights</h4>
          <ul style={{ margin: "0 0 20px", padding: 0, listStyle: "none" }}>
            {project.highlights.map(h => (
              <li key={h} style={{ color: "#94a3b8", fontSize: 13, padding: "4px 0", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#06b6d4" }}>✓</span>{h}
              </li>
            ))}
          </ul>
          <h4 style={{ color: "#67e8f9", fontSize: 13, fontWeight: 700, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: 1 }}>Technologies</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {project.tech.map(t => (
              <span key={t} style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#67e8f9", fontWeight: 600 }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href={project.github} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              View on GitHub
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: 10, background: "linear-gradient(90deg,#06b6d4,#818cf8)", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({
  projects,
  projectFilter,
  setProjectFilter,
  projectSearch,
  setProjectSearch,
  selectedProject,
  setSelectedProject,
  cardBg,
  cardBorder,
  textPrimary,
  textSecondary,
}) {
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = projects.filter(p =>
    (projectFilter === "All" || p.category === projectFilter) &&
    (p.title.toLowerCase().includes(projectSearch.toLowerCase()) || p.tech.some(t => t.toLowerCase().includes(projectSearch.toLowerCase())))
  );

  return (
    <div style={{ padding: "100px 24px", background: "transparent" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader title="Projects" subtitle="What I've Built" />

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40, justifyContent: "center" }}>
          <input
            type="text"
            placeholder="🔍 Search projects or technologies..."
            value={projectSearch}
            onChange={e => setProjectSearch(e.target.value)}
            style={{ padding: "10px 20px", borderRadius: 12, border: `1px solid ${cardBorder}`, background: cardBg, color: textPrimary, fontSize: 14, width: "100%", maxWidth: 340, outline: "none" }}
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setProjectFilter(cat)} style={{ padding: "8px 18px", borderRadius: 20, border: "1px solid rgba(6,182,212,0.3)", background: projectFilter === cat ? "linear-gradient(135deg,#06b6d4,#818cf8)" : "transparent", color: projectFilter === cat ? "#fff" : "#06b6d4", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
          {filteredProjects.map(p => <ProjectCard key={p.id} project={p} onClick={setSelectedProject} />)}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: textSecondary }}>No projects found for "{projectSearch}"</div>
        )}
      </div>

      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
