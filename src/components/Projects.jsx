import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { 
    Briefcase, 
    ExternalLink, 
    Code2, 
    Rocket,
    CheckCircle2
} from "lucide-react";
import Carousel from "./Carousel";

// Keep images mapping if needed, but for now we'll use what's in JSON for text
const projectImages = [
    "/projects-showcase/gmail-pdf-agent.png",
    "/projects-showcase/ico-platform.png",
    "/projects-showcase/chronowar.png",
    "/projects-showcase/trading-bot.png"
];

export default function Projects() {
    const { t: dictionary } = useLanguage();
    const t = dictionary.projects;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section id="projects">
            <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Briefcase className="w-6 h-6 text-indigo-400" />
                {t.title}
            </motion.h3>

            <Carousel images={projectImages} />

            <motion.div 
                className="tech-explanation"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Rocket className="w-5 h-5" />
                    {t.evolutionTitle}
                </h4>
                <p>
                    {t.evolutionDesc1} 
                    {t.evolutionDesc2}
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong style={{ color: 'var(--accent-primary)' }}>{t.newImplementations}:</strong> {t.evolutionDesc3}
                </p>
            </motion.div>

            <motion.div 
                className="grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {t.items.map((p, i) => (
                    <motion.div 
                        key={i} 
                        className={`card project-card ${i === 0 ? 'featured' : ''}`}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                    >
                        {i === 0 && (
                            <div className="featured-badge">
                                <CheckCircle2 className="w-3 h-3" />
                                Flagship Project
                            </div>
                        )}
                        <div className="project-header">
                            <h4>{p.title}</h4>
                            <Code2 className="w-5 h-5 text-indigo-400/50" />
                        </div>
                        
                        <div className="tech-pills">
                            {p.tech.split(',').map((tech, idx) => (
                                <span key={idx} className="pill-small">{tech.trim()}</span>
                            ))}
                        </div>
                        
                        <p className="project-desc">{p.description}</p>
                        
                        <div className="project-footer">
                            <span className="view-more">
                                {dictionary.language === 'es' ? 'Ver Detalles' : 'View Details'}
                                <ExternalLink className="w-3 h-3 ml-1" />
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

