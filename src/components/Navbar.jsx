import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
    Home, 
    Briefcase, 
    Layout, 
    MessageSquare, 
    Globe,
    Printer,
    FileDown
} from 'lucide-react';

export default function Navbar() {
    const { language, toggleLanguage, t } = useLanguage();

    const navItems = [
        { icon: <Home className="w-5 h-5" />, label: 'Inicio', href: '#header' },
        { icon: <Briefcase className="w-5 h-5" />, label: 'Experiencia', href: '#experience' },
        { icon: <Layout className="w-5 h-5" />, label: 'Proyectos', href: '#projects' },
        { icon: <MessageSquare className="w-5 h-5" />, label: 'Contacto', href: '#contact' },
    ];

    return (
        <motion.nav 
            className="floating-navbar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <div className="nav-container">
                <div className="nav-links">
                    {navItems.map((item, i) => (
                        <a key={i} href={item.href} className="nav-item">
                            {item.icon}
                        </a>
                    ))}
                </div>
                
                <div className="nav-divider"></div>

                <button 
                    onClick={toggleLanguage}
                    className="lang-toggle-nav"
                    title={language === 'es' ? 'Cambiar idioma' : 'Change language'}
                >
                    <Globe className="w-5 h-5" />
                    <span>{language.toUpperCase()}</span>
                </button>

                <div className="nav-divider"></div>

                <div className="nav-actions">
                    <button
                        onClick={() => window.print()}
                        className="nav-action-btn"
                        title={language === 'es' ? 'Imprimir' : 'Print'}
                    >
                        <Printer className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => {
                            const prevTitle = document.title;
                            document.title = 'Otoniel_Berroa_Portfolio';
                            window.print();
                            document.title = prevTitle;
                        }}
                        className="nav-action-btn pdf"
                        title={language === 'es' ? 'Guardar como PDF' : 'Save as PDF'}
                    >
                        <FileDown className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
