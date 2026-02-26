export default function Skills() {
    const skillGroups = [
        { title: "Lenguajes", items: ["JavaScript (ES6+)", "TypeScript", "PHP", "MQL4", "HTML5", "CSS3"] },
        { title: "Backend & Cloud", items: ["Node.js", "Express", "Symfony", "Laravel", "Vercel", "GitHub Actions"] },
        { title: "Inteligencia Artificial", items: ["Google Gemini API", "Análisis de Texto", "Automatización de IA"] },
        { title: "Bases de Datos", items: ["MongoDB Atlas", "PostgreSQL", "MySQL", "Oracle"] },
        { title: "Frontend & UI", items: ["React", "Vite", "Tailwind CSS", "jQuery"] },
        { title: "Mobile", items: ["Flutter", "Android Studio"] },
        { title: "Herramientas", items: ["Git", "APIs REST", "JSON/JWT", "OAuth2", "PDF.js"] }
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
