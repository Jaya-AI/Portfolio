import useInView from "../hooks/useInView.js";

export default function SkillBar({ name, level, icon, delay = 0 }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${delay}ms`, background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontWeight: 600, fontSize: 14, color: "#e2e8f0", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>{icon}</span>{name}
        </span>
        <span style={{ fontSize: 13, color: "#67e8f9", fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 6, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 99, width: inView ? `${level}%` : "0%", background: "linear-gradient(90deg, #06b6d4, #818cf8)", transition: `width 1s ease ${delay + 200}ms` }} />
      </div>
    </div>
  );
}
