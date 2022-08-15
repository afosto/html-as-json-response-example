import Script from 'next/script';
import PropTypes from 'prop-types';
import afosto from '../../afosto.config';

const TrustedShopsBox = ({ shopId }) => {
  const trustedShopId = afosto.trustedShopIds[shopId];

  return (
    <>
      <Script strategy="lazyOnload" id="trusted-shops-footer-script">
        {`
        const _tsid = '${trustedShopId}';
        _tsConfig = {
          'yOffset': '0', /* offset from page bottom */
          'variant': 'custom_reviews', /* default, reviews, custom, custom_reviews */
          'customElementId': 'trusted-shops-footer', /* required for variants custom and custom_reviews */
          'trustcardDirection': '', /* for custom variants: topRight, topLeft, bottomRight, bottomLeft */
          'customBadgeWidth': '220', /* for custom variants: 40 - 90 (in pixels) */
          'customBadgeHeight': '110', /* for custom variants: 40 - 90 (in pixels) */
          'disableResponsive': 'true', /* deactivate responsive behaviour */
          'disableTrustbadge': 'false' /* deactivate trustbadge */
        };
        var _ts = document.createElement('script');
        _ts.type = 'text/javascript';
        _ts.charset = 'utf-8';
        _ts.async = true;
        _ts.src = '//widgets.trustedshops.com/js/' + _tsid + '.js';
        var __ts = document.getElementsByTagName('script')[0];
        __ts.parentNode.insertBefore(_ts, __ts);
      `}
      </Script>
      <div id="trusted-shops-footer" />
    </>
  );
};

TrustedShopsBox.propTypes = {
  shopId: PropTypes.number.isRequired,
};

TrustedShopsBox.defaultProps = {};

export default TrustedShopsBox;
