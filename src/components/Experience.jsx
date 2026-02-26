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
                        <strong style={{ fontSize: "0.95rem" }}>Arquitecturas Serverless</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Implementación de soluciones integradas en la nube utilizando Vercel y GitHub Actions para CI/CD continuo.
                        </p>
                    </div>
                    <div>
                        <strong style={{ fontSize: "0.95rem" }}>Motores de Reglas</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Sistemas lógicos para transformación de datos no estructurados en información operativa crítica.
                        </p>
                    </div>
                    <div>
                        <strong style={{ fontSize: "0.95rem" }}>Integración de APIs</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Experticia en ecosistemas de Google (OAuth2), Meta (WhatsApp Cloud API) y modelos avanzados de IA.
                        </p>
                    </div>
                    <div>
                        <strong style={{ fontSize: "0.95rem" }}>Full-Cycle Development</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            Gestión técnica de principio a fin, desde el análisis de requerimientos hasta el despliegue final.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
