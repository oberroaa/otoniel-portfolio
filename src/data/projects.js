export const projects = [
    {
        es: {
            title: "Ecosistema de Automatización de Pedidos (Gmail-PDF-Agent)",
            description: "Agente inteligente de orquestación industrial. Implementa un motor de extracción basado en visión e IA para transformar PDFs no estructurados en datos operativos. Logro técnico: Sistema de 'Validación Lógica Multicapa' que cruza datos de inventario y pedidos en tiempo real, con notificaciones automatizadas vía WhatsApp Oficial y Email."
        },
        en: {
            title: "Order Automation Ecosystem (Gmail-PDF-Agent)",
            description: "Industrial intelligent orchestration agent. Implements an AI-powered vision and extraction engine to transform unstructured PDFs into operational data. Technical achievement: 'Multi-layer Logic Validation' system that cross-references inventory and order data in real-time, with automated notifications via WhatsApp Official and Email."
        },
        tech: "Node.js, Google Gemini Pro, Meta WhatsApp Cloud API, Gmail API, MongoDB, GitHub Actions",
        image: "/projects-showcase/gmail-pdf-agent.png"
    },
    {
        es: {
            title: "Plataforma de Tokenización & Crowdfunding (KYC/ICO)",
            description: "Infraestructura financiera de alta disponibilidad para preventa de tokens. Diseñada bajo principios de 'Security-First' con validación de esquemas mediante Zod, gestión de estados complejos con TanStack Query y un flujo de KYC automatizado que procesa documentos de identidad y selfies con almacenamiento encriptado."
        },
        en: {
            title: "Tokenization & Crowdfunding Platform (KYC/ICO)",
            description: "High-availability financial infrastructure for token presales. Designed under 'Security-First' principles with schema validation using Zod, complex state management with TanStack Query, and an automated KYC flow that processes ID documents and selfies with encrypted storage."
        },
        tech: "Express, Prisma ORM, PostgreSQL, Zod, TanStack Query, Zustand, JWT",
        image: "/projects-showcase/ico-platform.png"
    },
    {
        es: {
            title: "ChronoWar: Card Combat Arena",
            description: "Juego de estrategia táctico con motor de combate Match-3 completo: tablero 8×8 con 4 razas, sistema de cascadas y combos con multiplicadores dinámicos, IA enemiga con evaluación de movimientos ponderada por raza, sistema de habilidades dinámicas cargadas desde JSON, mecánicas de veneno/escudo/curación, y arquitectura modular con lógica de combate separada en utilidades reutilizables."
        },
        en: {
            title: "ChronoWar: Card Combat Arena",
            description: "Tactical strategy game featuring a full Match-3 combat engine: 8×8 board with 4 races, cascade and combo system with dynamic multipliers, AI opponent with race-weighted move evaluation, dynamic hero skill system loaded from JSON data, poison/shield/healing mechanics, and modular architecture with combat logic separated into reusable utility modules."
        },
        tech: "React 19, TypeScript, Styled Components, Vite, Node.js, NestJS, TypeORM, MySQL, Supabase, Framer Motion",
        image: "/projects-showcase/chronowar.png"
    },
    {
        es: {
            title: "Algoritmos de Trading (MT4 – MQL4)",
            description: "Sistemas de trading cuantitativo de nivel institucional. Implementa cobertura (hedging), monitoreo dinámico de spreads y protección de equidad, con gestión de riesgo avanzada: objetivo de beneficio, trailing stop, y mapa de tickets para optimizar cierres. Evalúa múltiples indicadores (EMA, MACD, RSI, Ichimoku, Bollinger, ZigZag) y utiliza IA para señalizar compras/ventas. Diseñado para operar autónomamente en mercados de alta volatilidad con latencia mínima."
        },
        en: {
            title: "Trading Algorithms (MT4 – MQL4)",
            description: "Institutional-level quantitative trading systems. Implements hedging, real-time spread monitoring, advanced risk management (target profit, trailing stop, ticket map), and evaluates multiple indicators (EMA, MACD, RSI, Ichimoku, Bollinger, ZigZag) with AI-driven signal generation. Designed for autonomous operation in high-volatility markets with minimal latency."
        },
        tech: "MQL4, MetaTrader 4, Advanced Risk Management, Multi-Indicator Analysis",
        image: "/projects-showcase/trading-bot.png"
    },
    {
        es: {
            title: "AEI Fundición: Monitoreo de Producción Industrial",
            description: "Sistema industrial de monitorización en tiempo real para el seguimiento del proceso de fundición y mezclado. Controla fases ('trompos') calculando volúmenes de colada, duraciones operativas y eficiencias. Incluye una API REST integrada con autenticación JWT (LexikJWT) para interoperabilidad móvil/web, y un servicio automatizado de alertas de correo electrónico ante anomalías de producción."
        },
        en: {
            title: "AEI Fundición: Industrial Production Monitoring",
            description: "Industrial real-time monitoring system for casting and mixing tracking. Manages production phases ('trompos') by calculating casting volumes, running duration, and efficiency metrics. Includes a REST API secured via JWT (LexikJWT) for web/mobile client interoperability, and an automated email alert service for production anomalies."
        },
        tech: "Symfony 5.3, PHP, JWT Auth, KnpPaginator, Doctrine ORM, Mailer, PostgreSQL",
        image: "/projects-showcase/aei-fundicion.png"
    },
    {
        es: {
            title: "AEI Sislog: Control de Logística y Almacén",
            description: "Plataforma corporativa para el control de entrada de mercancías y planificación logística ('SISLOG'). Integra autenticación unificada por LDAP corporativo. Automatiza la importación de datos a través de hojas de cálculo de gran tamaño (PhpSpreadsheet), gestionando facturas de importación/locales, listas de empaque, números de BL (conocimiento de embarque) y partes de entrada."
        },
        en: {
            title: "AEI Sislog: Logistics & Warehouse Control",
            description: "Enterprise platform for merchandise entry control and logistics planning ('SISLOG'). Integrates single sign-on via corporate LDAP. Automates data import from large Excel spreadsheets (PhpSpreadsheet), managing import/local invoices, packing lists, BL (Bill of Lading) numbers, and receiving logs."
        },
        tech: "Symfony 5.2, PHP, LDAP, PhpSpreadsheet, KnpPaginator, Doctrine ORM, MySQL",
        image: "/projects-showcase/aei-sislog.png"
    }
];
