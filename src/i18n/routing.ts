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
    '/team': {
      en: '/team',
      es: '/equipo',
    },
    '/hobbas': {
      en: '/hobbas',
      es: '/hobbas',
    },
    '/redirect': '/redirect',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
