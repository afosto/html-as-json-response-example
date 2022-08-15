import Script from 'next/script';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import afosto from '../../afosto.config';

const formatLocale = locale =>
  locale
    .split('-')
    .map((chunk, idx) => (idx === 1 ? chunk.toUpperCase() : chunk))
    .join('_');

const ProductReviews = ({ sku, locale = 'nl-NL', shopId }) => {
  const trustedShopId = afosto.trustedShopIds[shopId];
  const elementRef = useRef(null);

  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(elementRef.current, true);
    }
  }, []);

  if (trustedShopId) {
    return (
      <>
        <Script id="trusted-shops-reviews" strategy="lazyOnload">
          {`
            _tsProductReviewsConfig = {
              tsid: '${trustedShopId}',
              element: '#Product_review_sticker',
              sku: ['${sku}'],
              variant: 'productreviews',
                  /* optional */
              borderColor: 'transparent',
              backgroundColor: '#ffffff',
              locale: '${formatLocale(locale)}',
              starColor: '#FFDC0F',
              commentBorderColor: '#dad9d5',
              commentHideArrow: false,
              richSnippets: 'on',
              starSize: '16px',
              ratingSummary: true,
              maxHeight: '0px',
              hideEmptySticker: false,
              filter: true,
            };
            var scripts = document.getElementsByTagName('SCRIPT'),
            me = scripts[scripts.length - 1];
            var _ts = document.createElement('SCRIPT');
            _ts.type = 'text/javascript';
            _ts.async = true;
            _ts.charset = 'utf-8';
            _ts.src ='//widgets.trustedshops.com/reviews/tsSticker/tsProductSticker.js';
            me.parentNode.insertBefore(_ts, me);
            _tsProductReviewsConfig.script = _ts;
          `}
        </Script>
        <div id="Product_review_sticker" />
      </>
    );
  }

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
      <div
        className="trustpilot-widget"
        data-locale={locale}
        data-template-id="544a426205dc0a09088833c6"
        data-businessunit-id="543bbbfb00006400057ae46b"
        data-style-height="400px"
        data-style-width="100%"
        data-theme="light"
        data-sku={sku}
        data-review-languages={locale.split('-')[0]}
        data-no-reviews="show"
        ref={elementRef}
      />
    </>
  );
};

ProductReviews.propTypes = {
  locale: PropTypes.string,
  sku: PropTypes.string.isRequired,
  shopId: PropTypes.number.isRequired,
};

ProductReviews.defaultProps = {
  locale: 'nl-NL',
};

export default ProductReviews;
