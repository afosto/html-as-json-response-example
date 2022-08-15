import Script from 'next/script';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const TrustBox = ({ height, locale, noReviews, scrollToList, sku, templateId, theme, width }) => {
  const elementRef = useRef(null);
  const optionalElementProps = {
    ...(sku ? { 'data-sku': sku } : {}),
    ...(noReviews ? { 'data-no-reviews': noReviews } : {}),
    ...(scrollToList ? { 'data-scroll-to-list': scrollToList ? 'true' : 'false' } : {}),
  };

  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(elementRef.current, true);
    }
  }, []);

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
      <div
        ref={elementRef}
        className="trustpilot-widget"
        data-locale={locale}
        data-template-id={templateId}
        data-businessunit-id="543bbbfb00006400057ae46b"
        data-style-height={height}
        data-style-width={width}
        data-theme={theme}
        {...optionalElementProps}
      >
        <a
          href="https://nl.trustpilot.com/review/www.diamondsbyme.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
};

TrustBox.propTypes = {
  height: PropTypes.string,
  locale: PropTypes.string,
  noReviews: PropTypes.string,
  scrollToList: PropTypes.bool,
  sku: PropTypes.string,
  templateId: PropTypes.string.isRequired,
  theme: PropTypes.string,
  width: PropTypes.string,
};

TrustBox.defaultProps = {
  height: '120px',
  locale: 'nl-NL',
  noReviews: undefined,
  scrollToList: undefined,
  sku: undefined,
  theme: 'light',
  width: '250px',
};

export default TrustBox;
