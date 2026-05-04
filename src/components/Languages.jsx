import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function Languages() {
    const { t: dictionary } = useLanguage();
    const t = dictionary.languages;

    return (
        <section id="languages">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Globe className="w-6 h-6 text-indigo-400" />
                {t.title}
            </motion.h3>
            <div className="grid">
                <motion.div 
                    className="card language-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    <h4 className="lang-name">{t.spanish}</h4>
                    <p className="lang-level">{t.native}</p>
                </motion.div>
                <motion.div 
                    className="card language-card"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    <h4 className="lang-name">{t.english}</h4>
                    <p className="lang-level">{t.basic}</p>
                </motion.div>
            </div>
        </section>
    );
}

