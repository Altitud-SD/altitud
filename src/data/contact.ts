export interface ContactData {
  badge: string;
  title: string;
  subtitle: string;
  options: string[];
  directWhatsappText: string;
  directWhatsappUrl: string;
  directCalendarText: string;
  directCalendarUrl: string;
  trustNotes: string[];
}

export const contactData: ContactData = {
  badge: "Contacto directo",
  title: "Cuéntanos sobre tu proyecto",
  subtitle:
    "Respondemos en menos de 24 horas hábiles con una propuesta inicial clara y sin compromiso.",
  options: [
    "Sistema a Medida",
    "App Web o Móvil",
    "Automatización",
    "Modernizar sistema actual",
  ],
  directWhatsappText: "Escribir directo por WhatsApp",
  directWhatsappUrl: "https://wa.me/5491100000000?text=Hola%20Altitud,%20quiero%20consultar%20por%20un%20proyecto",
  directCalendarText: "O agendar una videollamada de 15 min",
  directCalendarUrl: "https://calendar.google.com",
  trustNotes: [
    "Respuesta en < 24hs",
    "Presupuesto claro y cerrado",
    "Confidencialidad garantizada",
  ],
};
