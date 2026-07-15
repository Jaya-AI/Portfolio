import { useState, useEffect } from "react";
import ParticleBackground from "./ParticleBackground.jsx";

function TypingText({ texts }) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const text = texts[current];
    let timeout;
    if (!deleting && charIdx < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 80);
    } else if (!deleting && charIdx === text.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setCurrent(c => (c + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, current, texts]);

  return (
    <span style={{ background: "linear-gradient(135deg,#06b6d4,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", borderRight: "2px solid #06b6d4", paddingRight: 4 }}>
      {displayed}
    </span>
  );
}

export default function Hero({ lightMode, bg, textPrimary, textSecondary, scrollTo }) {
  return (
    <section data-section="Home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 64 }}>
      {!lightMode && <ParticleBackground />}

      <div style={{ textAlign: "center", padding: "40px 24px", maxWidth: 800, position: "relative", zIndex: 1 }}>
        <div style={{ margin: "0 auto 32px", position: "relative", width: 130, height: 130 }}>
          <div style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#818cf8,#ec4899)", animation: "spin 4s linear infinite" }} />
          <div style={{ position: "absolute", inset: -2, borderRadius: "50%", background: bg }} />
          <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(135deg,#1e3a5f,#312e81)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, fontWeight: 800, color: "#fff" }}>
            JG
          </div>
        </div>

        <div style={{ display: "inline-block", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 20, padding: "4px 16px", fontSize: 13, color: "#06b6d4", fontWeight: 600, marginBottom: 20 }}>
          👋 Available for opportunities
        </div>

        <h1 style={{ fontSize: "clamp(36px,6vw,68px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 12px", background: "linear-gradient(135deg,#e2e8f0 0%,#818cf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Jayesh Girase
        </h1>

        <div style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 700, margin: "0 0 20px", height: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <TypingText texts={["Software Developer", "AIML Enthusiast", "IoT Enthusiast", "Data Scientist", "Problem Solver"]} />
        </div>

        <p style={{ color: textSecondary, fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 36px" }}>
          Final-year B.Tech student in Artificial Intelligence and Machine Learning at R. C. Patel Institute of Technology, passionate about transforming ideas into real-world solutions through software development, AI, IoT, and modern technologies. Continuously learning and building innovative projects to create meaningful impact.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          <button onClick={() => scrollTo("Contact")} style={{ padding: "13px 32px", borderRadius: 12, background: "linear-gradient(135deg,#06b6d4,#818cf8)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", boxShadow: "0 4px 24px rgba(6,182,212,0.35)" }}>
            Hire Me →
          </button>
          <a href="/Jayesh_Girase_Resume.pdf" download="Jayesh_Girase_Resume.pdf" style={{ padding: "13px 32px", borderRadius: 12, background: "transparent", border: "1px solid rgba(6,182,212,0.5)", color: "#06b6d4", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            ⬇ Download Resume
          </a>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          {[
            ["GitHub", "https://github.com/Jaya-AI", "🐙"],
            ["LinkedIn", "https://www.linkedin.com/in/jayesh-girase-5940ab299", "💼"],
            ["Email", "mailto:jayeshgirase29@gmail.com", "✉"],
          ].map(([label, href, icon]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: textSecondary, fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
              {icon} {label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5 }}>
          <span style={{ fontSize: 12, color: textSecondary, letterSpacing: 2, textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg,#06b6d4,transparent)", animation: "pulse 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
