export interface CaseStudyItem {
  id: string;
  tag: string;
  client: string;
  title: string;
  before: string;
  after: string;
  mainMetric: {
    value: string;
    label: string;
  };
}

export interface CaseStudiesSectionData {
  badge: string;
  title: string;
  subtitle: string;
  cases: CaseStudyItem[];
}

export const caseStudiesData: CaseStudiesSectionData = {
  badge: "Casos reales",
  title: "Resultados concretos en el día a día",
  subtitle:
    "Así transformamos problemas cotidianos en operaciones fluidas y tranquilas.",
  cases: [
    {
      id: "logistica-norte",
      tag: "Transporte & Logística",
      client: "Expreso Austral",
      title: "Control de flota y despachos centralizado",
      before:
        "4 horas diarias perdidas respondiendo WhatsApps, cruzando planillas en Excel y resolviendo entregas perdidas.",
      after:
        "Una app simple para los choferes y un panel en vivo para la oficina. Todo el equipo termina su jornada a horario.",
      mainMetric: {
        value: "3.5 hs",
        label: "Recuperadas por día por operador",
      },
    },
    {
      id: "salud-turnos",
      tag: "Salud & Clínicas",
      client: "Centro Médico San Martín",
      title: "Autogestión de turnos y sincronización médica",
      before:
        "600 llamadas diarias colapsando las líneas y pacientes molestos por demoras en la atención.",
      after:
        "Portal web y turnero automático por WhatsApp. La recepción ahora recibe a los pacientes con calma.",
      mainMetric: {
        value: "70%",
        label: "De los turnos se coordinan solos las 24hs",
      },
    },
  ],
};
