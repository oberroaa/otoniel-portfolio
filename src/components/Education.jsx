import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    const { t: dictionary } = useLanguage();
    const t = dictionary.education;

    return (
        <section id="education">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                {t.title}
            </motion.h3>
            <motion.div 
                className="card education-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
            >
                <h4 className="degree-title">{t.degree}</h4>
                <p className="university-name">{t.university}</p>
                <p className="grad-date">{t.graduated}</p>
            </motion.div>
        </section>
    );
}

