import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import Carousel from "./Carousel";

export default function Projects() {
    const { t } = useLanguage();
    const projectImages = projects.map(p => p.image);

    const translations = {
        title: { es: "Proyectos & Innovación", en: "Projects & Innovation" },
        evolutionTitle: { es: "Evolución Tecnológica del Portfolio", en: "Portfolio Technological Evolution" },
        evolutionDesc1: { 
            es: "Este portfolio refleja mi dominio en el desarrollo Full-Stack y la integración de Inteligencia Artificial.",
            en: "This portfolio reflects my mastery in Full-Stack development and Artificial Intelligence integration."
        },
        evolutionDesc2: { 
            es: "Utilizo React 19 con Vite para interfaces ultrarrápidas, complementado con Node.js y NestJS en el backend para una lógica de negocio robusta y escalable.",
            en: "I use React 19 with Vite for ultra-fast interfaces, complemented by Node.js and NestJS on the backend for robust and scalable business logic."
        },
        evolutionDesc3: { 
            es: "He integrado Google Gemini AI para la automatización de procesamiento de datos complejos y WhatsApp Meta API para notificaciones en tiempo real.",
            en: "I've integrated Google Gemini AI for complex data processing automation and WhatsApp Meta API for real-time notifications."
        },
        newImplementations: { es: "Nuevas Implementaciones", en: "New Implementations" }
    };

    return (
        <section id="projects">
            <h3>{t(translations.title)}</h3>

            <Carousel images={projectImages} />

            <div className="tech-explanation">
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{t(translations.evolutionTitle)}</h4>
                <p>
                    {t(translations.evolutionDesc1)} 
                    {t(translations.evolutionDesc2)}
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>{t(translations.newImplementations)}:</strong> {t(translations.evolutionDesc3)}
                </p>
            </div>

            <div className="grid">
                {projects.map((p, i) => (
                    <div key={i} className="card" style={{ display: "flex", flexDirection: "column" }}>
                        <h4 style={{ marginBottom: "0.5rem", color: "var(--accent-primary)" }}>{t(p).title}</h4>
                        <div style={{ marginBottom: "1rem" }}>
                            {p.tech.split(',').map((t_item, idx) => (
                                <span key={idx} className="pill" style={{ fontSize: "0.7rem" }}>{t_item.trim()}</span>
                            ))}
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", flex: 1 }}>{t(p).description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

