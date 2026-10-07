export interface ServiceItem {
  id: string;
  icon: "layout" | "smartphone" | "zap";
  title: string;
  idealFor: string;
  description: string;
  benefits: string[];
}

export interface ServicesSectionData {
  badge: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesData: ServicesSectionData = {
  badge: "Servicios",
  title: "¿Cómo podemos ayudarte?",
  subtitle:
    "Soluciones digitales directas al grano, diseñadas para resolver tus dolores operativos reales.",
  services: [
    {
      id: "sistemas-gestion",
      icon: "layout",
      title: "Sistemas & Plataformas de Gestión",
      idealFor: "Ideal para centralizar tu operación en un solo lugar.",
      description:
        "Paneles internos y plataformas web para gestionar ventas, inventario, clientes y tareas de tu equipo sin planillas desordenadas.",
      benefits: [
        "Toda tu información ordenada y accesible en tiempo real",
        "Control de accesos y permisos por rol o empleado",
        "Diseño claro y simple que cualquier persona aprende a usar rápido",
      ],
    },
    {
      id: "apps-moviles",
      icon: "smartphone",
      title: "Aplicaciones Web & Móviles",
      idealFor: "Ideal para dar una experiencia moderna a tus clientes o equipo en la calle.",
      description:
        "Apps rápidas e intuitivas para celulares y computadoras que agilizan pedidos, turnos, trámites o trabajo de campo.",
      benefits: [
        "Funciona en cualquier dispositivo (Android, iPhone y PC)",
        "Modo offline para trabajar en depósitos o zonas sin señal",
        "Notificaciones directas y carga de datos ultra rápida",
      ],
    },
    {
      id: "automatizacion",
      icon: "zap",
      title: "Automatización & Conexión de Sistemas",
      idealFor: "Ideal para eliminar tareas repetitivas y aburridas.",
      description:
        "Conectamos tus programas actuales (facturación, WhatsApp, bancos, emails) para que los datos viajen solos sin errores humanos.",
      benefits: [
        "Ahorra decenas de horas semanales en carga manual",
        "Emisión automática de comprobantes y avisos a clientes",
        "Cero riesgo de olvidos o errores de tipeo",
      ],
    },
  ],
};
