import React from 'react';
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)", fontSize: "0.875rem" }}>
            © {currentYear} Otoniel Berroa Arias • Miami, FL
        </footer>
    );
}
