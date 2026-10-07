export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  availability: {
    isAvailable: boolean;
    statusText: string;
    subText: string;
  };
  contact: {
    email: string;
    location: string;
    whatsappUrl: string;
    calendlyUrl: string;
  };
  navigation: NavItem[];
  footer: {
    description: string;
    colophon: string;
    quote: string;
    legalLinks: NavItem[];
  };
}

export const siteConfig: SiteConfig = {
  brandName: "ALTITUD",
  brandTagline: "Estudio de Software & Soluciones Digitales",
  availability: {
    isAvailable: true,
    statusText: "Agenda abierta Q4",
    subText: "Tomamos un número selecto de proyectos por trimestre para garantizar dedicación total.",
  },
  contact: {
    email: "hola@altitud.dev",
    location: "Buenos Aires, Argentina — Para todo el mundo",
    whatsappUrl: "https://wa.me/5491100000000?text=Hola%20Altitud,%20quiero%20conversar%20sobre%20un%20proyecto",
    calendlyUrl: "https://calendar.google.com",
  },
  navigation: [
    { label: "Cómo ayudamos", href: "#servicios" },
    { label: "Historias reales", href: "#casos" },
    { label: "Nuestro manifiesto", href: "#quienes-somos" },
    { label: "El proceso", href: "#proceso" },
  ],
  footer: {
    description:
      "Desarrollamos tecnología con alma, sensibilidad de diseño y rigor de ingeniería para mejorar la vida diaria de quienes la utilizan.",
    colophon: "Diseñado y programado con pasión desde Argentina 🇦🇷",
    quote: "«El buen software no se nota porque funciona; se siente porque hace tu día más liviano.»",
    legalLinks: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Ética de Datos", href: "#" },
    ],
  },
};
