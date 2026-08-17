import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { 
    Code2, 
    Brain, 
    Server, 
    Monitor, 
    Cloud, 
    Wrench,
    Layers
} from "lucide-react";

export default function Skills() {
    const { t: dictionary } = useLanguage();
    const t = dictionary.skills;

    const skillGroups = [
        { 
            icon: <Code2 className="text-sky-400" />, 
            title: { es: "Lenguajes & Core", en: "Languages & Core" }, 
            items: ["JavaScript (ES15+)", "TypeScript", "Python", "MQL4", "PHP", "HTML5/CSS3"] 
        },
        { 
            icon: <Brain className="text-emerald-400" />, 
            title: { es: "IA & Automatización", en: "AI & Automation" }, 
            items: ["AI Orchestration", "Google Gemini Pro", "Autonomous Agents", "LLM Fine-tuning", "AI Logic Validation"] 
        },
        { 
            icon: <Server className="text-indigo-400" />, 
            title: { es: "Arquitectura Backend", en: "Backend Architecture" }, 
            items: ["Node.js (NestJS/Express)", "Symfony", "Laravel", "Prisma ORM", "TypeORM", "PostgreSQL", "Supabase", "MongoDB Atlas"] 
        },
        { 
            icon: <Monitor className="text-pink-400" />, 
            title: { es: "Frontend de Altas Prestaciones", en: "High Performance Frontend" }, 
            items: ["React 19", "TanStack Query v5", "Zustand", "Zod", "Styled Components", "Tailwind CSS"] 
        },
        { 
            icon: <Cloud className="text-sky-500" />, 
            title: { es: "Cloud & DevOps", en: "Cloud & DevOps" }, 
            items: ["GitHub Actions (CI/CD)", "Vercel", "Docker", "Supabase BaaS", "Meta WhatsApp API", "Gmail API"] 
        },
        { 
            icon: <Wrench className="text-amber-400" />, 
            title: { es: "Herramientas de Ingeniería", en: "Engineering Tools" }, 
            items: ["Git", "RxJS", "Postman", "JWT Security", "Rate Limiting", "Helmet Security"] 
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Layers className="w-6 h-6 text-indigo-400" />
                {t.title}
            </motion.h3>

            <motion.div 
                className="grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skillGroups.map((group, i) => (
                    <motion.div 
                        key={i} 
                        className="card skill-card"
                        variants={itemVariants}
                        whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                    >
                        <div className="skill-header">
                            {group.icon}
                            <h4>{dictionary.language === 'es' ? group.title.es : group.title.en}</h4>
                        </div>
                        <div className="skill-pills">
                            {group.items.map((skill, j) => (
                                <span key={j} className="pill-small">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

