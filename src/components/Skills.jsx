export default function Skills() {
    const skillGroups = [
        { title: "Lenguajes & Core", items: ["JavaScript (ES15+)", "TypeScript", "Python", "MQL4", "PHP", "HTML5/CSS3"] },
        { title: "IA & Automatización", items: ["AI Orchestration", "Google Gemini Pro", "Agentes Autónomos", "LLM Fine-tuning (Prompts)", "Validación Lógica con IA"] },
        { title: "Arquitectura Backend", items: ["Node.js (NestJS/Express)", "Prisma ORM", "TypeORM", "PostgreSQL", "MongoDB Atlas", "Bases de Datos Vectoriales"] },
        { title: "Frontend de Altas Prestaciones", items: ["React 19", "TanStack Query v5", "Zustand (State Management)", "Zod (Validation)", "Styled Components", "Tailwind CSS"] },
        { title: "Cloud & DevOps", items: ["GitHub Actions (CI/CD)", "Vercel", "Docker", "Meta WhatsApp API", "Gmail API", "OAuth2/OpenID"] },
        { title: "Herramientas de Ingeniería", items: ["Git", "RxJS", "Postman", "JWT Security", "Rate Limiting", "Helmet Security", "Swagger/OpenAPI"] }
    ];


    return (
        <section id="skills">
            <h3>Habilidades Técnicas</h3>
            <div className="grid">
                {skillGroups.map((group, i) => (
                    <div key={i} className="card" style={{ padding: "1.5rem" }}>
                        <h4 style={{ marginBottom: "1rem", fontSize: "1rem", color: "var(--accent-primary)" }}>{group.title}</h4>
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
