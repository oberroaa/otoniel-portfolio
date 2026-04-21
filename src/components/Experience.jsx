import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
    const { t } = useLanguage();

    const translations = {
        title: { es: "Experiencia Laboral", en: "Work Experience" },
        role: { es: "Ingeniero de Software Independiente", en: "Independent Software Engineer" },
        period: { es: "2012 – Presente", en: "2012 – Present" },
        summary: { 
            es: "Desarrollo de soluciones técnicas personalizadas enfocadas en la optimización de flujos de trabajo y la automatización inteligente.",
            en: "Development of customized technical solutions focused on workflow optimization and intelligent automation."
        },
        highlights: [
            {
                title: { es: "Orquestación de Agentes IA", en: "AI Agent Orchestration" },
                desc: { 
                    es: "Diseño de flujos de trabajo autónomos que integran LLMs (Gemini) con APIs industriales para la toma de decisiones basada en datos.",
                    en: "Designing autonomous workflows integrating LLMs (Gemini) with industrial APIs for data-driven decision making."
                }
            },
            {
                title: { es: "Sistemas de Misión Crítica", en: "Mission-Critical Systems" },
                desc: { 
                    es: "Desarrollo de motores de validación lógica para procesos industriales y plataformas financieras (ICO/KYC) con alta disponibilidad.",
                    en: "Development of logic validation engines for industrial processes and financial platforms (ICO/KYC) with high availability."
                }
            },
            {
                title: { es: "Arquitecturas de Datos", en: "Data Architectures" },
                desc: { 
                    es: "Modelado de bases de datos relacionales y no relacionales escalables, optimizadas para consultas complejas y auditoría en tiempo real.",
                    en: "Modeling scalable relational and non-relational databases, optimized for complex queries and real-time auditing."
                }
            },
            {
                title: { es: "Ingeniería Full-Cycle", en: "Full-Cycle Engineering" },
                desc: { 
                    es: "Liderazgo técnico en todo el ciclo de vida del software, desde la conceptualización hasta la automatización de despliegues (CI/CD).",
                    en: "Technical leadership across the software lifecycle, from conceptualization to deployment automation (CI/CD)."
                }
            }
        ]
    };

    return (
        <section id="experience">
            <h3>{t(translations.title)}</h3>
            <div className="card">
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <h4 style={{ fontSize: "1.25rem", color: "var(--accent-primary)" }}>{t(translations.role)}</h4>
                    <span style={{ color: "var(--text-muted)" }}>{t(translations.period)}</span>
                </div>
                <p style={{ marginBottom: "1.5rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                    {t(translations.summary)}
                </p>
                <div className="grid">
                    {translations.highlights.map((h, i) => (
                        <div key={i}>
                            <strong style={{ fontSize: "0.95rem" }}>{t(h.title)}</strong>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                                {t(h.desc)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

