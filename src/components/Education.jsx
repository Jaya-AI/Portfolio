import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";

export default function Education({ education, cardBg, cardBorder, textPrimary, textSecondary, lightMode }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <SectionHeader title="Education" subtitle="Academic Background" />
      {education.map((edu, i) => (
        <FadeIn key={edu.degree} delay={i * 100}>
          <div style={{ display: "flex", gap: 24, marginBottom: 32, alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#818cf8)", border: "3px solid rgba(6,182,212,0.3)" }} />
              {i < education.length - 1 && <div style={{ width: 2, height: 80, background: "linear-gradient(180deg,rgba(6,182,212,0.4),transparent)" }} />}
            </div>
            <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 16, padding: "24px 28px", flex: 1, backdropFilter: "blur(12px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: 17, margin: 0 }}>{edu.degree}</h3>
                <span style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.25)", borderRadius: 20, padding: "2px 12px", fontSize: 12, color: "#06b6d4", fontWeight: 600, whiteSpace: "nowrap" }}>{edu.period}</span>
              </div>
              <p style={{ color: "#818cf8", fontSize: 14, fontWeight: 600, margin: "0 0 4px" }}>{edu.institution}</p>
              <p style={{ color: "#06b6d4", fontSize: 13, fontWeight: 700, margin: "0 0 12px" }}>{edu.grade}</p>
              <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                {edu.details.map(detail => (
                  <li key={detail} style={{ color: textSecondary, fontSize: 13, lineHeight: 2 }}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
