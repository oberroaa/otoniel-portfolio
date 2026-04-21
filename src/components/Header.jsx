import { useLanguage } from "../context/LanguageContext";

export default function Header() {
    const { language, toggleLanguage, t } = useLanguage();

    const translations = {
        badge: {
            es: "Disponible para nuevos proyectos",
            en: "Available for new projects"
        },
        title: {
            es: "Ingeniero de Software – Backend, Automatización & Sistemas IA",
            en: "Software Engineer – Backend, Automation & AI Systems"
        },
        description: {
            es: "Ingeniero Informático con más de 12 años de experiencia. Especializado en el diseño de arquitecturas robustas, automatización de procesos industriales y desarrollo de agentes autónomos.",
            en: "Computer Engineer with over 12 years of experience. Specialized in designing robust architectures, industrial process automation, and autonomous agent development."
        },
        profileTitle: {
            es: "Perfil Profesional",
            en: "Professional Profile"
        },
        profileDesc: {
            es: "Mi enfoque principal es la lógica de negocio robusta, la estabilidad del sistema y la eficiencia operativa. Soy experto en transformar datos no estructurados en información operativa mediante motores de reglas complejos.",
            en: "My primary focus is robust business logic, system stability, and operational efficiency. I am an expert in transforming unstructured data into operational insights using complex rule engines."
        },
        spec: {
            es: "Especialización",
            en: "Specialization"
        },
        specDesc: {
            es: "Agentes autónomos, Big Data y Cloud Orchestration.",
            en: "Autonomous agents, Big Data, and Cloud Orchestration."
        }
    };

    return (
        <section className="hero">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                <span className="pill">{t(translations.badge)}</span>
                <button 
                    onClick={toggleLanguage}
                    className="pill"
                    style={{ 
                        cursor: "pointer", 
                        background: "var(--glass)", 
                        border: "1px solid var(--accent-primary)",
                        color: "var(--accent-primary)",
                        fontWeight: "600",
                        padding: "0.5rem 1rem"
                    }}
                >
                    {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
                </button>
            </div>
            <h1>OTONIEL BERROA</h1>
            <h2>{t(translations.title)}</h2>

            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "700px", margin: "1.5rem 0 2rem 0" }}>
                {t(translations.description)}
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
                <h3>{t(translations.profileTitle)}</h3>
                <p>{t(translations.profileDesc)}</p>
                <div className="grid" style={{ marginTop: "1.5rem" }}>
                    <div>
                        <strong style={{ color: "var(--accent-primary)" }}>{t(translations.spec)}</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{t(translations.specDesc)}</p>
                    </div>
                    <div>
                        <strong style={{ color: "var(--accent-primary)" }}>Backend</strong>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>NestJS, Node.js (ESM), PHP (Symfony/Laravel), Escalabilidad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

