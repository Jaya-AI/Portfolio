import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";

export default function ResumeSection({ cardBg, cardBorder, textPrimary, textSecondary }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <SectionHeader title="Resume" subtitle="My CV" />
      <FadeIn>
        <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 20, padding: "40px 32px", backdropFilter: "blur(12px)", maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>📄</div>
          <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: 20, margin: "0 0 8px" }}>Jayesh Girase — Resume</h3>
          <p style={{ color: textSecondary, fontSize: 14, lineHeight: 1.8, margin: "0 0 28px" }}>
            Software Developer | Python Developer | IoT Enthusiast<br />
            B.tech in Artificial Intelligence and Machine Learning, — CGPA 7.27
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/Jayesh_Girase_Resume.pdf" download="Jayesh_Girase_Resume.pdf" style={{ padding: "12px 32px", borderRadius: 12, background: "linear-gradient(135deg,#06b6d4,#818cf8)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              ⬇ Download PDF
            </a>
            <a href="/Jayesh_Girase_Resume.pdf" target="_blank" rel="noreferrer" style={{ padding: "12px 32px", borderRadius: 12, border: "1px solid rgba(6,182,212,0.4)", color: "#06b6d4", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              👁 View Online
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
