import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";

export default function Contact({ contactLinks, cardBg, cardBorder, textPrimary, textSecondary, lightMode, formData, setFormData, formStatus, handleSubmit }) {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <SectionHeader title="Get In Touch" subtitle="Contact Me" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 40 }}>
        <FadeIn>
          <div>
            <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: 20, margin: "0 0 20px" }}>Let's work together</h3>
            <p style={{ color: textSecondary, lineHeight: 1.8, fontSize: 14, margin: "0 0 32px" }}>
              I'm open to internship opportunities, freelance projects, and full-time software engineering roles. Feel free to reach out — I usually respond within 24 hours.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactLinks.map(link => (
                <a key={link.label} href={link.href || "#"} target={(link.href || "").startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ display: "flex", gap: 16, alignItems: "center", padding: "14px 18px", borderRadius: 12, background: cardBg, border: `1px solid ${cardBorder}`, backdropFilter: "blur(12px)", textDecoration: "none", transition: "border-color 0.2s" }}>
                  <span style={{ fontSize: 22 }}>{link.icon}</span>
                  <div>
                    <div style={{ color: textSecondary, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{link.label}</div>
                    <div style={{ color: textPrimary, fontSize: 14, fontWeight: 500 }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <form onSubmit={handleSubmit} style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 20, padding: "32px", backdropFilter: "blur(12px)" }}>
            <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: 18, margin: "0 0 24px" }}>Send a Message</h3>
            {[
              ["Your Name", "name", "text"],
              ["Email Address", "email", "email"],
              ["Subject", "subject", "text"],
            ].map(([placeholder, field, type]) => (
              <div key={field} style={{ marginBottom: 16 }}>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={formData[field]}
                  required
                  onChange={e => setFormData(f => ({ ...f, [field]: e.target.value }))}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1px solid ${cardBorder}`, background: lightMode ? "#f8fafc" : "rgba(255,255,255,0.04)", color: textPrimary, fontSize: 14, outline: "none", boxSizing: "border-box" }}
                />
              </div>
            ))}
            <textarea
              placeholder="Your message..."
              value={formData.message}
              required
              rows={5}
              onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1px solid ${cardBorder}`, background: lightMode ? "#f8fafc" : "rgba(255,255,255,0.04)", color: textPrimary, fontSize: 14, outline: "none", resize: "vertical", marginBottom: 20, boxSizing: "border-box", fontFamily: "inherit" }}
            />
            <button type="submit" disabled={formStatus === "sending"} style={{ width: "100%", padding: "13px", borderRadius: 12, background: formStatus === "sent" ? "linear-gradient(135deg,#22c55e,#16a34a)" : "linear-gradient(135deg,#06b6d4,#818cf8)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: formStatus === "sending" ? "not-allowed" : "pointer", opacity: formStatus === "sending" ? 0.8 : 1 }}>
              {formStatus === "sending" ? (
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.35)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
                  Sending...
                </span>
              ) : formStatus === "sent" ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
