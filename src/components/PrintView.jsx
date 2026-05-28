import { useLanguage } from '../context/LanguageContext';

const skillGroups = [
    { title: { es: 'Lenguajes & Core', en: 'Languages & Core' }, items: ['JavaScript (ES15+)', 'TypeScript', 'Python', 'MQL4', 'PHP', 'HTML5/CSS3'] },
    { title: { es: 'IA & Automatización', en: 'AI & Automation' }, items: ['AI Orchestration', 'Google Gemini Pro', 'Autonomous Agents', 'LLM Fine-tuning', 'AI Logic Validation'] },
    { title: { es: 'Arquitectura Backend', en: 'Backend Architecture' }, items: ['Node.js (NestJS/Express)', 'Prisma ORM', 'TypeORM', 'PostgreSQL', 'MongoDB Atlas', 'Supabase'] },
    { title: { es: 'Frontend', en: 'Frontend' }, items: ['React 19', 'TanStack Query v5', 'Zustand', 'Zod', 'Styled Components', 'Tailwind CSS'] },
    { title: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' }, items: ['GitHub Actions (CI/CD)', 'Docker', 'Vercel', 'Meta WhatsApp API', 'Gmail API'] },
    { title: { es: 'Herramientas', en: 'Tools' }, items: ['Git', 'RxJS', 'Postman', 'JWT Security', 'Rate Limiting', 'Helmet Security'] },
];

export default function PrintView() {
    const { language, t: dictionary } = useLanguage();
    const t = dictionary;
    const isEs = language === 'es';

    return (
        <div className="pv-root">
            {/* ── HEADER ── */}
            <header className="pv-header">
                <img src="/profile.jpg" alt="Otoniel Berroa" className="pv-avatar" />
                <div className="pv-header-info">
                    <h1 className="pv-name">OTONIEL BERROA</h1>
                    <p className="pv-role">{t.header.title}</p>
                    <div className="pv-tags">
                        {t.header.roles.map((r, i) => <span key={i} className="pv-tag">{r}</span>)}
                    </div>
                    <div className="pv-contacts">
                        <span>✉ oberroaa@gmail.com</span>
                        <span>📍 {t.header.location}</span>
                        <span>🔗 linkedin.com/in/otoniel-berroa</span>
                        <span>💻 github.com/oberroaa</span>
                    </div>
                </div>
            </header>

            <div className="pv-body">
                {/* ── COL IZQUIERDA ── */}
                <div className="pv-left">

                    {/* Perfil */}
                    <section className="pv-section">
                        <h2 className="pv-section-title">{isEs ? 'Perfil Profesional' : 'Professional Profile'}</h2>
                        <p className="pv-text">{t.header.description}</p>
                        <p className="pv-text" style={{ marginTop: '0.3rem' }}>{t.header.profileDesc}</p>
                    </section>

                    {/* Experiencia */}
                    <section className="pv-section">
                        <h2 className="pv-section-title">{t.experience.title}</h2>
                        <div className="pv-exp-header">
                            <strong className="pv-exp-role">{t.experience.role}</strong>
                            <span className="pv-period">{t.experience.period}</span>
                        </div>
                        <p className="pv-text pv-italic">{t.experience.summary}</p>
                        <div className="pv-exp-items">
                            {t.experience.items.map((item, i) => (
                                <div key={i} className="pv-exp-item">
                                    <span className="pv-bullet">▸</span>
                                    <div>
                                        <strong>{item.title}:</strong>{' '}
                                        <span className="pv-text">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Proyectos */}
                    <section className="pv-section">
                        <h2 className="pv-section-title">{isEs ? 'Proyectos Destacados' : 'Featured Projects'}</h2>
                        {t.projects.items.map((p, i) => (
                            <div key={i} className="pv-project">
                                <strong className="pv-project-title">{p.title}</strong>
                                <p className="pv-text">{p.description}</p>
                                <p className="pv-tech"><em>{isEs ? 'Stack:' : 'Stack:'} {p.tech}</em></p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* ── COL DERECHA ── */}
                <div className="pv-right">

                    {/* Habilidades */}
                    <section className="pv-section">
                        <h2 className="pv-section-title">{t.skills.title}</h2>
                        {skillGroups.map((g, i) => (
                            <div key={i} className="pv-skill-group">
                                <strong className="pv-skill-label">{isEs ? g.title.es : g.title.en}</strong>
                                <div className="pv-skill-pills">
                                    {g.items.map((s, j) => <span key={j} className="pv-pill">{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Educación */}
                    <section className="pv-section">
                        <h2 className="pv-section-title">{t.education.title}</h2>
                        <strong className="pv-degree">{t.education.degree}</strong>
                        <p className="pv-text">{t.education.university}</p>
                        <p className="pv-text">{t.education.graduated}</p>
                    </section>

                    {/* Idiomas */}
                    <section className="pv-section">
                        <h2 className="pv-section-title">{t.languages.title}</h2>
                        <div className="pv-lang-row">
                            <span className="pv-lang-name">{t.languages.spanish}</span>
                            <span className="pv-pill">{t.languages.native}</span>
                        </div>
                        <div className="pv-lang-row">
                            <span className="pv-lang-name">{t.languages.english}</span>
                            <span className="pv-pill">{t.languages.basic}</span>
                        </div>
                    </section>

                    {/* Contacto */}
                    <section className="pv-section">
                        <h2 className="pv-section-title">{isEs ? 'Contacto' : 'Contact'}</h2>
                        <p className="pv-text">oberroaa@gmail.com</p>
                        <p className="pv-text">linkedin.com/in/otoniel-berroa</p>
                        <p className="pv-text">github.com/oberroaa</p>
                        <p className="pv-text">Miami, FL</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
