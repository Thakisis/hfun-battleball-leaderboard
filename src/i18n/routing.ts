import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/sign-in': '/sign-in',
    '/sign-up': '/sign-up',
    '/forgot': '/forgot',
    '/catalog/[itemgrade]': {
      en: '/catalog/[itemgrade]',
      es: '/catalogo/[itemgrade]',
    },
    '/catalog/compare': {
      en: '/catalog/compare',
      es: '/catalogo/comparar',
    },
    '/catalog/calculate': {
      en: '/catalog/calculate',
      es: '/catalogo/calculadora',
    },
    '/catalog': {
      en: '/catalog',
      es: '/catalogo',
    },
    '/leaderboard': {
      en: '/leaderboard',
      es: '/clasificaciones',
    },
    '/finder': {
      en: '/finder',
      es: '/buscador',
    },
    '/staff': {
      en: '/staff',
      es: '/staff',
    },
    '/redirect': '/redirect',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
