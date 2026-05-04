import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { 
    ExternalLink, 
    Code2, 
    Rocket, 
    CheckCircle2,
    Bot,
    Coins,
    Swords,
    TrendingUp,
    Layout
} from "lucide-react";
import Carousel from "./Carousel";

// Keep images mapping if needed
const projectImages = [
    "/projects-showcase/gmail-pdf-agent.png",
    "/projects-showcase/ico-platform.png",
    "/projects-showcase/chronowar.png",
    "/projects-showcase/trading-bot.png"
];

export default function Projects() {
    const { t: dictionary } = useLanguage();
    const t = dictionary.projects;

    // Mapeo de iconos para cada proyecto
    const projectIcons = {
        "Tuuci Agent: Automatización Industrial + IA": <Bot className="w-5 h-5 text-sky-400" />,
        "Plataforma de Tokenización & Crowdfunding": <Coins className="w-5 h-5 text-amber-400" />,
        "ChronoWar: Card Combat Arena": <Swords className="w-5 h-5 text-rose-400" />,
        "Algoritmos de Trading (MT4 – MQL4)": <TrendingUp className="w-5 h-5 text-emerald-400" />,
        "Tuuci Agent: Industrial Automation + AI": <Bot className="w-5 h-5 text-sky-400" />,
        "Tokenization & Crowdfunding Platform": <Coins className="w-5 h-5 text-amber-400" />,
        "Trading Algorithms (MT4 – MQL4)": <TrendingUp className="w-5 h-5 text-emerald-400" />
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="projects">
            <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Layout className="w-6 h-6 text-indigo-400" />
                {t.title}
            </motion.h3>

            <Carousel images={projectImages} />

            <motion.div 
                className="tech-explanation-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h4 className="explanation-title">
                    <Rocket className="w-5 h-5 text-amber-400" />
                    {t.evolutionTitle}
                </h4>
                <p className="explanation-text">
                    {t.evolutionDesc1} {t.evolutionDesc2}
                </p>
                <div className="implementation-note">
                    <strong>{t.newImplementations}:</strong> {t.evolutionDesc3}
                </div>
            </motion.div>

            <motion.div 
                className="projects-grid-modern"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {t.items.map((p, i) => (
                    <motion.div 
                        key={i} 
                        className={`project-card-premium ${i === 0 ? 'featured' : ''}`}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                    >
                        <div className="card-header-main">
                            <div className="card-icon-wrapper">
                                {projectIcons[p.title] || <Code2 className="w-5 h-5" />}
                            </div>
                            <h4>{p.title}</h4>
                        </div>
                        
                        <div className="tech-stack-row">
                            {p.tech.split(',').map((tech, idx) => (
                                <span key={idx} className="tech-pill-mini">{tech.trim()}</span>
                            ))}
                        </div>
                        
                        <p className="card-description">{p.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
