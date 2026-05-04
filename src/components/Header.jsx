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
                className="header-main-grid"
                variants={itemVariants}
            >
                <motion.div 
                    className="profile-box"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="profile-image-wrapper">
                        <img src="/profile.jpg" alt="Otoniel Berroa" className="profile-img-main" />
                        <div className="status-indicator"></div>
                    </div>
                </motion.div>

                <div className="profile-info">
                    <motion.h1 variants={itemVariants} className="name-title">
                        {dictionary.meta?.name || "OTONIEL BERROA"}
                    </motion.h1>
                    
                    <motion.div variants={itemVariants} className="role-badges">
                        {t.roles.map((role, i) => (
                            <span key={i} className="role-tag">{role}</span>
                        ))}
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="main-role-title">
                        {t.title}
                    </motion.h2>

                    <motion.p variants={itemVariants} className="hero-bio">
                        {t.description}
                    </motion.p>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="action-bar">
                <a href="mailto:oberroaa@gmail.com" className="action-btn email">
                    <Mail className="w-4 h-4" />
                    <span>oberroaa@gmail.com</span>
                </a>
                <div className="social-links-group">
                    <a href="https://linkedin.com/in/otoniel-berroa" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/oberroaa" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <Code2 className="w-5 h-5" />
                    </a>
                    <div className="loc-tag">
                        <MapPin className="w-4 h-4" />
                        {t.location}
                    </div>
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

