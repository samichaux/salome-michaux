const BeforeAfter = () => {
  const leftRows = [
    { letter: "A", text: "suivi_candidats_v3_FINAL.xlsx", strikethrough: false },
    { letter: "B", text: "relance faite ? demander à Léa", strikethrough: true },
    { letter: "C", text: "copier depuis le mail du 14/03", strikethrough: false },
    { letter: "D", text: "doublon — voir onglet 2", strikethrough: true },
    { letter: "E", text: "… ressaisir dans le CRM", strikethrough: false },
  ];

  const rightRows = [
    { label: "Candidature — M. Dubois", status: "Relancé", mint: true },
    { label: "Candidature — S. Nkemi", status: "Entretien", mint: false },
    { label: "Client — Atelier Vandam", status: "Onboardé", mint: true },
    { label: "Candidature — L. Braem", status: "À qualifier", mint: false },
    { label: "Client — Groupe Selys", status: "Actif", mint: true },
  ];

  return (
    <div
      className="before-after"
      style={{
        border: "1px solid #e8f1f8",
        backgroundColor: "#fff",
        marginTop: "clamp(48px,6vw,76px)",
      }}
    >
      <style>{`
        .before-after {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
        }
        @media (max-width: 820px) {
          .before-after {
            grid-template-columns: 1fr;
          }
          .before-after-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>

      <div style={{ padding: "22px" }}>
        <div className="type-label" style={{ marginBottom: "16px" }}>
          Avant
        </div>
        <div
          className="font-mono-ui"
          style={{ fontSize: "12px", color: "#8494a6" }}
        >
          {leftRows.map((row, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < leftRows.length - 1 ? "10px" : 0,
              }}
            >
              <span style={{ color: "#a8c5db" }}>{row.letter} </span>
              <span
                style={
                  row.strikethrough
                    ? { textDecoration: "line-through", opacity: 0.55 }
                    : {}
                }
              >
                {row.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="before-after-arrow"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4ecdc4",
          padding: "8px",
          fontSize: "20px",
        }}
      >
        →
      </div>

      <div style={{ padding: "22px" }}>
        <div className="type-label" style={{ marginBottom: "16px" }}>
          Après
        </div>
        <div>
          {rightRows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                padding: "10px 0",
                borderBottom:
                  i < rightRows.length - 1 ? "1px solid #e8f1f8" : undefined,
              }}
            >
              <span style={{ fontSize: "13.5px", color: "#1a2632" }}>
                {row.label}
              </span>
              <span
                className="font-mono-ui"
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  borderRadius: "3px",
                  padding: "3px 6px",
                  backgroundColor: row.mint
                    ? "rgba(78,205,196,.18)"
                    : "#e8f1f8",
                  color: row.mint ? "#1f7a73" : "#2c4a6e",
                  flexShrink: 0,
                }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
