import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import Navbar from "./src/components/Navbar.jsx";
import Hero from "./src/components/Hero.jsx";
import About from "./src/components/About.jsx";
import Skills from "./src/components/Skills.jsx";
import Projects from "./src/components/Projects.jsx";
import Education from "./src/components/Education.jsx";
import Experience from "./src/components/Experience.jsx";
import Achievements from "./src/components/Achievements.jsx";
import Activities from "./src/components/Activities.jsx";
import Certifications from "./src/components/Certifications.jsx";
import ResumeSection from "./src/components/ResumeSection.jsx";
import Contact from "./src/components/Contact.jsx";
import AdminDashboard from "./src/components/AdminDashboard.jsx";
import {
  SKILLS,
  PROJECTS,
  ACHIEVEMENTS,
  ACTIVITIES,
  CERTIFICATIONS,
  TIMELINE_EXP,
  EDUCATION,
  CONTACT_LINKS,
} from "./src/data/portfolioData.js";
import { handleContactSubmit, validateContactForm } from "./src/utils/contactHandler.js";
import useScroll from "./src/hooks/useScroll.js";
import useTheme from "./src/hooks/useTheme.js";

const SECTIONS = ["Home", "About", "Education", "Skills", "Projects", "Experience", "Achievements", "Activities", "Certifications", "Resume", "Contact"];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState("All");
  const [projectSearch, setProjectSearch] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [showAdmin, setShowAdmin] = useState(false);

  const { scrollY, scrollProgress, showTopButton } = useScroll();
  const { lightMode, colors, toggleTheme } = useTheme();

  const sectionRefs = useRef({});
  const { bg, textPrimary, textSecondary, cardBg, cardBorder } = colors;

  const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL || "your-email@gmail.com";

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); });
    }, { threshold: 0.3 });
    Object.values(sectionRefs.current).forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === "sending") return;

    const { isValid, errors } = validateContactForm(formData);
    if (!isValid) {
      toast.error(errors[0]);
      return;
    }

    setFormStatus("sending");
    try {
      const result = await handleContactSubmit(formData, RECIPIENT_EMAIL);
      setFormStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });

      if (result?.warning) {
        toast("⚠️ Your message was saved successfully, but the email notification could not be sent.", { icon: "⚠️" });
      } else {
        toast.success("Thanks! Your message has been sent successfully.");
      }
      setTimeout(() => setFormStatus(null), 4000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setFormStatus("error");
      toast.error(error?.message || "We could not send your message right now. Please try again.");
      setTimeout(() => setFormStatus(null), 4000);
    }
  };

  useEffect(() => {
    let keyPressCount = 0;
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'a') {
        keyPressCount++;
        if (keyPressCount === 3) {
          setShowAdmin(true);
          keyPressCount = 0;
        }
      } else {
        keyPressCount = 0;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const scrollTo = (section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: bg, color: textPrimary, fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", minHeight: "100vh", position: "relative" }}>
      <div style={{ position: "fixed", top: 0, left: 0, height: 3, width: `${scrollProgress}%`, background: "linear-gradient(90deg,#06b6d4,#818cf8,#ec4899)", zIndex: 9999, transition: "width 0.1s" }} />

      <Navbar
        sections={SECTIONS}
        activeSection={activeSection}
        textSecondary={textSecondary}
        lightMode={lightMode}
        cardBorder={cardBorder}
        onThemeToggle={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      {menuOpen && (
        <div style={{ position: "fixed", top: 64, left: 0, right: 0, zIndex: 99, backdropFilter: "blur(20px)", background: lightMode ? "rgba(248,250,252,0.97)" : "rgba(2,6,23,0.97)", borderBottom: `1px solid ${cardBorder}`, padding: "12px 0 16px" }}>
          {SECTIONS.map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{ display: "block", width: "100%", padding: "10px 28px", border: "none", background: "transparent", color: activeSection === s ? "#06b6d4" : textPrimary, fontSize: 15, fontWeight: 600, cursor: "pointer", textAlign: "left" }}>
              {s}
            </button>
          ))}
        </div>
      )}

      <section data-section="Home" ref={r => sectionRefs.current.Home = r} style={{ padding: "0 24px" }}>
        <Hero lightMode={lightMode} bg={bg} textPrimary={textPrimary} textSecondary={textSecondary} scrollTo={scrollTo} />
      </section>

      <section data-section="About" ref={r => sectionRefs.current.About = r} style={{ padding: "20px 24px" }}>
        <About cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} />
      </section>

      <section data-section="Education" ref={r => sectionRefs.current.Education = r} style={{ padding: "20px 24px" }}>
        <Education education={EDUCATION} cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} lightMode={lightMode} />
      </section>

      <section data-section="Skills" ref={r => sectionRefs.current.Skills = r} style={{ padding: "20px 24px" }}>
        <Skills skills={SKILLS} cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} />
      </section>

      <section data-section="Projects" ref={r => sectionRefs.current.Projects = r} style={{ padding: "10px 24px" }}>
        <Projects
          projects={PROJECTS}
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          projectSearch={projectSearch}
          setProjectSearch={setProjectSearch}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          cardBg={cardBg}
          cardBorder={cardBorder}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
        />
      </section>

      <section data-section="Experience" ref={r => sectionRefs.current.Experience = r} style={{ padding: "20px 24px" }}>
        <Experience experiences={TIMELINE_EXP} cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} />
      </section>

      <section data-section="Achievements" ref={r => sectionRefs.current.Achievements = r} style={{ padding: "20px 24px" }}>
        <Achievements achievements={ACHIEVEMENTS} cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} />
      </section>

      <section data-section="Activities" ref={r => sectionRefs.current.Activities = r} style={{ padding: "20px 24px" }}>
        <Activities activities={ACTIVITIES} cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} />
      </section>

      <section data-section="Certifications" ref={r => sectionRefs.current.Certifications = r} style={{ padding: "20px 24px" }}>
        <Certifications certifications={CERTIFICATIONS} cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} />
      </section>

      <section data-section="Resume" ref={r => sectionRefs.current.Resume = r} style={{ padding: "20px 24px" }}>
        <ResumeSection cardBg={cardBg} cardBorder={cardBorder} textPrimary={textPrimary} textSecondary={textSecondary} />
      </section>

      <section data-section="Contact" ref={r => sectionRefs.current.Contact = r} style={{ padding: "20px 24px" }}>
        <Contact
          contactLinks={CONTACT_LINKS}
          cardBg={cardBg}
          cardBorder={cardBorder}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          lightMode={lightMode}
          formData={formData}
          setFormData={setFormData}
          formStatus={formStatus}
          handleSubmit={handleSubmit}
        />
      </section>

      <footer style={{ borderTop: `1px solid ${cardBorder}`, padding: "32px 24px", textAlign: "center" }}>
        <div style={{ fontWeight: 800, fontSize: 24, background: "linear-gradient(135deg,#06b6d4,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 12 }}>Jayesh Girase</div>
        <p style={{ color: textSecondary, fontSize: 13, margin: "0 0 20px" }}>Software Developer · IoT Enthusiast · Problem Solver</p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 24, flexWrap: "wrap" }}>
          {SECTIONS.slice(0, 6).map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{ background: "none", border: "none", color: textSecondary, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>{s}</button>
          ))}
        </div>
        <p style={{ color: textSecondary, fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} Jayesh Girase. Built with React, love, and lots of ☕
        </p>
      </footer>

      {showTopButton && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 28, right: 28, width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#818cf8)", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", zIndex: 200, boxShadow: "0 4px 20px rgba(6,182,212,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          ↑
        </button>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blob1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.08); } }
        @keyframes blob2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-30px,40px) scale(1.05); } }
        @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.4); border-radius: 3px; }
      `}</style>
    </div>
  );
}
