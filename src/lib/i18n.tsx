import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Locale = "es" | "en";

type Translations = typeof es;

const es = {
  nav: {
    home: "Inicio",
    about: "Sobre Mí",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    badge: "Portfolio 2026",
    greeting: "Hola, soy",
    name: "Santiago García G.",
    subtitle: "Desarrollador Web Junior | Especializado en Front-End, WordPress y Shopify",
    description: "Estudiante de DAW en Palma de Mallorca, apasionado por crear experiencias web rápidas, atractivas y enfocadas en la conversión. Transformo ideas en código.",
    cta1: "Ver Proyectos",
    cta2: "Contactar",
  },
  about: {
    title1: "Sobre Mí &",
    title2: "Tech Stack",
    bio: "Soy un desarrollador web junior con un enfoque práctico y orientado a resultados. Mi experiencia previa en atención al cliente me ha dado una visión comercial única que aplico en cada proyecto: entiendo lo que el usuario final necesita y lo traduzco en interfaces intuitivas que convierten. Siempre aprendiendo, siempre construyendo.",
  },
  projects: {
    title1: "Mis",
    title2: "Proyectos",
    subtitle: "Una selección de trabajos que reflejan mi versatilidad y pasión por el desarrollo web.",
    viewDetail: "Ver Detalle",
    viewProject: "Ver Caso de Estudio",
    aboutProject: "Sobre el proyecto",
    items: [
      {
        title: "Limpiezas Alicia",
        description: "Web corporativa orientada a captación de leads en Mallorca. Diseño responsivo y optimizado para carga rápida.",
        details: "Diseñé y desarrollé una Landing Page de servicios orientada a la conversión y captación de leads mediante WhatsApp. Implementé un diseño limpio con paleta verde corporativa, estructura de contenido orientada a la conversión y optimización de velocidad de carga.",
        role: "Desarrollo Front-End & UX",
        stack: ["HTML5", "CSS3", "JS Vanilla"],
      },
      {
        title: "Terra & Sal",
        description: "eCommerce para negocio local de productos gourmet. Productos variables y logística regional configurada.",
        details: "Digitalización de un negocio local de Mallorca. Desarrollo de un eCommerce completo con productos variables y gestión logística regional mediante WooCommerce.",
        role: "Especialista WordPress · WooCommerce",
        stack: ["WooCommerce", "Elementor", "PHP"],
      },
      {
        title: "IslaSetup",
        description: "Tienda online de accesorios tech en modo oscuro. Integración de prueba social y estrategias de aumento de ticket medio.",
        details: "Lanzamiento de una marca D2C en Shopify. Configuración de arquitectura web, estrategias de conversión (CRO) y diseño UX/UI en Dark Mode.",
        role: "Implementador Shopify · CRO",
        stack: ["Shopify", "Dawn Theme", "Liquid"],
      },
    ],
  },
  contact: {
    title: "¿Hablamos?",
    subtitle: "Tomemos un café virtual — o uno real si estás por Mallorca.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    message: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    send: "Enviar Mensaje",
  },
  footer: {
    credit: "Diseñado y desarrollado por Santiago García G. © 2026",
  },
  caseStudy: {
    back: "← Volver al Portafolio",
    role: "Mi Rol",
    tech: "Tecnologías",
    goal: "Objetivo",
    problem: "El Problema",
    process: "El Proceso y UX",
    solution: "La Solución y Resultados",
    viewLive: "Ver Proyecto en Vivo ↗",
    cases: {
      "limpiezas-alicia": {
        title: "Limpiezas Alicia",
        subtitle: "Diseño y desarrollo de una Landing Page de servicios orientada a la conversión y captación de leads mediante WhatsApp.",
        role: "Desarrollo Front-End & UX",
        tech: "HTML5, CSS3, JS Vanilla",
        goal: "Captación de Leads (B2C)",
        problem: "Una empresa de servicios de limpieza de Mallorca necesitaba establecer su presencia digital desde cero. El reto no era solo hacer una web informativa, sino crear una herramienta de venta directa. Requerían una página que cargara extremadamente rápido y cuyo principal objetivo fuera lograr que el cliente contactara vía WhatsApp o formulario, eliminando fricciones en el proceso de decisión.",
        processList: [
          "Hero Section claro: Propuesta de valor inmediata ('Limpiamos tu espacio') y botón de contacto primario.",
          "Prueba Social: Inclusión de testimonios para generar confianza en un sector donde meter a alguien en casa es una barrera inicial.",
          "Arquitectura de la información: Servicios detallados de forma visual y sección clara de zona de cobertura (Mallorca).",
        ],
        processIntro: "Decidí evitar constructores visuales pesados como Elementor para este proyecto, apostando por código a medida (HTML/CSS/JS) para garantizar un rendimiento óptimo (PageSpeed). A nivel de UX, estructuré la página siguiendo el modelo clásico de conversión:",
        solutionText: "El resultado es una landing page responsiva (Mobile First) que guía al usuario desde el descubrimiento del servicio hasta el contacto directo. La implementación de botones flotantes de WhatsApp y un diseño limpio con contrastes altos mejoró la legibilidad en dispositivos móviles, de donde proviene el 80% del tráfico del sector servicios.",
        url: "https://www.limpiezasalicia.com",
      },
      "terra-sal": {
        title: "Terra & Sal",
        subtitle: "Digitalización de un negocio local de Mallorca. Desarrollo de un eCommerce completo con productos variables y gestión logística regional mediante WooCommerce.",
        role: "Especialista WordPress",
        tech: "WooCommerce, Elementor",
        goal: "eCommerce Local (B2C)",
        problem: "Los negocios tradicionales en Mallorca necesitan dar el salto digital con tiendas online que sean fáciles de gestionar. El reto de este proyecto era crear una experiencia de compra minimalista para un catálogo de productos artesanales (gourmet y cerámica), resolviendo problemas técnicos reales como la configuración de envíos específicos para las Islas Baleares y la creación de productos complejos con múltiples opciones.",
        processIntro: "Se desarrolló la tienda en un entorno local utilizando WordPress como gestor de contenidos y WooCommerce como motor de ventas. A nivel de implementación destaco:",
        processList: [
          "Productos Variables: Configuración de atributos personalizados (sabores y tamaños) con precios dinámicos.",
          "Logística Regional: Creación de zonas de envío diferenciadas (Baleares vs. Península Ibérica) y reglas de envío gratuito condicionado.",
          "Diseño y Navegación: Uso de constructores visuales para maquetar grids de productos manteniendo un estilo limpio que cede todo el protagonismo a la fotografía del producto.",
        ],
        solutionText: "Una tienda funcional con catálogo completo, pasarelas de pago configuradas y zonas de envío diferenciadas. El diseño minimalista con espacios en blanco y tipografías legibles permite una experiencia de compra centrada en el producto.",
        url: "",
      },
      islasetup: {
        title: "IslaSetup",
        subtitle: "Lanzamiento de una marca D2C en Shopify. Configuración de arquitectura web, estrategias de conversión (CRO) y diseño UX/UI en Dark Mode.",
        role: "Implementador Shopify",
        tech: "Shopify OS 2.0 (Dawn)",
        goal: "Conversión D2C",
        problem: "Crear desde cero una tienda online de nicho (accesorios tecnológicos premium) enfocada al mercado directo al consumidor (Direct-to-Consumer). El objetivo era huir del aspecto genérico de las plantillas base y construir una experiencia de marca inmersiva que conectara con programadores, diseñadores y gamers, maximizando a su vez la tasa de conversión y el ticket medio de compra.",
        processIntro: "Utilizando la arquitectura Online Store 2.0 de Shopify y basándome en el tema Dawn, apliqué las mejores prácticas actuales de comercio electrónico:",
        processList: [
          "Dark Mode UX: Configuración profunda del esquema de colores para lograr una interfaz oscura que transmite modernidad.",
          "Arquitectura de Confianza: Creación de menús estructurados, páginas legales automatizadas y secciones dedicadas a garantías.",
          "Optimización de Conversión (CRO): Implementación de estrategias de venta cruzada (upselling) y barras de anuncio para promover envío gratuito.",
          "Prueba Social: Integración de Judge.me para habilitar y gestionar reseñas de clientes con valoración por estrellas.",
        ],
        solutionText: "Una tienda veloz, estéticamente atractiva y preparada para captar tráfico. El uso nativo del editor de bloques permite que el diseño sea 100% responsivo y mantenga puntuaciones perfectas de rendimiento en dispositivos móviles.",
        url: "https://islasetup33.myshopify.com/",
      },
    },
  },
};

const en: Translations = {
  nav: {
    home: "Home",
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    badge: "Portfolio 2026",
    greeting: "Hi, I'm",
    name: "Santiago García G.",
    subtitle: "Junior Web Developer | Specialized in Front-End, WordPress & Shopify",
    description: "DAW student in Palma de Mallorca, passionate about creating fast, attractive and conversion-focused web experiences. I turn ideas into code.",
    cta1: "View Projects",
    cta2: "Contact Me",
  },
  about: {
    title1: "About Me &",
    title2: "Tech Stack",
    bio: "I'm a junior web developer with a practical, results-oriented approach. My previous experience in customer service gave me a unique business perspective that I apply to every project: I understand what the end user needs and translate it into intuitive interfaces that convert. Always learning, always building.",
  },
  projects: {
    title1: "My",
    title2: "Projects",
    subtitle: "A selection of work that reflects my versatility and passion for web development.",
    viewDetail: "View Detail",
    viewProject: "View Case Study",
    aboutProject: "About the project",
    items: [
      {
        title: "Limpiezas Alicia",
        description: "Corporate website focused on lead generation in Mallorca. Responsive design optimized for fast loading.",
        details: "I designed and developed a service Landing Page focused on conversion and lead generation via WhatsApp. Clean design with corporate green palette, conversion-oriented content structure and loading speed optimization.",
        role: "Front-End Development & UX",
        stack: ["HTML5", "CSS3", "Vanilla JS"],
      },
      {
        title: "Terra & Sal",
        description: "eCommerce for a local gourmet products business. Variable products and regional logistics configured.",
        details: "Digitalization of a local Mallorca business. Development of a complete eCommerce with variable products and regional logistics management via WooCommerce.",
        role: "WordPress Specialist · WooCommerce",
        stack: ["WooCommerce", "Elementor", "PHP"],
      },
      {
        title: "IslaSetup",
        description: "Tech accessories online store in dark mode. Social proof integration and average order value strategies.",
        details: "Launch of a D2C brand on Shopify. Web architecture setup, conversion optimization (CRO) strategies and Dark Mode UX/UI design.",
        role: "Shopify Implementer · CRO",
        stack: ["Shopify", "Dawn Theme", "Liquid"],
      },
    ],
  },
  contact: {
    title: "Let's Talk!",
    subtitle: "Let's grab a virtual coffee — or a real one if you're in Mallorca.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project...",
    send: "Send Message",
  },
  footer: {
    credit: "Designed and developed by Santiago García G. © 2026",
  },
  caseStudy: {
    back: "← Back to Portfolio",
    role: "My Role",
    tech: "Technologies",
    goal: "Goal",
    problem: "The Problem",
    process: "The Process & UX",
    solution: "The Solution & Results",
    viewLive: "View Live Project ↗",
    cases: {
      "limpiezas-alicia": {
        title: "Limpiezas Alicia",
        subtitle: "Design and development of a service Landing Page focused on conversion and lead generation via WhatsApp.",
        role: "Front-End Development & UX",
        tech: "HTML5, CSS3, Vanilla JS",
        goal: "Lead Generation (B2C)",
        problem: "A cleaning services company in Mallorca needed to establish its digital presence from scratch. The challenge was not just creating an informational website, but building a direct sales tool. They needed a page that loaded extremely fast and whose main goal was to get the customer to contact via WhatsApp or form, eliminating friction in the decision process.",
        processIntro: "I decided to avoid heavy visual builders like Elementor for this project, opting for custom code (HTML/CSS/JS) to guarantee optimal performance (PageSpeed). At UX level, I structured the page following the classic conversion model:",
        processList: [
          "Clear Hero Section: Immediate value proposition ('We clean your space') and primary contact button.",
          "Social Proof: Inclusion of testimonials to build trust in a sector where letting someone into your home is an initial barrier.",
          "Information Architecture: Visually detailed services and clear coverage area section (Mallorca).",
        ],
        solutionText: "The result is a responsive landing page (Mobile First) that guides the user from service discovery to direct contact. Implementing floating WhatsApp buttons and a clean design with high contrasts improved readability on mobile devices, which account for 80% of service sector traffic.",
        url: "https://www.limpiezasalicia.com",
      },
      "terra-sal": {
        title: "Terra & Sal",
        subtitle: "Digitalization of a local Mallorca business. Development of a complete eCommerce with variable products and regional logistics via WooCommerce.",
        role: "WordPress Specialist",
        tech: "WooCommerce, Elementor",
        goal: "Local eCommerce (B2C)",
        problem: "Traditional businesses in Mallorca need to make the digital leap with online stores that are easy to manage. The challenge was creating a minimalist shopping experience for a catalog of artisan products (gourmet and ceramics), solving real technical problems like configuring shipping specific to the Balearic Islands and creating complex products with multiple options.",
        processIntro: "The store was developed in a local environment using WordPress as CMS and WooCommerce as the sales engine. Key implementations include:",
        processList: [
          "Variable Products: Configuration of custom attributes (flavors and sizes) with dynamic pricing.",
          "Regional Logistics: Creation of differentiated shipping zones (Balearics vs. Iberian Peninsula) and conditional free shipping rules.",
          "Design and Navigation: Use of visual builders to layout product grids maintaining a clean style that gives all prominence to product photography.",
        ],
        solutionText: "A functional store with complete catalog, configured payment gateways and differentiated shipping zones. The minimalist design with white spaces and legible typography allows a product-centered shopping experience.",
        url: "",
      },
      islasetup: {
        title: "IslaSetup",
        subtitle: "Launch of a D2C brand on Shopify. Web architecture setup, conversion optimization (CRO) strategies and Dark Mode UX/UI design.",
        role: "Shopify Implementer",
        tech: "Shopify OS 2.0 (Dawn)",
        goal: "D2C Conversion",
        problem: "Creating from scratch a niche online store (premium tech accessories) focused on the direct-to-consumer market. The goal was to move away from the generic look of base templates and build an immersive brand experience that would connect with programmers, designers and gamers, while maximizing conversion rate and average order value.",
        processIntro: "Using Shopify's Online Store 2.0 architecture and based on the Dawn theme, I applied current eCommerce best practices:",
        processList: [
          "Dark Mode UX: Deep color scheme configuration to achieve a dark interface that conveys modernity.",
          "Trust Architecture: Creation of structured menus, automated legal pages and dedicated guarantee sections.",
          "Conversion Optimization (CRO): Implementation of cross-selling (upselling) strategies and announcement bars to promote free shipping.",
          "Social Proof: Judge.me integration to enable and manage customer reviews with star ratings.",
        ],
        solutionText: "A fast, aesthetically attractive store ready to capture traffic. Native use of the block editor ensures the design is 100% responsive and maintains perfect performance scores on mobile devices.",
        url: "https://islasetup33.myshopify.com/",
      },
    },
  },
};

const translations = { es, en };

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  const toggleLocale = useCallback(() => setLocale((l) => (l === "es" ? "en" : "es")), []);
  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
