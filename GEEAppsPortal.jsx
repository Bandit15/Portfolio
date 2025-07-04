import React from "react";

const apps = [
  {
    name: "Laos Forest Loss Monitoring",
    url: "https://ee-banditmienmany.projects.earthengine.app/view/laos-forest-loss-monitoring",
    description:
      "Monitor forest loss trends and hotspots in Laos using satellite data.",
  },
  {
    name: "Built-up and Population Growth",
    url: "https://ee-banditmienmany.projects.earthengine.app/view/builtup-and-population-growth",
    description:
      "Visualize built-up areas and population growth over time in Laos.",
  },
  {
    name: "FIRMS Fire Monitoring",
    url: "https://ee-banditmienmany.projects.earthengine.app/view/firms-fire-monitoring",
    description:
      "Track active fires in Laos using FIRMS satellite data.",
  },
  {
    name: "Laos Climate Monitoring 2024",
    url: "https://ee-banditmienmany.projects.earthengine.app/view/laos-climate-monitoring-2024",
    description:
      "Explore climate data and trends for Laos in 2024.",
  },
  {
    name: "Severe Flood in Laos",
    url: "https://ee-banditmienmany.projects.earthengine.app/view/severe-flood-in-laos",
    description:
      "Monitor severe flooding events in Laos using remote sensing data.",
  },
];

export default function GEEAppsPortal() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#f4f7fa", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", padding: "2rem 0", background: "#1565c0", color: "#fff" }}>
        <h1>Laos Environmental Data Portal</h1>
        <p>Access Google Earth Engine Apps for Environmental Monitoring in Laos</p>
      </header>
      <main style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", padding: "2rem" }}>
        {apps.map((app) => (
          <div
            key={app.url}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 12px #0002",
              width: "310px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1.5rem",
            }}
          >
            {/* You can add a preview image here if available */}
            {/* <img src="..." alt={app.name} style={{width: '100%', borderRadius: '8px'}} /> */}
            <h2 style={{ color: "#1565c0" }}>{app.name}</h2>
            <p style={{ minHeight: "60px" }}>{app.description}</p>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "auto",
                background: "#43a047",
                color: "#fff",
                padding: "0.5rem 1.5rem",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background 0.2s",
              }}
              onMouseOver={e => e.target.style.background = "#2e7031"}
              onMouseOut={e => e.target.style.background = "#43a047"}
            >
              Open App
            </a>
          </div>
        ))}
      </main>
      <footer style={{ textAlign: "center", padding: "1rem", color: "#888" }}>
        &copy; {new Date().getFullYear()} Laos Environmental Data Portal
      </footer>
    </div>
  );
}