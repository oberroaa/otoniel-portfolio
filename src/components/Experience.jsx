export default function Experience() {
    return (
        <section id="experience">
            <h3>Experiencia Laboral</h3>
            <div className="card">
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <h4 style={{ fontSize: "1.25rem", color: "var(--accent-primary)" }}>Ingeniero de Software Independiente</h4>
                    <span style={{ color: "var(--text-muted)" }}>2012 – Presente</span>
                </div>
                <p style={{ marginBottom: "1.5rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                    Desarrollo de soluciones técnicas personalizadas enfocadas en la optimización de flujos de trabajo y la automatización inteligente.
                </p>
                <div className="grid">
                    <div>
                        <strong style={{ fontSize: "0.95rem" }}>Orquestación de Agentes IA</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Diseño de flujos de trabajo autónomos que integran LLMs (Gemini) con APIs industriales para la toma de decisiones basada en datos.
                        </p>
                    </div>
                    <div>
                        <strong style={{ fontSize: "0.95rem" }}>Sistemas de Misión Crítica</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Desarrollo de motores de validación lógica para procesos industriales y plataformas financieras (ICO/KYC) con alta disponibilidad.
                        </p>
                    </div>
                    <div>
                        <strong style={{ fontSize: "0.95rem" }}>Arquitecturas de Datos</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Modelado de bases de datos relacionales y no relacionales escalables, optimizadas para consultas complejas y auditoría en tiempo real.
                        </p>
                    </div>
                    <div>
                        <strong style={{ fontSize: "0.95rem" }}>Ingeniería Full-Cycle</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Liderazgo técnico en todo el ciclo de vida del software, desde la conceptualización hasta la automatización de despliegues (CI/CD).
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
