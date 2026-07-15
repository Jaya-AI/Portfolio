import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";

export default function Activities({ activities, cardBg, cardBorder, textPrimary, textSecondary }) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader title="Extra-Curricular Activities" subtitle="Beyond the Code" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
        {activities.map((activity, i) => (
          <FadeIn key={activity.title} delay={i * 80}>
            <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 16, padding: 24, backdropFilter: "blur(12px)", display: "flex", gap: 16 }}>
              <div style={{ fontSize: 32, flexShrink: 0 }}>{activity.icon}</div>
              <div>
                <h4 style={{ color: textPrimary, fontWeight: 700, fontSize: 15, margin: "0 0 6px" }}>{activity.title}</h4>
                <p style={{ color: textSecondary, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{activity.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
