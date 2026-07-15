import useInView from "../hooks/useInView.js";

export default function SectionHeader({ title, subtitle }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} style={{ textAlign: "center", marginBottom: 56, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
      <p style={{ color: "#06b6d4", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", margin: "0 0 12px" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, background: "linear-gradient(135deg, #e2e8f0 30%, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, lineHeight: 1.2 }}>{title}</h2>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#06b6d4,#818cf8)", borderRadius: 99, margin: "16px auto 0" }} />
    </div>
  );
}
