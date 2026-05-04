import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { 
    MessageSquare, 
    Mail, 
    ExternalLink, 
    Code2,
    Send
} from "lucide-react";

export default function Contact() {
    const { t: dictionary } = useLanguage();
    const t = dictionary.contact;

    return (
        <section id="contact" style={{ textAlign: "center" }}>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <MessageSquare className="w-6 h-6 text-indigo-400" />
                {t.title}
            </motion.h3>

            <motion.div 
                className="card contact-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ maxWidth: "600px", margin: "0 auto" }}
            >
                <p className="contact-desc">
                    {t.desc}
                </p>

                <div className="contact-actions">
                    <motion.a 
                        href="mailto:oberroaa@gmail.com" 
                        className="contact-button-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Mail className="w-5 h-5" />
                        <span>{t.emailBtn}: oberroaa@gmail.com</span>
                        <Send className="w-4 h-4 ml-auto opacity-50" />
                    </motion.a>

                    <div className="contact-socials">
                        <a href="https://linkedin.com/in/otoniel-berroa" target="_blank" rel="noopener noreferrer" className="social-link">
                            <ExternalLink className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/oberroaa" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Code2 className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

