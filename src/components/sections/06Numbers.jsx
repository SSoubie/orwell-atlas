import SectionShell from "../layout/SectionShell";

export default function NumbersSection({ activeId }) {
  return (
    <SectionShell
      id="survival-by-numbers"
      title="Survival by Numbers"
      intro="This section translates survival into measurable terms — comparing costs, ratios, and affordability across time."
      isActive={activeId === "survival-by-numbers"}
    >
      {/* CONTENT START */}

      <p>Insert charts: ratios, inflation, comparison.</p>

      {/* CONTENT END */}
    </SectionShell>
  );
}