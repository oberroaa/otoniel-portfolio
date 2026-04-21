import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    const translations = {
        title: { es: "¿Hablamos?", en: "Let's Talk" },
        desc: { 
            es: "Estoy siempre abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
            en: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
        },
        emailBtn: { es: "Enviar Email", en: "Send Email" }
    };

    return (
        <section id="contact" style={{ textAlign: "center" }}>
            <h3>{t(translations.title)}</h3>
            <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <p style={{ marginBottom: "2rem", color: "var(--text-muted)" }}>
                    {t(translations.desc)}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <a href="mailto:oberroaa@gmail.com" className="pill" style={{ padding: "1rem", fontSize: "1.1rem" }}>
                        {t(translations.emailBtn)}: oberroaa@gmail.com
                    </a>
                    <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem" }}>
                        <a href="https://linkedin.com/in/otoniel-berroa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/oberroaa" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

