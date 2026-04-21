import { useLanguage } from "../context/LanguageContext";

export default function Languages() {
    const { t } = useLanguage();

    const translations = {
        title: { es: "Idiomas", en: "Languages" },
        spanish: { es: "Español", en: "Spanish" },
        native: { es: "Nativo", en: "Native" },
        english: { es: "Inglés", en: "English" },
        basic: { es: "Básico / Técnico", en: "Basic / Technical" }
    };

    return (
        <section id="languages">
            <h3>{t(translations.title)}</h3>
            <div className="grid">
                <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                    <h4 style={{ color: "var(--accent-primary)" }}>{t(translations.spanish)}</h4>
                    <p>{t(translations.native)}</p>
                </div>
                <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                    <h4 style={{ color: "var(--accent-primary)" }}>{t(translations.english)}</h4>
                    <p style={{ fontSize: "0.9rem" }}>{t(translations.basic)}</p>
                </div>
            </div>
        </section>
    );
}

