import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";
import useInView from "../hooks/useInView.js";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About({ cardBg, cardBorder, textPrimary, textSecondary }) {
  return (
    <div style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader title="About Me" subtitle="Who I Am" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 32, marginBottom: 60 }}>
        <FadeIn delay={0}>
          <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 20, padding: 32, backdropFilter: "blur(12px)" }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🎓</div>
            <h3 style={{ color: "#06b6d4", fontWeight: 700, fontSize: 18, margin: "0 0 12px" }}>Academic Journey</h3>
            <p style={{ color: textSecondary, lineHeight: 1.8, fontSize: 14, margin: 0 }}>
              Final-year B.Tech student in Artificial Intelligence and Machine Learning at R. C. Patel Institute of Technology, passionate about transforming ideas into real-world solutions through software development, AI, IoT, and modern technologies. Continuously learning and building innovative projects to create meaningful impact.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 20, padding: 32, backdropFilter: "blur(12px)" }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>💡</div>
            <h3 style={{ color: "#818cf8", fontWeight: 700, fontSize: 18, margin: "0 0 12px" }}>Career Objective</h3>
            <p style={{ color: textSecondary, lineHeight: 1.8, fontSize: 14, margin: 0 }}>
              Aspiring Machine Learning and Software Engineer with a strong foundation in Python, Artificial Intelligence, and modern technologies. Seeking opportunities to develop intelligent solutions, tackle real-world challenges, and contribute to innovative projects while continuously learning and growing in a collaborative environment.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 20, padding: 32, backdropFilter: "blur(12px)" }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🚀</div>
            <h3 style={{ color: "#ec4899", fontWeight: 700, fontSize: 18, margin: "0 0 12px" }}>What Drives Me</h3>
            <p style={{ color: textSecondary, lineHeight: 1.8, fontSize: 14, margin: 0 }}>
              I believe technology should bridge the gap between complexity and human need. From smart homes to predictive AI, every project I build aims to simplify and enhance everyday life.
            </p>
          </div>
        </FadeIn>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 20 }}>
        {[
          ["3+", "Years Coding", "🔥"],
          ["6+", "Projects Built", "⚙️"],
          ["30+", "LeetCode Solved", "💻"],
          ["1", "Internships", "💼"],
        ].map(([num, label, icon]) => (
          <div key={label} style={{ background: "linear-gradient(135deg,rgba(6,182,212,0.08),rgba(129,140,248,0.08))", border: "1px solid rgba(6,182,212,0.2)", borderRadius: 16, padding: "24px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>{icon}</div>
            <div style={{ fontSize: 32, fontWeight: 900, background: "linear-gradient(135deg,#06b6d4,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, marginTop: 8 }}>
              {num.includes("+") ? <><AnimatedCounter target={parseInt(num)} />{num.includes("0") ? "+" : "+"}</> : num}
            </div>
            <div style={{ color: textSecondary, fontSize: 13, marginTop: 4, fontWeight: 500 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
