export const trust = [
  "Diagnóstico inicial sin costo",
  "Propuesta itemizada",
  "Asesoría personalizada",
];

export interface Tramites {
  slug: string;
  name: string;
}

export const risks = [
  {
    title: "Suspensión y sanciones",
    text: "Operar sin la autorización correspondiente expone al establecimiento a sanciones y a la suspensión de actividades.",
  },
  {
    title: "Apertura retrasada",
    text: "Cada mes sin licencia es un mes sin atender pacientes ni facturar, con renta, nómina y equipo ya pagados.",
  },
  {
    title: "Retrabajo en obra",
    text: "Si la infraestructura no cumple, corregirla después cuesta mucho más que hacerla bien desde el diseño.",
  },
  {
    title: "Riesgo para tus pacientes",
    text: "La norma existe para proteger a quien se atiende en tu establecimiento. Cumplirla también te protege a ti.",
  },
];

export const steps = [
  {
    title: "Diagnóstico inicial",
    text: "Nos cuentas qué servicios ofreces y en qué etapa estás. Identificamos qué trámite necesitas y en qué orden.",
  },
  {
    title: "Revisión del expediente e infraestructura",
    text: "Validamos documentos y condiciones físicas contra la norma, antes de que lo haga la autoridad.",
  },
  {
    title: "Ingreso del trámite",
    text: "Presentamos el expediente completo y te damos tu folio de seguimiento.",
  },
  {
    title: "Seguimiento y requerimientos",
    text: "Atendemos prevenciones y observaciones de la autoridad para no perder tiempo.",
  },
  {
    title: "Resolución y siguientes pasos",
    text: "Te entregamos la resolución y te orientamos sobre vigencias y actualizaciones.",
  },
];

export const faq = [
  {
    question: "¿Qué es una licencia sanitaria COFEPRIS y cuándo la necesito?",
    answer:
      "Es la autorización de la autoridad sanitaria para que un establecimiento opere ciertos servicios de salud. Cuál necesitas depende de lo que ofrezcas: cirugía, rayos X, servicios de sangre, hemodiálisis, entre otros. En el diagnóstico inicial te decimos exactamente cuál aplica a tu caso.",
  },
  {
    question: "¿Qué trámites COFEPRIS gestionan?",
    answer:
      "Permiso sanitario de construcción, licencia para actos quirúrgicos y obstétricos, fuentes de radiación (rayos X), bancos de sangre, servicios de transfusión y unidades de hemodiálisis.",
  },
  {
    question: "¿En qué se diferencian de una gestoría tradicional?",
    answer:
      "Además de tramitar, somos una empresa de ingeniería hospitalaria. Si tu instalación de gases medicinales, eléctrica o climatización no cumple, nosotros la corregimos. No tienes que coordinar a un gestor y a un contratista por separado.",
  },
  {
    question: "¿Cuánto tarda un trámite?",
    answer:
      "Depende del tipo de licencia, de qué tan completo esté tu expediente y de si la autoridad emite prevenciones. En el diagnóstico inicial te damos un estimado para tu caso concreto.",
  },
  {
    question: "¿Atienden fuera de la Ciudad de México?",
    answer: "Sí. Atendemos establecimientos en toda la República Mexicana.",
  },
  {
    question: "¿Cuánto cuesta el servicio?",
    answer:
      "Depende del trámite y de la complejidad de tu establecimiento. El diagnóstico inicial no tiene costo y la propuesta es itemizada, para que sepas qué incluye cada concepto.",
  },
];

export const tramitesServices: Tramites[] = [
  {
    slug: "permiso-sanitario-de-construccion",
    name: "Permiso Sanitario de Construcción",
  },
  {
    slug: "licencia-sanitaria-actos-quirurgicos",
    name: "Licencia Sanitaria para Actos Quirúrgicos",
  },
  {
    slug: "licencia-sanitaria-fuentes-de-radiacion",
    name: "Licencia COFEPRIS para Rayos X",
  },
  {
    slug: "licencia-sanitaria-bancos-de-sangre",
    name: "Licencia COFEPRIS para Bancos de Sangre",
  },
  {
    slug: "licencia-sanitaria-servicio-de-transfusion",
    name: "Licencia para Servicio de Transfusión Hospitalaria",
  },
  {
    slug: "licencia-sanitaria-hemodialisis",
    name: "Licencia Sanitaria para tu Unidad de Hemodiálisis",
  },
];
