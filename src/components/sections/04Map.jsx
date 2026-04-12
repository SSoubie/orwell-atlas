import SectionShell from "../layout/SectionShell";

export default function MapSection({ activeId }) {
  return (
    <SectionShell
      id="mapping-inequality"
      title="Mapping Inequality"
      intro="This section maps Orwell’s movements and locations, revealing how spatial inequality shaped everyday experience."
      isActive={activeId === "mapping-inequality"}
    >
      {/* CONTENT START */}

      <p>Insert map (Orwell footsteps, locations, routes).</p>

      {/* CONTENT END */}
    </SectionShell>
  );
}