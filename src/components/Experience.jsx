import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { 
    Cpu, 
    ShieldCheck, 
    Database, 
    Zap,
    Calendar,
    Briefcase
} from "lucide-react";

export default function Experience() {
    const { t: dictionary } = useLanguage();
    const t = dictionary.experience;

    const icons = [<Cpu />, <ShieldCheck />, <Database />, <Zap />];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="experience">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Briefcase className="w-6 h-6 text-indigo-400" />
                {t.title}
            </motion.h3>

            <motion.div 
                className="card experience-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="experience-header">
                    <h4 className="role-title">{t.role}</h4>
                    <span className="period-badge">
                        <Calendar className="w-3 h-3" />
                        {t.period}
                    </span>
                </div>
                
                <p className="experience-summary">{t.summary}</p>

                <motion.div 
                    className="grid highlight-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t.items.map((item, i) => (
                        <motion.div 
                            key={i} 
                            className="highlight-item"
                            variants={itemVariants}
                        >
                            <div className="highlight-icon">
                                {React.cloneElement(icons[i % icons.length], { className: "w-5 h-5 text-indigo-400" })}
                            </div>
                            <div className="highlight-content">
                                <strong>{item.title}</strong>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

