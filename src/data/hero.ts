export interface HeroMetric {
  value: string;
  suffix?: string;
  label: string;
}

export interface HeroData {
  badge: string;
  headline: {
    start: string;
    highlight: string;
    end: string;
  };
  subtitle: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  metrics: HeroMetric[];
}

export const heroData: HeroData = {
  badge: "Software a medida • Simple y humano",
  headline: {
    start: "Desarrollamos el software que tu empresa necesita para ",
    highlight: "trabajar mejor y crecer",
    end: ".",
  },
  subtitle:
    "Eliminamos las planillas eternas y los procesos manuales con plataformas web y aplicaciones a medida, intuitivas y fáciles de usar.",
  ctaPrimary: {
    label: "Pedir propuesta gratuita",
    href: "#contacto",
  },
  ctaSecondary: {
    label: "Ver servicios",
    href: "#servicios",
  },
  metrics: [
    {
      value: "+15",
      suffix: "hs/sem",
      label: "Ahorradas por persona en tareas manuales",
    },
    {
      value: "100",
      suffix: "%",
      label: "Adaptado a tus procesos y tu equipo",
    },
    {
      value: "0",
      suffix: " errores",
      label: "En carga y sincronización de datos",
    },
  ],
};
