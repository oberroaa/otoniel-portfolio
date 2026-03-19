export default function Skills() {
    const skillGroups = [
        { title: "Lenguajes", items: ["JavaScript (ES6+)", "TypeScript", "PHP", "MQL4", "HTML5", "CSS3"] },
        { title: "Backend & Cloud", items: ["NestJS", "Node.js (Express)", "Prisma", "TypeORM", "GitHub Actions", "Vercel", "Meta WhatsApp Cloud API", "Gmail API"] },
        { title: "Inteligencia Artificial", items: ["Google Gemini Pro", "Agentes Autónomos", "Generación de Reglas con IA"] },
        { title: "Bases de Datos", items: ["PostgreSQL", "MongoDB Atlas", "MySQL", "SQL Server"] },
        { title: "Frontend & UI", items: ["React 19", "Zustand", "TanStack Query", "Styled Components", "Tailwind CSS", "Vite"] },
        { title: "Mobile", items: ["Flutter", "Android Studio"] },
        { title: "Herramientas & Patrones", items: ["Zod", "JWT", "OAuth2", "Helmet", "Express Rate Limit", "RxJS", "Git", "PDF.js"] }
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
