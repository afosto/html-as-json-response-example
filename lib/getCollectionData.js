import capitalize from '@utils/capitalize';
import firstLetterLowerCase from '@utils/firstLetterLowerCase';
import priceToCents from '@utils/priceToCents';
import afosto from '../afosto.config';

const getActiveFilterOptions = (pageData = {}, localeDomain) => {
  const activeFilters = pageData?.content?.activeFilters || {};
  return Object.values(activeFilters).reduce(
    (acc, filter) => [
      ...acc,
      ...(filter.values || []).map(option => ({
        key: option.key,
        label: option.label,
        link: option.link?.replace(localeDomain, '/') || null,
      })),
    ],
    [],
  );
};

const getFilters = (pageData = {}, localeDomain) =>
  Object.keys(pageData?.content?.filters || {}).reduce((acc, filterKey) => {
    const filter = pageData?.content?.filters[filterKey];
    const attributes = (filter.attributes || []).map(attribute => ({
      ...attribute,
      link: attribute.link?.replace(localeDomain, '/') || null,
    }));
    return { ...acc, [filterKey]: { ...filter, attributes } };
  }, {});

const getProductMultipleSizesAvailable = product => {
  const multipleSizesSpecification = product.specifications['multiple-size-available'] || {};
  const [firstOption] = Object.values(multipleSizesSpecification.options || {});
  return !!firstOption?.label;
};

const getProductSpecificationName = (specificationLocale, product) => {
  const titleSpecificationKeys = [
    `${specificationLocale}-title-part-1`,
    `${specificationLocale}-title-part-2`,
    `${specificationLocale}-title-part-3`,
  ];

  return Object.keys(product.specifications || {})
    .filter(key => titleSpecificationKeys.includes(key))
    .reduce((acc, key) => {
      const specification = product.specifications[key];
      const [value] = Object.values(specification.options || {});

      if (value?.label) {
        return [...acc, value.label];
      }

      return acc;
    }, []);
};

const getSeo = (pageData = {}) => {
  let title = pageData.title || '';

  if (pageData.cleanFilter) {
    title = `${cleanFilter.clean_filter_label || ''} ${firstLetterLowerCase(title)}`.trim();
  }

  title = capitalize(title);

  const seoTitle = pageData.seo_title || `${title} | DiamondsByMe`;
  const seoDescription = pageData.seo_description || `${title} | DiamondsByMe`;
  const seoKeywords = pageData.seo_keywords || '';
  let seoRobots = pageData.seo_robots || 'index, follow';

  if (pageData.is_error) {
    seoRobots = 'noindex, nofollow';
  }

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    noindex: seoRobots.includes('noindex'),
    nofollow: seoRobots.includes('nofollow'),
  };
};

const getCollectionData = (locale, pageData = {}) => {
  const specificationLocale = afosto.localeSpecificationMapping[locale] || locale.split('-')[0];
  const localeDomain = afosto.localeDomains[locale] || afosto.defaultDomain;

  return {
    activeFilterOptions: getActiveFilterOptions(pageData, localeDomain),
    breadcrumbs: (pageData.breadcrumbs || []).map(breadcrumb => ({
      ...breadcrumb,
      url: breadcrumb.url?.replace(localeDomain, '/') || null,
    })),
    filters: getFilters(pageData, localeDomain),
    localeDomain,
    pagination: {
      itemsPerPage: {
        options: (pageData?.content?.pagination?.itemsPerPage?.options || []).map(option => ({
          label: parseInt(option.label, 10),
          url: option.link?.replace(localeDomain, '/'),
        })),
        value: pageData.content?.pagination?.itemsPerPage?.value || 20,
      },
      page: pageData.content?.pagination?.page || 1,
      pageCount: pageData.content?.pagination?.page_count || 1,
    },
    products: (pageData.content?.products || []).map(product => ({
      id: product?.id,
      currency: pageData.properties?.currency || 'EUR',
      defaultImage: product?.image_default || {},
      hasDiscount: product?.has_discount || false,
      multipleSizesAvailable: getProductMultipleSizesAvailable(product),
      name: product.name,
      nameSpecificationParts: getProductSpecificationName(specificationLocale, product),
      originalName: product.name,
      originalPrice: priceToCents(product.original_price),
      price: priceToCents(product.price),
      url: product.url.replace(localeDomain, '/'),
    })),
    seo: getSeo(pageData),
    slider: pageData.content?.slider || null,
    title: pageData.content?.title || null,
  };
};

export default getCollectionData;
