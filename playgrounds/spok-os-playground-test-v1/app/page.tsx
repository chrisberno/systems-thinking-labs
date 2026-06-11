const RINGS = [
  { name: "AGENT", outcome: "Determines your outcomes" },
  { name: "BRAIN", outcome: "Injects recall & context" },
  { name: "CAPABILITIES", outcome: "Gets the job done" },
  { name: "CONNECTORS", outcome: "Connects you to the world" },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "3rem 1.5rem", textAlign: "center" }}>
      <h1 style={{ letterSpacing: 3, fontSize: 40, marginBottom: 4 }}>THE SPOK OS</h1>
      <p style={{ color: "#858e93", marginTop: 0 }}>An AI built like a mind.</p>

      {/* The real onion — copied from the systems-thinking-labs SPOK OS model (spok-ai-os-v2.svg). */}
      <img
        src="/onion.svg"
        alt="The SPOK OS — four-ring onion: Agent, Brain, Capabilities, Connectors"
        style={{ width: "100%", maxWidth: 900, height: "auto", margin: "1.5rem auto", display: "block" }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {RINGS.map((r) => (
          <div
            key={r.name}
            style={{
              flex: "1 1 200px",
              minWidth: 180,
              border: "1px solid #3a4250",
              borderRadius: 10,
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, letterSpacing: 1 }}>{r.name}</div>
            <div style={{ color: "#858e93", fontSize: 14, marginTop: 4 }}>{r.outcome}</div>
          </div>
        ))}
      </div>

      <p style={{ color: "#7fdcff", fontWeight: 700, marginTop: "2rem" }}>Own the soul. Ship the OS.</p>
      <p style={{ color: "#5a6068", fontSize: 12, marginTop: "1rem", lineHeight: 1.6 }}>
        A SPOK OS playground test. The onion above is the real model, rendered straight from the
        <code> systems-thinking-labs</code> diagram. Built per <code>GOAL.md</code>.
      </p>
    </main>
  );
}
