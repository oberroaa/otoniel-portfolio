import { useLanguage } from "../context/LanguageContext";

export default function Education() {
    const { t } = useLanguage();

    const translations = {
        title: { es: "Educación", en: "Education" },
        degree: { es: "Ingeniería Informática", en: "Computer Engineering" },
        university: { es: "Universidad de las Ciencias Informáticas (UCI)", en: "University of Informatics Sciences (UCI)" },
        graduated: { es: "Graduado en 2012", en: "Graduated in 2012" }
    };

    return (
        <section id="education">
            <h3>{t(translations.title)}</h3>
            <div className="card">
                <h4 style={{ color: "var(--accent-primary)", marginBottom: "0.5rem" }}>{t(translations.degree)}</h4>
                <p style={{ fontWeight: 600 }}>{t(translations.university)}</p>
                <p style={{ color: "var(--text-muted)" }}>{t(translations.graduated)}</p>
            </div>
        </section>
    );
}

