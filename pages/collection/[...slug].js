import ActiveFilters from '@components/ActiveFilters';
import Filters from '@components/Filters';
import MultipleSizesExplanation from '@components/MultipleSizesExplanation';
import cache from '@lib/cache';
import { PrismicRichText } from '@prismicio/react';
import { useRouter } from 'next/router';
import React from 'react';
import { NextSeo } from 'next-seo';
import ItemsPerPage from '@components/ItemsPerPage';
import PageBanner from '@components/PageBanner';
import ProductCard from '@components/ProductCard';
import ProductGrid, {
  ProductGridImage,
  ProductGridPagination,
  ProductGridUsp,
} from '@components/ProductGrid';
import RingStyles from '@components/RingStyles';
import client from '@lib/client';
import getCollectionData from '@lib/getCollectionData';
import getLayoutData from '@lib/getLayoutData';
import { Box, Container, Divider, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import afosto from '../../afosto.config';
import { createClient } from '../../prismicio';

const Collection = ({
  activeFilterOptions,
  banner,
  breadcrumbs,
  content,
  filters,
  gridImage,
  localeDomain,
  pagination,
  products,
  seo,
  ringStyles,
  title,
  usps,
  layoutData,
}) => {
  const { hrefLang } = layoutData || {};
  const router = useRouter();
  const { locale } = router;
  const url = `${localeDomain.substring(0, localeDomain.length - 1)}${router.asPath}`;

  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          title: seo.title,
          description: seo.description,
          site_name: 'DiamondsByMe',
          images: [
            {
              url: `${localeDomain}favicon.ico`,
            },
          ],
          url,
          locale,
        }}
        twitter={{
          cardType: 'summary',
          site: url,
        }}
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
      <PageBanner banner={banner} breadcrumbs={breadcrumbs} title={title} />
      <Container>
        {ringStyles.length > 0 && <RingStyles ringStyles={ringStyles} />}
        <Box display="flex" justifyContent={{ sm: 'space-between' }} mt={2.5} gap={2.5}>
          <Filters activeFilterOptions={activeFilterOptions} filters={filters} />
          <MultipleSizesExplanation />
          <ItemsPerPage itemsPerPage={pagination.itemsPerPage} />
        </Box>
        {activeFilterOptions.length > 0 && (
          <Box mt={2}>
            <ActiveFilters activeFilterOptions={activeFilterOptions} />
          </Box>
        )}
        <ProductGrid>
          {products.map((product, idx) => {
            const uspIndex = (idx + 1) / 4 - 1;

            return (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
                {!!usps.length &&
                  idx > 0 &&
                  idx + 1 < products.length &&
                  !((idx + 1) % 4) &&
                  usps[uspIndex] && <ProductGridUsp usp={usps[uspIndex]} />}
              </React.Fragment>
            );
          })}
          {!!gridImage && <ProductGridImage gridImage={gridImage} />}
        </ProductGrid>
        <Divider sx={{ my: 2.5 }} />
        <Box display="flex" justifyContent="flex-end" mb={2.5}>
          <ProductGridPagination pagination={pagination} />
        </Box>
        {content && (
          <Grid justifyContent="center" container>
            <Grid item xs={12} md={10} lg={8} xl={6}>
              <PrismicRichText field={content} />
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ locale, query, previewData }) => {
  const prismicClient = createClient({ previewData });
  const localeDomain = afosto.localeDomains[locale] || afosto.defaultDomain;
  const { slug, ...queryParams } = query || {};
  const queryString =
    Object.keys(queryParams).length > 0 ? `?${new URLSearchParams(queryParams).toString()}` : '';
  const pageResponsePromise = cache.fetch(
    cache.getCacheKeyForUrl(`${slug.join('/')}${queryString}`, 'data', 'dbm'),
    async () => {
      const pageResponse = await client(locale).getPage(slug.join('/'), queryParams);
      return pageResponse?.data;
    },
    15 * 60,
  );
  const responses = await Promise.allSettled([
    prismicClient.getByUID('collection-page', slug.join('/'), { lang: locale }),
    pageResponsePromise,
  ]);
  const [prismicResponse, afostoResponse] = responses;

  const pageData = prismicResponse?.value?.data || {};
  const response = afostoResponse?.value || {};
  const collectionData = getCollectionData(locale, response);
  const layoutData = getLayoutData(response, locale);
  const page = response?.content?.pagination?.page || 1;

  // Format page data
  const gridImages = pageData?.gridimages || [];
  const gridImageModulo = gridImages.length > 0 ? page % gridImages.length : 0;
  const gridImageIndex = (gridImageModulo === 0 ? gridImages.length : gridImageModulo) - 1;
  const gridImage = gridImages[gridImageIndex] || null;

  return {
    props: {
      locale,
      layoutData,
      ...collectionData,
      banner: pageData.banner
        ? {
            alt: pageData.banner?.alt || null,
            url: pageData.banner?.url || null,
          }
        : null,
      content: pageData.content || null,
      gridImage: gridImage?.image?.url
        ? {
            filename: gridImage?.image?.url || null,
            url: gridImage?.link?.url || null,
          }
        : null,
      ringStyles: (pageData.styles || []).map(style => ({
        image: style.image.url
          ? {
              alt: style.image.alt,
              url: style.image.url.replace(localeDomain, '/'),
            }
          : null,
        label: style.label,
        link: style.link?.url?.replace(localeDomain, '/'),
      })),
      usps: (pageData.usps || []).map(item => item.message).sort(() => Math.random() - 0.5),
    },
  };
};

Collection.propTypes = {
  activeFilterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  banner: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
  }),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  filters: PropTypes.object,
  gridImage: PropTypes.shape({
    title: PropTypes.string,
    filename: PropTypes.string,
  }),
  localeDomain: PropTypes.string,
  pagination: PropTypes.shape({
    itemsPerPage: PropTypes.shape({
      value: PropTypes.number,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
          url: PropTypes.string,
        }),
      ),
    }),
    page: PropTypes.number,
    pageCount: PropTypes.number,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      currency: PropTypes.string,
      defaultImage: PropTypes.shape({
        filename: PropTypes.string,
        thumbs: PropTypes.shape({
          50: PropTypes.string,
          100: PropTypes.string,
          200: PropTypes.string,
          400: PropTypes.string,
        }),
      }),
      hasDiscount: PropTypes.bool,
      multipleSizesAvailable: PropTypes.bool,
      name: PropTypes.string,
      nameSpecificationParts: PropTypes.arrayOf(PropTypes.string),
      originalName: PropTypes.string,
      originalPrice: PropTypes.number,
      price: PropTypes.number,
      url: PropTypes.string,
    }),
  ),
  ringStyles: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string,
      }),
      link: PropTypes.string,
    }),
  ),
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    nofollow: PropTypes.bool,
    noindex: PropTypes.bool,
  }),
  title: PropTypes.string,
  usps: PropTypes.arrayOf(PropTypes.string),
  layoutData: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    hrefLang: PropTypes.array,
  }).isRequired,
};

Collection.defaultProps = {
  activeFilterOptions: [],
  banner: undefined,
  breadcrumbs: [],
  content: undefined,
  filters: {},
  gridImage: undefined,
  localeDomain: '',
  pagination: {},
  products: [],
  ringStyles: [],
  seo: {},
  title: undefined,
  usps: [],
};

export default Collection;
