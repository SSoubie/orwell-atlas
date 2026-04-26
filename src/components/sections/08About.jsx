import { useState } from "react";
import SectionShell from "../layout/SectionShell";
import { THEME } from "../../theme";

const rows = [
  {
    label: "Data Story",
    content:
      "London: An Atlas of Survival is a literary-spatial data story that traces how poverty, shelter, and everyday costs shape the experience of surviving in London. Using Orwell as a narrative lens, the project connects historical evidence with present-day affordability pressure.",
  },
  {
    label: "Background",
    content:
      "George Orwell’s Down and Out in Paris and London documents precarious work, cheap lodging, hunger, and the fragile systems of support available to people living on the margins.",
  },
  {
    label: "Purpose",
    content:
      "To examine how the cost of everyday survival reveals the shifting geography of inequality in London, then and now.",
  },
  {
    label: "Dataset",
    content: [
      "Text — Down and Out in Paris and London",
      "Historical — Booth Poverty Map + workhouses",
      "Present — income, rent, house price, deprivation",
    ],
  },
  {
    label: "Methodology",
    content: [
      "Narrative reading",
      "Spatial mapping",
      "Comparative visualisation",
    ],
  },
  {
    label: "Design Direction",
    content: [
      "Editorial layout",
      "Muted palette",
      "Typography hierarchy",
      "Then / Now contrast",
    ],
  },
  {
    label: "Team Member",
    type: "team",
    content: [
      {
        name: "Yifei",
        image: "assets/team/yifei.jpeg",
        linkedin: "https://www.linkedin.com/in/yifei-sun-b8895a404",
        github: "https://github.com/Yan02y",
        emails: ["yan2220608529@outlook.com"],
      },
      {
        name: "Santiago",
        image: "assets/team/santiago.jpeg",
        linkedin: "https://www.linkedin.com/in/ssoubiee",
        github: "https://github.com/SSoubie",
        emails: ["santiago.soubie.25@ucl.ac.uk"],
      },
      {
        name: "Piyapa Sotthiwat",
        image: "assets/team/piyapa.jpeg",
        linkedin: "https://www.linkedin.com/in/piyapas",
        github: "https://github.com/piyapa-uss",
        emails: ["p.sotthiwat@gmail.com", "piyapa.sotthiwat.25@ucl.ac.uk"],
      },
    ],
  },
  {
    label: "Note",
    content:
      "The historical and present-day datasets are not directly equivalent in scale, method, or social context. The comparison is interpretive rather than causal, revealing spatial patterns of survival.",
  },
];

export default function AboutSection({ activeId }) {
  const [openIndex, setOpenIndex] = useState(2);
  const base = import.meta.env.BASE_URL;
  const current = rows[openIndex];

  const linkStyle = {
    color: THEME.colors.muted,
    fontFamily: THEME.fonts.sans,
    fontSize: "0.78rem",
    lineHeight: 1.45,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  };

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
          maxWidth: "1180px",
          margin: "0 auto",
          background: THEME.colors.bg,
          minHeight: "76vh",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            minHeight: "76vh",
          }}
        >
          {/* LEFT SIDE */}
          <aside
            style={{
              borderRight: `1px solid ${THEME.colors.line}`,
            }}
          >
            <div
              style={{
                height: "146px",
                padding: "0 28px",
                display: "flex",
                alignItems: "center",
                fontFamily: THEME.fonts.serif,
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                lineHeight: 1,
                color: THEME.colors.ink,
                borderBottom: `1px solid ${THEME.colors.line}`,
              }}
            >
              About
            </div>

            <nav>
              {rows.map((row, index) => {
                const isOpen = openIndex === index;

                return (
                  <button
                    key={row.label}
                    type="button"
                    onMouseEnter={() => setOpenIndex(index)}
                    onFocus={() => setOpenIndex(index)}
                    onClick={() => setOpenIndex(index)}
                    style={{
                      width: "100%",
                      minHeight: "58px",
                      padding: "16px 28px",
                      border: "none",
                      borderBottom: `1px solid ${THEME.colors.line}`,
                      background: isOpen ? "#fffaf0" : "transparent",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: THEME.fonts.serif,
                      fontSize: isOpen ? "1.1rem" : "1rem",
                      color: THEME.colors.ink,
                      transition: "all 0.18s ease",
                    }}
                  >
                    {row.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* RIGHT CONTENT */}
            <main
              style={{
                padding: "140px 72px 64px", // Positioning the content to align with the heading and leave space for the divider
                minHeight: "76vh",
                boxSizing: "border-box",
              }}
            >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "280px", 
                right: "0",
                height: "1px",
                background: THEME.colors.line,
                zIndex: 5,
              }}
            />
              <div
                style={{
                  paddingTop: "0px",
                  paddingTop: "24px",
                  paddingLeft: "72px",
                  paddingRight: "72px",
                  minHeight: "76vh",
                  boxSizing: "border-box",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    marginBottom: "36px",
                    fontFamily: THEME.fonts.serif,
                    fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
                    lineHeight: 0.95,
                    color: THEME.colors.ink,
                    fontWeight: 600,
                  }}
                >
                  {current.label}
                </h2>

                {current.type === "team" ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "44px",
                      maxWidth: "900px",
                    }}
                  >
                    {current.content.map((m) => (
                      <article key={m.name}>
                        <img
                          src={`${base}${m.image}`}
                          alt={m.name}
                          style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "20px",
                            border: `1px solid ${THEME.colors.line}`,
                          }}
                        />

                        <h3
                          style={{
                            margin: "0 0 14px",
                            fontFamily: THEME.fonts.serif,
                            fontSize: "1.55rem",
                            lineHeight: 1,
                            color: THEME.colors.ink,
                            fontWeight: 600,
                          }}
                        >
                          {m.name}
                        </h3>

                        <div
                          style={{
                            display: "grid",
                            gap: "6px",
                            fontFamily: THEME.fonts.sans,
                          }}
                        >
                          <a href={m.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>
                            LinkedIn
                          </a>
                          <a href={m.github} target="_blank" rel="noreferrer" style={linkStyle}>
                            GitHub
                          </a>
                          {m.emails.map((e) => (
                            <a key={e} href={`mailto:${e}`} style={linkStyle}>
                              {e}
                            </a>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : Array.isArray(current.content) ? (
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      maxWidth: "760px",
                      fontFamily: THEME.fonts.serif,
                      fontSize: "clamp(1.08rem, 1.35vw, 1.3rem)",
                      lineHeight: 1.6,
                      color: THEME.colors.muted,
                    }}
                  >
                    {current.content.map((item) => (
                      <li key={item} style={{ marginBottom: "0.65rem" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    style={{
                      margin: 0,
                      maxWidth: "760px",
                      fontFamily: THEME.fonts.serif,
                      fontSize: "clamp(1.08rem, 1.35vw, 1.3rem)",
                      lineHeight: 1.6,
                      color: THEME.colors.muted,
                    }}
                  >
                    {current.content}
                  </p>
                )}
              </div>
            </main>
        </div>
      </div>
    </SectionShell>
  );
}