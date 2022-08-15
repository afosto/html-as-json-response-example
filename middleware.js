import { NextResponse } from 'next/server';
import { i18n } from './next.config';

const RESERVED_PATHS = [
  '/api',
  '/blog',
  '/cart',
  '/checkout',
  '/education-center',
  '/kennisbank',
  '/datenbank',
  '/centre-de-connaissance',
  '/customer-service',
  '/klantenservice',
  '/kundenservice',
  '/service-clients',
  '/slice-simulator',
];
const ALLOWED_EXTENSIONS = ['.htm', '.html'];
const ALLOWED_TYPES = ['collection', 'page', 'product'];

// eslint-disable-next-line consistent-return,import/prefer-default-export
export const middleware = async request => {
  const { locale, origin, pathname: slug } = request.nextUrl;

  const isReservedPath = RESERVED_PATHS.some(path => slug.startsWith(path));
  const isRoot = slug === '/';
  const [extension] = slug.match(/\.(.*)$/) ?? [];

  if (!isRoot && !isReservedPath && (!extension || ALLOWED_EXTENSIONS.includes(extension))) {
    const response = await fetch(`${origin}/api/internal/type`, {
      method: 'POST',
      body: JSON.stringify({ slug, locale }),
    });
    const slugResponse = await response.json();
    const { type } = slugResponse || {};

    if (ALLOWED_TYPES.includes(type)) {
      const url = request.nextUrl.clone();
      url.pathname = `${locale === i18n.defaultLocale ? `${locale}/` : ''}${type}${slug}`;
      return NextResponse.rewrite(url);
    }
  }
};
