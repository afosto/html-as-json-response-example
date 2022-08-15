import TrustBox from '@components/TrustBox';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';
import afosto from '../../afosto.config';

const TrustProductStickerSummary = ({ shopId, sku }) => {
  const elementRef = useRef(null);
  const trustedShopId = afosto.trustedShopIds[shopId];

  if (trustedShopId) {
    return (
      <>
        <Script
          src="https://widgets.trustedshops.com/reviews/tsSticker/tsProductStickerSummary.js"
          strategy="lazyOnload"
          onLoad={() => {
            // eslint-disable-next-line new-cap
            const summaryBadge = new window.productStickerSummary();
            summaryBadge.showSummary({
              tsId: trustedShopId,
              sku: [sku],
              element: '#trusted-shops-summary',
              starColor: '#FFDC0F',
              starSize: '14px',
              fontSize: '12px',
              showRating: true,
              scrollToReviews: true,
              enablePlaceholder: true,
            });
          }}
        />
        <div ref={elementRef} id="trusted-shops-summary" />
      </>
    );
  }

  return (
    <TrustBox
      templateId="54d39695764ea907c0f34825"
      height="20px"
      width="100%"
      sku={sku}
      noReviews="show"
      scrollToList
    />
  );
};

TrustProductStickerSummary.propTypes = {
  shopId: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
};

export default TrustProductStickerSummary;
