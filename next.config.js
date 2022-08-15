module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/kennisbank/:path*',
          destination: '/education-center/:path*',
        },
        {
          source: '/datenbank/:path*',
          destination: '/education-center/:path*',
        },
        {
          source: '/centre-de-connaissance/:path*',
          destination: '/education-center/:path*',
        },
        {
          source: '/klantenservice/:path*',
          destination: '/customer-service/:path*',
        },
        {
          source: '/kundenservice/:path*',
          destination: '/customer-service/:path*',
        },
        {
          source: '/service-clients/:path*',
          destination: '/customer-service/:path*',
        },
      ],
    };
  },
  images: {
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'images.prismic.io',
      'static.diamondsbyme.com',
      'cdn2.diamondsbyme.com',
    ],
  },
  i18n: {
    locales: ['en-gb', 'nl-nl', 'nl-be', 'en-us', 'fr-fr', 'de-de'],
    defaultLocale: 'nl-nl',
    localeDetection: false,
  },
};
