import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      sectors: 'Sectors',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      badge: 'Connecting Capital to Africa',
      title: 'Bridging Investment',
      titleHighlight: 'Opportunities',
      titleEnd: 'Across Africa',
      subtitle: 'We connect global and regional investors with high-potential projects across Africa, delivering value-added partnerships that drive sustainable growth.',
      cta: 'Get Started',
      learnMore: 'Learn More',
    },
    // Stats Section
    stats: {
      projects: 'Projects Facilitated',
      investors: 'Global Investors',
      sectors: 'Key Sectors',
      countries: 'African Countries',
    },
    // Services Section
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      subtitle: 'Comprehensive investment solutions tailored for the African market',
      dealSourcing: {
        title: 'Deal Sourcing',
        description: 'Identifying and evaluating high-potential investment opportunities across diverse African sectors.',
      },
      dueDiligence: {
        title: 'Due Diligence Support',
        description: 'Comprehensive analysis and risk assessment to ensure informed investment decisions.',
      },
      structuring: {
        title: 'Partnership Structuring',
        description: 'Creating optimal partnership frameworks that align investor goals with project needs.',
      },
      regulatory: {
        title: 'Regulatory Navigation',
        description: 'Expert guidance through local regulatory and business environments across Africa.',
      },
      networking: {
        title: 'Value-Added Connections',
        description: 'Facilitating meaningful relationships between investors and project sponsors.',
      },
      advisory: {
        title: 'Strategic Advisory',
        description: 'Long-term strategic guidance for sustainable investment success in Africa.',
      },
    },
    // Sectors Section
    sectors: {
      title: 'Key Investment',
      titleHighlight: 'Sectors',
      subtitle: 'We focus on high-growth sectors driving Africa\'s economic transformation',
      infrastructure: 'Infrastructure',
      energy: 'Energy & Power',
      agriculture: 'Agriculture & Agribusiness',
      technology: 'Technology & Innovation',
      healthcare: 'Healthcare & Pharmaceuticals',
      manufacturing: 'Manufacturing & Industry',
    },
    // Process Section
    process: {
      title: 'How We',
      titleHighlight: 'Work',
      subtitle: 'Our proven process for facilitating successful investments',
      step1: {
        title: 'Discovery',
        description: 'Understanding investor objectives and risk appetite',
      },
      step2: {
        title: 'Sourcing',
        description: 'Identifying matching opportunities across Africa',
      },
      step3: {
        title: 'Analysis',
        description: 'Comprehensive due diligence and evaluation',
      },
      step4: {
        title: 'Structuring',
        description: 'Creating optimal deal structures and partnerships',
      },
    },
    // CTA Section
    cta: {
      title: 'Ready to Invest in',
      titleHighlight: 'Africa\'s Future?',
      subtitle: 'Let\'s connect and explore investment opportunities together.',
      button: 'Contact Us Today',
    },
    // Footer
    footer: {
      tagline: 'Connecting capital with opportunity across Africa',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      rights: '© 2025 BridgeOne Africa. All rights reserved.',
    },
  },
  nd: {
    // Navigation (Ndebele)
    nav: {
      home: 'Ikhaya',
      about: 'Ngathi',
      services: 'Imisebenzi',
      sectors: 'Imikhakha',
      contact: 'Xhumana',
    },
    // Hero Section
    hero: {
      badge: 'Sihlanganisa Imali le-Afrika',
      title: 'Ukuxhuma Amathuba',
      titleHighlight: 'Okutshalomali',
      titleEnd: 'E-Afrika',
      subtitle: 'Sixhuma abatyalimali emhlabeni wonke kanye nasesifundeni namaphrojekthi aphakeme e-Afrika, siletha ubuhlobo obulegugu obusebenzisa ukukhula okuphikelelayo.',
      cta: 'Qala',
      learnMore: 'Funda Okungaphezulu',
    },
    // Stats Section
    stats: {
      projects: 'Amaphrojekthi Alungisiwe',
      investors: 'Abatyalimali Emhlabeni',
      sectors: 'Imikhakha Ebalulekile',
      countries: 'Amazwe Ase-Afrika',
    },
    // Services Section
    services: {
      title: 'Imi',
      titleHighlight: 'sebenzi Yethu',
      subtitle: 'Izixazululo zokutshalomali eziphelele ezenzelwe imakethe yase-Afrika',
      dealSourcing: {
        title: 'Ukufumana Amathuba',
        description: 'Ukuhlola lokuhlola amathuba okutshalomali aphezulu kuzo zonke imikhakha yase-Afrika.',
      },
      dueDiligence: {
        title: 'Ukusekela Ukuhlola',
        description: 'Ukuhlaziya okuphelele lokuhlola ubungozi ukuqinisekisa izinqumo zokutshalomali ezifundileyo.',
      },
      structuring: {
        title: 'Ukwakhiwa Kobuhlobo',
        description: 'Ukudala izinhlaka zobuhlobo ezihle kakhulu ezihambisana nezinjongo zabatyalimali lezidingo zephrojekthi.',
      },
      regulatory: {
        title: 'Ukuhamba Kwemithetho',
        description: 'Ukuqondiswa kwechwepheshe ezindaweni zomthetho wezenabhizinisi e-Afrika.',
      },
      networking: {
        title: 'Ukuxhumana Okulegugu',
        description: 'Ukusiza ubudlelwano obunohlonze phakathi kwabatyalimali labaxhasi bamaphrojekthi.',
      },
      advisory: {
        title: 'Iseluleko Seqhingasu',
        description: 'Ukuqondiswa kweqhingasu yesikhathi eside sokutshalomali okuphumelelayo e-Afrika.',
      },
    },
    // Sectors Section
    sectors: {
      title: 'Imikhakha',
      titleHighlight: 'Yokutshalomali',
      subtitle: 'Sigxile emikhakheni ekhulayo esusa ukuguquka kwezomnotho e-Afrika',
      infrastructure: 'Ingqalasizinda',
      energy: 'Amandla Nogesi',
      agriculture: 'Ezolimo Lebhizinisi Lezolimo',
      technology: 'Ubuchwepheshe Nokusungula',
      healthcare: 'Ukuphathelana Nempilakahle Leyeza',
      manufacturing: 'Ukukhiqiza Lemboni',
    },
    // Process Section
    process: {
      title: 'Indlela',
      titleHighlight: 'Esisebenza Ngayo',
      subtitle: 'Inqubo yethu efakazelwe yokusiza ukutshalomali okuphumelelayo',
      step1: {
        title: 'Ukufumanisa',
        description: 'Ukuqonda izinjongo zabatyalimali lobungozi',
      },
      step2: {
        title: 'Ukufumana',
        description: 'Ukuhlola amathuba afananayo e-Afrika',
      },
      step3: {
        title: 'Ukuhlaziya',
        description: 'Ukuhlola okuphelele lokuhlaziya',
      },
      step4: {
        title: 'Ukwakhiwa',
        description: 'Ukudala izakhiwo zokuxoxisana ezinhle kakhulu lobuhlobo',
      },
    },
    // CTA Section
    cta: {
      title: 'Ulungele Ukutshalomali',
      titleHighlight: 'Ekusaseni Le-Afrika?',
      subtitle: 'Asixhumane sihlole amathuba okutshalomali ndawonye.',
      button: 'Sixhumane Lamuhla',
    },
    // Footer
    footer: {
      tagline: 'Ukuxhuma imali lamathuba e-Afrika',
      quickLinks: 'Izixhumanisi Ezishesha',
      contactInfo: 'Ulwazi Lokuxhumana',
      email: 'I-imeyili',
      phone: 'Ucingo',
      address: 'Ikheli',
      rights: '© 2025 BridgeOne Afrika. Wonke amalungelo agodliwe.',
    },
  },
  es: {
    // Navigation (Spanish)
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      sectors: 'Sectores',
      contact: 'Contacto',
    },
    // Hero Section
    hero: {
      badge: 'Conectando Capital con África',
      title: 'Conectando Oportunidades',
      titleHighlight: 'de Inversión',
      titleEnd: 'en África',
      subtitle: 'Conectamos inversores globales y regionales con proyectos de alto potencial en África, entregando asociaciones de valor añadido que impulsan un crecimiento sostenible.',
      cta: 'Comenzar',
      learnMore: 'Saber Más',
    },
    // Stats Section
    stats: {
      projects: 'Proyectos Facilitados',
      investors: 'Inversores Globales',
      sectors: 'Sectores Clave',
      countries: 'Países Africanos',
    },
    // Services Section
    services: {
      title: 'Nuestros',
      titleHighlight: 'Servicios',
      subtitle: 'Soluciones de inversión integrales adaptadas al mercado africano',
      dealSourcing: {
        title: 'Búsqueda de Oportunidades',
        description: 'Identificación y evaluación de oportunidades de inversión de alto potencial en diversos sectores africanos.',
      },
      dueDiligence: {
        title: 'Apoyo en Due Diligence',
        description: 'Análisis exhaustivo y evaluación de riesgos para garantizar decisiones de inversión informadas.',
      },
      structuring: {
        title: 'Estructuración de Asociaciones',
        description: 'Creación de marcos de asociación óptimos que alinean los objetivos del inversor con las necesidades del proyecto.',
      },
      regulatory: {
        title: 'Navegación Regulatoria',
        description: 'Orientación experta a través de entornos regulatorios y comerciales locales en África.',
      },
      networking: {
        title: 'Conexiones de Valor Añadido',
        description: 'Facilitación de relaciones significativas entre inversores y patrocinadores de proyectos.',
      },
      advisory: {
        title: 'Asesoría Estratégica',
        description: 'Orientación estratégica a largo plazo para el éxito sostenible de inversiones en África.',
      },
    },
    // Sectors Section
    sectors: {
      title: 'Sectores de',
      titleHighlight: 'Inversión Clave',
      subtitle: 'Nos enfocamos en sectores de alto crecimiento que impulsan la transformación económica de África',
      infrastructure: 'Infraestructura',
      energy: 'Energía y Electricidad',
      agriculture: 'Agricultura y Agronegocios',
      technology: 'Tecnología e Innovación',
      healthcare: 'Salud y Farmacéutica',
      manufacturing: 'Manufactura e Industria',
    },
    // Process Section
    process: {
      title: 'Cómo',
      titleHighlight: 'Trabajamos',
      subtitle: 'Nuestro proceso probado para facilitar inversiones exitosas',
      step1: {
        title: 'Descubrimiento',
        description: 'Comprender objetivos del inversor y apetito de riesgo',
      },
      step2: {
        title: 'Búsqueda',
        description: 'Identificar oportunidades coincidentes en África',
      },
      step3: {
        title: 'Análisis',
        description: 'Due diligence y evaluación exhaustiva',
      },
      step4: {
        title: 'Estructuración',
        description: 'Crear estructuras de negocio óptimas y asociaciones',
      },
    },
    // CTA Section
    cta: {
      title: '¿Listo para Invertir en el',
      titleHighlight: 'Futuro de África?',
      subtitle: 'Conectémonos y exploremos oportunidades de inversión juntos.',
      button: 'Contáctanos Hoy',
    },
    // Footer
    footer: {
      tagline: 'Conectando capital con oportunidades en África',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Información de Contacto',
      email: 'Correo',
      phone: 'Teléfono',
      address: 'Dirección',
      rights: '© 2025 BridgeOne Africa. Todos los derechos reservados.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('bridgeone-language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('bridgeone-language', lang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};