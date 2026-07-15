import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";

export default function Achievements({ achievements, cardBg, cardBorder, textPrimary, textSecondary }) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader title="Achievements" subtitle="Milestones & Recognition" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
        {achievements.map((item, i) => (
          <FadeIn key={item.title} delay={i * 80}>
            <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 16, padding: "24px", backdropFilter: "blur(12px)" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: 16, margin: "0 0 8px" }}>{item.title}</h3>
              <p style={{ color: textSecondary, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
