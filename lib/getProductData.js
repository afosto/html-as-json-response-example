import afosto from '../afosto.config';

const getGiftBoxOptions = (pageData = {}) => {
  const giftBoxSpecification = pageData?.content?.specifications?.['gift-box'] || {};
  const addonProducts = pageData?.content?.addonProducts || [];

  return Object.keys(giftBoxSpecification.options || {}).reduce((acc, key) => {
    const option = giftBoxSpecification.options[key];
    const { label = '' } = option || {};
    const [ean, optionsString = ''] = label.split(':');
    const [position, fromPrice] = optionsString.split('-');
    const item = addonProducts.find(product => product.ean === ean);
    const formattedPosition = position ? parseInt(position, 10) : null;

    if (!item || formattedPosition === null || formattedPosition !== 0) {
      return acc;
    }

    return [
      ...acc,
      {
        ean,
        position: formattedPosition,
        fromPrice: fromPrice ? Number(fromPrice) * 100 : 1,
        id: item.id,
      },
    ];
  }, []);
};

const formatShopMoreLinks = (links, locale) =>
  links.reduce(
    (acc, { label, title, url }) => [
      ...acc,
      { label, title, url: url.replace(afosto.localeDomains[locale], '') },
    ],
    [],
  );

const getProductData = (locale, pageData = {}) => {
  const localeDomain = afosto.localeDomains[locale] || afosto.defaultDomain;

  return {
    breadcrumbs: (pageData.breadcrumbs || []).map(breadcrumb => ({
      ...breadcrumb,
      url: breadcrumb.url?.replace(localeDomain, '/') || null,
    })),
    configurationIncompatibleMessage:
      pageData?.content?.blocks?.configurator_incompatible?.content || null,
    description: pageData?.content?.description || null,
    id: pageData?.content?.id || null,
    giftBoxOptions: getGiftBoxOptions(pageData),
    name: pageData?.content?.name || null,
    sku: pageData?.content?.sku || null,
    regularPrice: pageData?.content?.orginal_price ? pageData.content.orginal_price * 100 : null,
    salesPrice: pageData?.content?.price ? pageData.content.price * 100 : null,
    shopMoreLinks: formatShopMoreLinks(pageData?.content?.menu_items || [], locale),
  };
};

export default getProductData;
