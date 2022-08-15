import Footer from '@components/Footer';
import Header from '@components/Header';
import { ORGANIZATION_JSON_LD_SCHEMAS } from '@components/Layout/constants';
import MobileNavigation from '@components/MobileNavigation';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { NextSeo, OrganizationJsonLd, SiteLinksSearchBoxJsonLd } from 'next-seo';
import afosto from '../../afosto.config';

const Layout = ({ children, layoutData, locale }) => {
  const router = useRouter();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const handleOpenMobileNav = () => {
    setMobileNavIsOpen(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNavIsOpen(false);
  };

  const { menus, properties, blocks, sliders, hrefLang, seo } = layoutData || {};
  const {
    mainMenu,
    footerAbout,
    footerKnowledgeBase,
    footerBottom,
    footerCustomerService,
    mobileMenuFooter,
    mobileExtra,
  } = menus || {};
  const {
    phoneNumber,
    customerServiceEmail,
    siteName,
    paymentMethods,
    shopId,
    currency,
    valutaOptions,
  } = properties || {};
  const { notificationBar, footerUsps, customerServiceFooter } = blocks || {};
  const { menuIcons } = sliders || {};
  const localeDomain = afosto.localeDomains[locale] || afosto.defaultDomain;

  useEffect(() => {
    const handleRouteChange = () => {
      handleCloseMobileNav();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <NextSeo
        title={seo?.title}
        description={seo?.description}
        noindex={seo?.noindex}
        nofollow={seo?.nofollow}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: seo?.keywords,
          },
        ]}
      />
      <OrganizationJsonLd
        type="Organization"
        name="DiamondsByMe"
        url={localeDomain}
        sameAs={ORGANIZATION_JSON_LD_SCHEMAS[locale]?.sameAs || []}
      />
      <SiteLinksSearchBoxJsonLd
        url={localeDomain}
        potentialActions={[
          {
            target: `${localeDomain}?q={search_term_string}`,
            queryInput: 'search_term_string',
          },
        ]}
      />
      <Header
        menuItems={mainMenu?.items}
        phoneNumber={phoneNumber}
        usp={notificationBar}
        currency={currency}
        valutaOptions={valutaOptions}
        hrefLang={hrefLang}
        shopId={shopId}
        mobileNavIsOpen={mobileNavIsOpen}
        handleCloseMobileNav={handleCloseMobileNav}
        handleOpenMobileNav={handleOpenMobileNav}
      />
      <MobileNavigation
        mainMenu={mainMenu?.items}
        open={mobileNavIsOpen}
        onClose={handleCloseMobileNav}
        secondaryMenu={mobileExtra}
        contactMenu={mobileMenuFooter}
        menuIcons={menuIcons}
        hrefLang={hrefLang}
        currentLocale={locale}
      />
      {children}
      <Footer
        siteName={siteName}
        usps={footerUsps}
        menus={[
          ...(footerCustomerService ? [footerCustomerService] : []),
          ...(footerAbout ? [footerAbout] : []),
          ...(footerKnowledgeBase ? [footerKnowledgeBase] : []),
        ]}
        bottomMenu={footerBottom?.items}
        phoneNumber={phoneNumber}
        customerServiceEmail={customerServiceEmail}
        openingHours={customerServiceFooter}
        locale={locale}
        paymentMethods={paymentMethods}
        shopId={shopId}
      />
    </>
  );
};

Layout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  locale: PropTypes.string,
  layoutData: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    menus: PropTypes.object,
    properties: PropTypes.shape({
      phoneNumber: PropTypes.string,
    }),
    // eslint-disable-next-line react/forbid-prop-types
    blocks: PropTypes.object,
  }),
};

Layout.defaultProps = {
  children: undefined,
  locale: undefined,
  layoutData: {},
};

export default Layout;
