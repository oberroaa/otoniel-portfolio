import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
    const { t } = useLanguage();

    const translations = {
        title: { es: "Habilidades Técnicas", en: "Technical Skills" },
        groups: [
            { title: { es: "Lenguajes & Core", en: "Languages & Core" }, items: ["JavaScript (ES15+)", "TypeScript", "Python", "MQL4", "PHP", "HTML5/CSS3"] },
            { title: { es: "IA & Automatización", en: "AI & Automation" }, items: ["AI Orchestration", "Google Gemini Pro", "Autonomous Agents", "LLM Fine-tuning", "AI Logic Validation"] },
            { title: { es: "Arquitectura Backend", en: "Backend Architecture" }, items: ["Node.js (NestJS/Express)", "Prisma ORM", "TypeORM", "PostgreSQL", "MongoDB Atlas", "Vector Databases"] },
            { title: { es: "Frontend de Altas Prestaciones", en: "High Performance Frontend" }, items: ["React 19", "TanStack Query v5", "Zustand", "Zod", "Styled Components", "Tailwind CSS"] },
            { title: { es: "Cloud & DevOps", en: "Cloud & DevOps" }, items: ["GitHub Actions (CI/CD)", "Vercel", "Docker", "Meta WhatsApp API", "Gmail API", "OAuth2/OpenID"] },
            { title: { es: "Herramientas de Ingeniería", en: "Engineering Tools" }, items: ["Git", "RxJS", "Postman", "JWT Security", "Rate Limiting", "Helmet Security", "Swagger/OpenAPI"] }
        ]
    };

    return (
        <section id="skills">
            <h3>{t(translations.title)}</h3>
            <div className="grid">
                {translations.groups.map((group, i) => (
                    <div key={i} className="card" style={{ padding: "1.5rem" }}>
                        <h4 style={{ marginBottom: "1rem", fontSize: "1rem", color: "var(--accent-primary)" }}>{t(group.title)}</h4>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {group.items.map((skill, j) => (
                                <span key={j} className="pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

