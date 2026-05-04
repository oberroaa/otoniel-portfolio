import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { 
    Mail, 
    ExternalLink, 
    Code2, 
    MapPin, 
    Terminal, 
    Cpu, 
    Globe, 
    Languages,
    Sparkles
} from "lucide-react";

export default function Header() {
    const { language, toggleLanguage, t: dictionary } = useLanguage();
    const t = dictionary.header;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section 
            className="hero"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                variants={itemVariants}
                className="header-top"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}
            >
                <span className="pill" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    {t.badge}
                </span>
                <button 
                    onClick={toggleLanguage}
                    className="lang-toggle"
                >
                    <Languages className="w-4 h-4" />
                    {language === 'es' ? 'English' : 'Español'}
                </button>
            </motion.div>

            <motion.div 
                className="header-content-wrapper"
                variants={itemVariants}
                style={{ display: "flex", gap: "2.5rem", alignItems: "center", flexWrap: "wrap" }}
            >
                <motion.div 
                    className="profile-image-container"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                >
                    <img src="/profile.jpg" alt="Otoniel Berroa" className="profile-image" />
                    <div className="profile-status-dot"></div>
                </motion.div>

                <div className="header-text">
                    <motion.h1 variants={itemVariants} style={{ margin: 0 }}>{dictionary.meta?.name || "OTONIEL BERROA"}</motion.h1>
                    <motion.h2 variants={itemVariants}>{t.title}</motion.h2>
                </div>
            </motion.div>

            <motion.p 
                variants={itemVariants}
                className="hero-description"
            >
                {t.description}
            </motion.p>

            <motion.div variants={itemVariants} className="contact-links">
                <a href="mailto:oberroaa@gmail.com" className="contact-pill main">
                    <Mail className="w-4 h-4" />
                    oberroaa@gmail.com
                </a>
                <div className="social-group">
                    <a href="https://linkedin.com/in/otoniel-berroa" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/oberroaa" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Code2 className="w-5 h-5" />
                    </a>
                    <span className="location">
                        <MapPin className="w-4 h-4" />
                        {t.location}
                    </span>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card profile-card" style={{ marginTop: "4rem" }}>
                <h3>
                    <Terminal className="w-6 h-6 text-indigo-400" />
                    {t.profileTitle}
                </h3>
                <p className="profile-text">{t.profileDesc}</p>
                <div className="grid spec-grid" style={{ marginTop: "2rem" }}>
                    <div className="spec-item">
                        <div className="spec-header">
                            <Cpu className="w-5 h-5 text-sky-400" />
                            <strong>{t.spec}</strong>
                        </div>
                        <p>{t.specDesc}</p>
                    </div>
                    <div className="spec-item">
                        <div className="spec-header">
                            <Globe className="w-5 h-5 text-emerald-400" />
                            <strong>Backend</strong>
                        </div>
                        <p>NestJS, Node.js (ESM), PHP (Symfony/Laravel), Escalabilidad.</p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

