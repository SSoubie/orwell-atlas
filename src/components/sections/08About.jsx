import { useState } from "react";
import SectionShell from "../layout/SectionShell";
import { THEME } from "../../theme";

const rows = [
  {
    label: "Data Story",
    content:
      "A literary-spatial exploration of survival, hardship, and inequality in London through Orwell’s lens.",
  },
  {
    label: "Background",
    content:
      "This project takes Down and Out in Paris and London as its narrative anchor and extends it into a contemporary spatial reading of the city.",
  },
  {
    label: "Purpose",
    content:
      "To examine how the cost of everyday survival reveals the shifting geography of inequality in London, then and now.",
  },
  {
    label: "Dataset",
    content: [
      "Text source — Down and Out in Paris and London",
      "Historical layer — Booth Poverty Map",
      "Present-day layer — London borough cost indicators",
      "Supporting data — income, rent, house price, deprivation",
    ],
  },
  {
    label: "Methodology",
    content: [
      "Narrative interpretation",
      "Spatial mapping",
      "Comparative visualisation",
      "Editorial storytelling",
    ],
  },
  {
    label: "Design Direction",
    content: [
      "Magazine-inspired layout system",
      "Quiet editorial palette",
      "Typography-led hierarchy",
      "Then / Now visual contrast",
    ],
  },
  {
    label: "Team Member",
    content: ["Yifei", "Santi", "Puk"],
  },
  {
    label: "Note",
    content:
      "This page is currently a structural draft for organising sources, methods, and project contributions before the final submission version.",
  },
];

export default function AboutSection({ activeId }) {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <SectionShell
      id="footer-about"
      title=""
      intro=""
      isActive={activeId === "footer-about"}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          minHeight: "78vh",
          background: THEME.colors.bg,
          borderTop: `1px solid ${THEME.colors.line}`,
          borderBottom: `1px solid ${THEME.colors.line}`,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            borderBottom: `1px solid ${THEME.colors.line}`,
            minHeight: "88px",
          }}
        >
          <div
            style={{
              padding: "24px 28px",
              borderRight: `1px solid ${THEME.colors.line}`,
              fontFamily: THEME.fonts.serif,
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              lineHeight: 1,
              color: THEME.colors.ink,
            }}
          >
            About
          </div>

          <div
            style={{
              padding: "28px",
              display: "flex",
              alignItems: "center",
              fontFamily: THEME.fonts.sans,
              fontSize: "0.92rem",
              color: THEME.colors.muted,
            }}
          >
            Project structure / sources / methods / contributors
          </div>
        </div>

        {/* Folder stack */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            minHeight: "620px",
          }}
        >
          {/* Topic list */}
          <div
            style={{
              borderRight: `1px solid ${THEME.colors.line}`,
              background: "#f6f3ee",
            }}
          >
            {rows.map((row, index) => {
              const isOpen = openIndex === index;

              return (
                <button
                  key={row.label}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  style={{
                    width: "100%",
                    minHeight: "58px",
                    padding: "18px 24px",
                    border: "none",
                    borderBottom: `1px solid ${THEME.colors.line}`,
                    background: isOpen ? "#fffaf0" : "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                    fontFamily: THEME.fonts.serif,
                    fontSize: isOpen ? "1.18rem" : "1rem",
                    color: THEME.colors.ink,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.18s ease",
                  }}
                >
                  <span>{row.label}</span>
                  <span
                    style={{
                      fontFamily: THEME.fonts.sans,
                      fontSize: "0.8rem",
                      color: THEME.colors.muted,
                    }}
                  >
                    {isOpen ? "open" : "view"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active folder content */}
          <div
            style={{
              position: "relative",
              padding: "0",
              overflow: "hidden",
            }}
          >
            {rows.map((row, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={row.label}
                  style={{
                    position: isOpen ? "relative" : "absolute",
                    top: isOpen ? "auto" : `${index * 42}px`,
                    left: isOpen ? 0 : "28px",
                    right: isOpen ? 0 : "28px",
                    minHeight: isOpen ? "620px" : "42px",
                    padding: isOpen ? "64px 72px" : "10px 20px",
                    borderBottom: `1px solid ${THEME.colors.line}`,
                    background: isOpen ? "#f6f3ee" : "#ece7dc",
                    transform: isOpen ? "none" : "translateY(0)",
                    zIndex: isOpen ? 10 : index,
                    opacity: isOpen ? 1 : 0.75,
                    transition: "all 0.25s ease",
                    pointerEvents: isOpen ? "auto" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: THEME.fonts.sans,
                      fontSize: "0.82rem",
                      color: THEME.colors.muted,
                      marginBottom: isOpen ? "16px" : 0,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")} / {rows.length}
                  </div>

                  <h2
                    style={{
                      margin: 0,
                      marginBottom: isOpen ? "28px" : 0,
                      fontFamily: THEME.fonts.serif,
                      fontSize: isOpen
                        ? "clamp(2.8rem, 6vw, 6rem)"
                        : "1rem",
                      lineHeight: 1,
                      color: THEME.colors.ink,
                    }}
                  >
                    {row.label}
                  </h2>

                  {isOpen && (
                    <div
                      style={{
                        maxWidth: "760px",
                        fontFamily: THEME.fonts.serif,
                        fontSize: "clamp(1.1rem, 1.6vw, 1.45rem)",
                        lineHeight: 1.65,
                        color: THEME.colors.muted,
                      }}
                    >
                      {Array.isArray(row.content) ? (
                        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                          {row.content.map((item) => (
                            <li key={item} style={{ marginBottom: "0.55rem" }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ margin: 0 }}>{row.content}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}