import Layout from '@components/Layout';
import { CacheProvider } from '@emotion/react';
import {
  createTheme,
  CssBaseline,
  // Link,
  ThemeProvider,
} from '@mui/material';
import { useRouter } from 'next/router';
import { GoogleAnalytics, usePageViews, event } from 'nextjs-google-analytics';
import PropTypes from 'prop-types';
import createEmotionCache from '@utils/createEmotionCache';
import { IntlProvider } from 'react-intl';
// import NextLink from 'next/link';
// import { PrismicProvider } from '@prismicio/react';
// import { PrismicPreview } from '@prismicio/next';
import customTheme from '../styles/theme';
import english from '../translations/compiled-locales/en-us.json';
import dutch from '../translations/compiled-locales/nl-nl.json';
import belgian from '../translations/compiled-locales/nl-be.json';
import french from '../translations/compiled-locales/fr-fr.json';
import german from '../translations/compiled-locales/de-de.json';
// import { linkResolver, repositoryName } from '../prismicio';

const clientSideEmotionCache = createEmotionCache();
const theme = createTheme(customTheme);

const messages = {
  'nl-nl': dutch,
  'nl-be': belgian,
  'fr-fr': french,
  'de-de': german,
  'en-us': english,
};

// eslint-disable-next-line react/prop-types
// const InternalLink = ({ href, children, ...props }) => (
//   <NextLink href={href} passHref>
//     <Link {...props}>{children}</Link>
//   </NextLink>
// );

// eslint-disable-next-line react/prop-types
// const ExternalLink = ({ children, ...props }) => <Link {...props}>{children}</Link>;

const MyApp = ({ Component, emotionCache, pageProps }) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en-us'];

  const getLayout = Component.getLayout || (page => <Layout {...pageProps}>{page}</Layout>);

  usePageViews();

  return (
    <>
      <GoogleAnalytics strategy="afterInteractive" />
      {/* <PrismicProvider */}
      {/*  linkResolver={linkResolver} */}
      {/*  internalLinkComponent={InternalLink} */}
      {/*  externalLinkComponent={ExternalLink} */}
      {/* > */}
      {/*  <PrismicPreview repositoryName={repositoryName}> */}
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <IntlProvider locale={shortLocale} messages={messages[locale]} onError={() => null}>
                {getLayout(<Component {...pageProps} />, pageProps)}
              </IntlProvider>
            </ThemeProvider>
          </CacheProvider>
      {/*  </PrismicPreview> */}
      {/* </PrismicProvider> */}
    </>
  );
};

export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  emotionCache: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
