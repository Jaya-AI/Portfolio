import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";

export default function Experience({ experiences, cardBg, cardBorder, textPrimary, textSecondary }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <SectionHeader title="Experience" subtitle="Work & Internships" />
      {experiences.map((exp, i) => (
        <FadeIn key={exp.role} delay={i * 100}>
          <div style={{ display: "flex", gap: 24, marginBottom: 36 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: exp.color === "cyan" ? "#06b6d4" : "#818cf8", boxShadow: `0 0 16px ${exp.color === "cyan" ? "rgba(6,182,212,0.6)" : "rgba(129,140,248,0.6)"}` }} />
              {i < experiences.length - 1 && <div style={{ width: 2, flex: 1, background: `linear-gradient(180deg,${exp.color === "cyan" ? "#06b6d4" : "#818cf8"},transparent)`, minHeight: 60 }} />}
            </div>
            <div style={{ background: cardBg, border: `1px solid ${exp.color === "cyan" ? "rgba(6,182,212,0.2)" : "rgba(129,140,248,0.2)"}`, borderRadius: 16, padding: "24px 28px", flex: 1, backdropFilter: "blur(12px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: 17, margin: 0 }}>{exp.role}</h3>
                <span style={{ background: exp.color === "cyan" ? "rgba(6,182,212,0.1)" : "rgba(129,140,248,0.1)", border: `1px solid ${exp.color === "cyan" ? "rgba(6,182,212,0.25)" : "rgba(129,140,248,0.25)"}`, borderRadius: 20, padding: "2px 12px", fontSize: 12, color: exp.color === "cyan" ? "#06b6d4" : "#818cf8", fontWeight: 600 }}>{exp.type}</span>
              </div>
              <p style={{ color: exp.color === "cyan" ? "#06b6d4" : "#818cf8", fontSize: 14, fontWeight: 600, margin: "0 0 4px" }}>{exp.company}</p>
              <p style={{ color: textSecondary, fontSize: 13, margin: "0 0 16px" }}>📅 {exp.period}</p>
              <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                {exp.points.map(point => (
                  <li key={point} style={{ color: textSecondary, fontSize: 13, lineHeight: 2 }}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
