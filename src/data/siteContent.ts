import { loadJSON, saveJSON } from '../lib/storage';

export type NavLink = { label: string; href: string; active?: boolean };

export type SiteContent = {
  brand: { name: string; suffix: string };
  nav: NavLink[];
  contact: { label: string };
  hero: {
    titleLines: string[];
    subtitle: string;
    cta: string;
  };
};

const DEFAULT_CONTENT: SiteContent = {
  brand: { name: 'Kaven', suffix: 'Ecom' },
  nav: [
    { label: 'Sobre', href: '#sobre', active: true },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Cases', href: '#cases' },
  ],
  contact: { label: 'Fazer diagnóstico gratuito' },
  hero: {
    titleLines: [
      'Seu negócio pode faturar',
      'muito mais do que fatura hoje.'
    ],
    subtitle:
      'Estruturamos a presença online de marcas que já vendem, mas dependem de processos manuais e indicações que não permitem escalar.',
    cta: 'Fazer diagnóstico gratuito →',
  },
};

const STORAGE_KEY = 'site-content';

export function getSiteContent(): SiteContent {
  return loadJSON<SiteContent>(STORAGE_KEY, DEFAULT_CONTENT);
}

export function setSiteContent(content: SiteContent): void {
  saveJSON(STORAGE_KEY, content);
}

export function ensureSiteContentSeeded(): SiteContent {
  saveJSON(STORAGE_KEY, DEFAULT_CONTENT);
  return DEFAULT_CONTENT;
}
