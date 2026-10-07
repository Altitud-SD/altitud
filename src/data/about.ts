export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValuePillar {
  icon: "message" | "lock" | "users";
  title: string;
  description: string;
}

export interface AboutSectionData {
  badge: string;
  title: string;
  subtitle: string;
  pillars: ValuePillar[];
  processTitle: string;
  steps: ProcessStep[];
}

export const aboutData: AboutSectionData = {
  badge: "Nuestra forma de trabajo",
  title: "Tecnología sin rodeos ni complicaciones",
  subtitle:
    "Trabajamos con un modelo simple y cercano, enfocado en darte soluciones que puedas aprovechar desde el primer día.",
  pillars: [
    {
      icon: "message",
      title: "Trato directo y sin intermediarios",
      description:
        "Hablas mano a mano con quienes diseñan y programan tu sistema. Sin tecnicismos confusos.",
    },
    {
      icon: "lock",
      title: "El código es 100% tuyo",
      description:
        "Sin ataduras ni licencias abusivas. Eres dueño total de tu software, datos y accesos.",
    },
    {
      icon: "users",
      title: "Acompañamiento y capacitación",
      description:
        "Enseñamos a tu equipo a usar el sistema con paciencia y estamos disponibles para cualquier duda.",
    },
  ],
  processTitle: "Cómo lo hacemos realidad en 3 pasos",
  steps: [
    {
      number: "1",
      title: "Conversación & Diagnóstico",
      description:
        "Escuchamos cómo funciona tu negocio y definimos juntos la forma más simple de resolverlo.",
    },
    {
      number: "2",
      title: "Diseño & Desarrollo Ágil",
      description:
        "Ves avances reales cada 2 semanas y pruebas el sistema antes de que salga a producción.",
    },
    {
      number: "3",
      title: "Lanzamiento & Capacitación",
      description:
        "Ponemos todo en marcha de forma segura y capacitamos a tu equipo paso a paso.",
    },
  ],
};
