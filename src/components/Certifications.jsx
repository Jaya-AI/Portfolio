import SectionHeader from "./SectionHeader.jsx";
import FadeIn from "./FadeIn.jsx";

export default function Certifications({
  certifications,
  cardBg,
  cardBorder,
  textPrimary,
  textSecondary,
}) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader
        title="Certifications"
        subtitle="Verified Credentials"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: 20,
        }}
      >
        {certifications.map((cert, i) => (
          <FadeIn key={`${cert.title}-${cert.issuer}`} delay={i * 80}>
            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 16,
                padding: "0 0 20px",
                overflow: "hidden",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  height: 80,
                  background: `linear-gradient(135deg,${
                    cert.color.includes("orange")
                      ? "#f97316,#eab308"
                      : cert.color.includes("blue")
                      ? "#3b82f6,#6366f1"
                      : cert.color.includes("purple")
                      ? "#a855f7,#ec4899"
                      : cert.color.includes("cyan")
                      ? "#06b6d4,#3b82f6"
                      : cert.color.includes("teal")
                      ? "#14b8a6,#22c55e"
                      : "#22c55e,#10b981"
                  })`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                }}
              >
                📜
              </div>

              <div style={{ padding: "16px 20px 0" }}>
                <h4
                  style={{
                    color: textPrimary,
                    fontWeight: 700,
                    fontSize: 15,
                    margin: "0 0 4px",
                  }}
                >
                  {cert.title}
                </h4>

                <p
                  style={{
                    color: "#818cf8",
                    fontSize: 13,
                    fontWeight: 600,
                    margin: "0 0 8px",
                  }}
                >
                  {cert.issuer}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 12,
                  }}
                >
                  <span
                    style={{
                      color: textSecondary,
                      fontSize: 12,
                    }}
                  >
                    Issued {cert.year}
                  </span>

                  <div style={{ display: "flex", gap: 8 }}>
                    {/* View Button */}
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "4px 12px",
                        borderRadius: 8,
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.25)",
                        color: "#3b82f6",
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      👁 View
                    </a>

                    {/* Download Button */}
                    <a
                      href={cert.file}
                      download={`${cert.title}.pdf`}
                      style={{
                        padding: "4px 12px",
                        borderRadius: 8,
                        background: "rgba(6,182,212,0.1)",
                        border: "1px solid rgba(6,182,212,0.25)",
                        color: "#06b6d4",
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      ⬇ Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}