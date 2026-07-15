export default function Navbar({
  sections,
  activeSection,
  textSecondary,
  lightMode,
  cardBorder,
  onThemeToggle,
  menuOpen,
  setMenuOpen,
  scrollTo,
}) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(20px)", background: lightMode ? "rgba(248,250,252,0.85)" : "rgba(2,6,23,0.85)", borderBottom: `1px solid ${cardBorder}` }}>
      <div style={{ fontWeight: 800, fontSize: 20, background: "linear-gradient(135deg,#06b6d4,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", cursor: "pointer" }} onClick={() => scrollTo("Home")}>
        JG
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {sections.slice(0, 8).map(s => (
          <button key={s} onClick={() => scrollTo(s)} style={{ padding: "6px 10px", borderRadius: 8, border: "none", background: activeSection === s ? "rgba(6,182,212,0.15)" : "transparent", color: activeSection === s ? "#06b6d4" : textSecondary, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", display: window.innerWidth < 768 ? "none" : "block" }}>
            {s}
          </button>
        ))}
        <button onClick={onThemeToggle} style={{ padding: "7px 10px", borderRadius: 8, border: `1px solid ${cardBorder}`, background: "transparent", color: textSecondary, cursor: "pointer", fontSize: 16, marginLeft: 8 }}>
          {lightMode ? "🌙" : "☀️"}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ padding: "7px 10px", borderRadius: 8, border: `1px solid ${cardBorder}`, background: "transparent", color: textSecondary, cursor: "pointer", marginLeft: 4, fontSize: 18 }}>
          ☰
        </button>
      </div>
    </nav>
  );
}
