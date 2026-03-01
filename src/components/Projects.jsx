import { projects } from "../data/projects";
import Carousel from "./Carousel";

export default function Projects() {
    const projectImages = projects.map(p => p.image);

    return (
        <section id="projects">
            <h3>Proyectos & Innovación</h3>

            <Carousel images={projectImages} />

            <div className="tech-explanation">
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Evolución Tecnológica del Portfolio</h4>
                <p>
                    Este portfolio refleja mi dominio en el desarrollo <strong>Full-Stack</strong> y la integración de <strong>Inteligencia Artificial</strong>.
                    Utilizo <strong>React 19</strong> con <strong>Vite</strong> para interfaces ultrarrápidas, complementado con <strong>Node.js</strong> y <strong>NestJS</strong> en el backend para una lógica de negocio robusta y escalable.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Nuevas Implementaciones:</strong> He integrado <strong>Google Gemini AI</strong> para la automatización de procesamiento de datos complejos y <strong>WhatsApp Meta API</strong> para notificaciones en tiempo real, llevando mis proyectos más allá de la web tradicional hacia un ecosistema de agentes inteligentes.
                </p>
            </div>

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
