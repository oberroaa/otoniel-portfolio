export default function Header() {
    return (
        <section className="hero">
            <div style={{ marginBottom: "2rem" }}>
                <span className="pill">Disponible para nuevos proyectos</span>
            </div>
            <h1>OTONIEL BERROA ARIAS</h1>
            <h2>Ingeniero de Software – Backend, Automatización & Sistemas Basados en Reglas</h2>

            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "700px", margin: "1.5rem 0 2rem 0" }}>
                Ingeniero Informático con más de 12 años de experiencia. Especializado en el diseño de arquitecturas robustas,
                automatización de procesos industriales y desarrollo de agentes autónomos.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                <a href="mailto:oberroaa@gmail.com" className="card" style={{ padding: "0.75rem 1.5rem", marginBottom: 0 }}>
                    📧 oberroaa@gmail.com
                </a>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <a href="https://linkedin.com/in/otoniel-berroa" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8 }}>LinkedIn</a>
                    <a href="https://github.com/oberroaa" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8 }}>GitHub</a>
                    <span style={{ color: "var(--text-muted)" }}>📍 Miami, FL</span>
                </div>
            </div>

            <div style={{ marginTop: "4rem" }} className="card">
                <h3>Perfil Profesional</h3>
                <p>
                    Mi enfoque principal es la lógica de negocio robusta, la estabilidad del sistema y la eficiencia operativa.
                    Soy experto en transformar datos no estructurados en información operativa mediante motores de reglas complejos.
                </p>
                <div className="grid" style={{ marginTop: "1.5rem" }}>
                    <div>
                        <strong style={{ color: "var(--accent-primary)" }}>Especialización</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Agentes autónomos, Big Data y Cloud Orchestration.</p>
                    </div>
                    <div>
                        <strong style={{ color: "var(--accent-primary)" }}>Backend</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Node.js (ESM), PHP (Symfony/Laravel), Escalabilidad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
