import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { Heart } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-main">
            <div className="footer-content">
                <span>© {currentYear} Otoniel Berroa</span>
                <span className="footer-divider">•</span>
                <span>{t.header.location}</span>
                <span className="footer-divider">•</span>
                <span className="made-with">
                    {t.footer.rights}
                    <Heart className="w-3 h-3 text-red-500 ml-1 inline" />
                </span>
            </div>
        </footer>
    );
}
