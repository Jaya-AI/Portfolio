import SectionHeader from "./SectionHeader.jsx";
import SkillBar from "./SkillBar.jsx";

export default function Skills({ skills, cardBg, cardBorder, textPrimary, textSecondary }) {
  return (
    <div style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader title="Technical Skills" subtitle="What I Work With" />
      {Object.entries(skills).map(([category, categorySkills]) => (
        <div key={category} style={{ marginBottom: 48 }}>
          <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: 16, margin: "0 0 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 32, height: 3, background: "linear-gradient(90deg,#06b6d4,#818cf8)", borderRadius: 99 }} />
            {category}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14 }}>
            {categorySkills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 80} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
