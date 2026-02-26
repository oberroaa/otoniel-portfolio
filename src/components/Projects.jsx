import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects">
            <h3>Proyectos Destacados</h3>
            <div className="grid">
                {projects.map((p, i) => (
                    <div key={i} className="card" style={{ display: "flex", flexDirection: "column" }}>
                        <h4 style={{ marginBottom: "0.5rem", color: "var(--accent-primary)" }}>{p.title}</h4>
                        <div style={{ marginBottom: "1rem" }}>
                            {p.tech.split(',').map((t, idx) => (
                                <span key={idx} className="pill" style={{ fontSize: "0.7rem" }}>{t.trim()}</span>
                            ))}
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", flex: 1 }}>{p.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
