export interface NavService {
  slug: string;
  name: string;
  icon: string;
}

export const navServices: NavService[] = [
  { slug: 'gases-medicinales', name: 'Gases Medicinales', icon: 'Wind' },
  { slug: 'aire-acondicionado-grado-medico', name: 'Aire Acondicionado Grado Médico', icon: 'Snowflake' },
  { slug: 'instalacion-electrica-hospitalaria', name: 'Instalación Eléctrica Hospitalaria', icon: 'Zap' },
  { slug: 'piso-vinilico-conductivo', name: 'Pisos Vinílicos', icon: 'LayoutGrid' },
  { slug: 'cumplimiento-normativo', name: 'Cumplimiento Normativo', icon: 'ShieldCheck' },
];

export const subServices: Record<string, { slug: string; name: string }[]> = {
  'instalacion-electrica-hospitalaria': [
    { slug: 'tableros-electricos', name: 'Tableros Eléctricos' },
    { slug: 'tierra-fisica', name: 'Tierra Física' },
    { slug: 'sistemas-de-respaldo', name: 'Sistemas de Respaldo' },
  ],
};

export const contact = {
  whatsappNumber: '5215519074304',
  whatsappDefaultMessage: 'Hola, quiero información sobre sus servicios de instalaciones hospitalarias.',
  email: 'contacto@arqui-medica.com',
  phone: '+52 55 1907 4304'
};

export const social = {
  facebook: 'https://www.facebook.com/arquimedica.mx',
  instagram: 'https://www.instagram.com/arquimedica.mx/'
};

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || contact.whatsappDefaultMessage);
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}
