import BackButton from '@components/BackButton';
import Breadcrumbs from '@components/Breadcrumbs';
import ProductDivider from '@components/ProductDivider';
import ProductHelpBlock from '@components/ProductHelpBlock';
import ProductInformation from '@components/ProductInformation';
import ProductLayout from '@components/ProductLayout';
import ProductShopMore from '@components/ProductShopMore';
import ProductReviews from '@components/ProductReviews';
import ProductWhatYouGet from '@components/ProductWhatYouGet';
import Diamond from '@icons/Diamond';
import Heart from '@icons/Heart';
import client from '@lib/client';
import getLayoutData from '@lib/getLayoutData';
import getProductData from '@lib/getProductData';
import { Box, IconButton, Typography } from '@mui/material';
import Image from '@components/Image';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Product = ({
  breadcrumbs,
  customDesign,
  layoutData,
  helpBlock,
  sku,
  usps,
  whatYouGet,
  shopMoreLinks,
}) => {
  const { locale } = useRouter();
  const { currency, shopId } = layoutData?.properties || {};
  const { hrefLang } = layoutData || {};

  return (
    <>
      <NextSeo
        languageAlternates={(hrefLang || []).reduce(
          (acc, alt) => [
            ...acc,
            {
              hrefLang: alt?.locale,
              href: alt.href,
            },
          ],
          [],
        )}
      />
      <ProductLayout>
        <Box gridArea="breadcrumbs" display="flex" alignItems="center" my={3}>
          <BackButton />
          <Breadcrumbs items={breadcrumbs} typographyProps={{ color: 'grayStone.700' }} />
        </Box>
        <Box gridArea="configurator">
          {customDesign && (
            <NextLink href={customDesign?.link}>
              <a>
                <Image
                  src={customDesign?.image?.url}
                  width={customDesign?.image?.dimensions?.width}
                  height={customDesign?.image?.dimensions?.height}
                />
              </a>
            </NextLink>
          )}
        </Box>
        <Box gridArea="images" position="relative">
          <IconButton edge="start" sx={{ position: 'absolute', top: 8, left: 20 }}>
            <Heart />
          </IconButton>
        </Box>
        <Box gridArea="form" position="relative">
          <Box
            id="zoom-container"
            sx={theme => ({
              position: 'absolute',
              zIndex: 5,
              '> div': { border: `1px solid ${theme.palette.grey[300]}` },
            })}
          />
          <ProductInformation currency={currency} shopId={shopId} sku={sku} />
          {usps.length > 0 && (
            <Box my={1.5}>
              {usps.map(usp => (
                <Box key={usp.message} display="flex" alignItems="center" gap={0.5}>
                  <Diamond sx={{ fontSize: 16 }} />
                  <Typography variant="bodyMedium">{usp.message}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box gridArea="info">
          <ProductDivider mt={4} mb={2} />
          <ProductDivider mt={4} mb={2} />
          <ProductHelpBlock
            title={helpBlock?.title}
            text={helpBlock?.text}
            phoneNumber={helpBlock?.phoneNumber}
            emailLabel={helpBlock?.email}
            emailAddress={helpBlock?.emailAddress}
          />
          <ProductDivider mt={4} mb={2} />
          <ProductWhatYouGet title={whatYouGet?.title} content={whatYouGet?.content} />
          <ProductReviews sku={sku} locale={locale} shopId={shopId} />
        </Box>
        <Box gridArea="shopMore">
          <ProductShopMore links={shopMoreLinks} />
        </Box>
      </ProductLayout>
    </>
  );
};

export const getServerSideProps = async ({ locale, query }) => {
  const { slug, ...queryParams } = query || {};

  const responses = await Promise.allSettled([client(locale).getPage(slug.join('/'), queryParams)]);
  const [afostoResponse] = responses;
  const response = afostoResponse?.value?.data || {};
  const layoutData = getLayoutData(response, locale);
  const productData = getProductData(locale, response);
  const configuration = null;

  return {
    props: {
      locale,
      layoutData,
      configuration,
      ...productData,
    },
  };
};

Product.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
  // eslint-disable-next-line react/forbid-prop-types
  // eslint-disable-next-line react/forbid-prop-types
  customDesign: PropTypes.object,
  dummyRingData: PropTypes.shape({
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    cardMoreInfoLabel: PropTypes.string,
    cardMoreInfoLink: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    dialogImage: PropTypes.object,
    dialogTitle: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    dialogText: PropTypes.arrayOf(PropTypes.object),
  }),
  helpBlock: PropTypes.shape({
    title: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    text: PropTypes.arrayOf(PropTypes.object),
    email: PropTypes.string,
    emailAddress: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
  whatYouGet: PropTypes.shape({
    title: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    content: PropTypes.arrayOf(PropTypes.object),
  }),
  // eslint-disable-next-line react/forbid-prop-types
  layoutData: PropTypes.object,
  shopMoreLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  sizingGuide: PropTypes.shape({
    title: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    text: PropTypes.arrayOf(PropTypes.object),
  }),
  sku: PropTypes.string,
  usps: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

Product.defaultProps = {
  breadcrumbs: [],
  customDesign: {},
  dummyRingData: {},
  helpBlock: {},
  layoutData: {},
  whatYouGet: {},
  shopMoreLinks: [],
  sizingGuide: {},
  sku: null,
  usps: [],
};

export default Product;
