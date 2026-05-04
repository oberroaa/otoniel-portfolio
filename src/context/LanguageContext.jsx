import React, { createContext, useState, useContext, useEffect } from 'react';
import es from '../locales/es.json';
import en from '../locales/en.json';

const translations = { es, en };
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('portfolio-lang') || 'es';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-lang', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    // 't' is now the dictionary for the current language
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
