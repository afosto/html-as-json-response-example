import sortArrayByProperty from '@utils/sortArrayByProperty';
import stripTags from '@utils/stripTags';
import { SHORT_LOCALE_TO_LONG_LOCALE, LOCALE_LABELS } from '../constants';
import afosto from '../afosto.config';

const formatHrefLangData = data =>
  Object.keys(data || {}).map(key => {
    const [formattedKey] = key.toLowerCase().split('-').reverse();

    return {
      label: LOCALE_LABELS[formattedKey],
      href: data[key],
      key: formattedKey,
      locale: SHORT_LOCALE_TO_LONG_LOCALE[formattedKey],
    };
  });

const getLayoutData = (pageData = {}, locale = 'nl-nl') => {
  return {
    blocks: {
      notificationBar: stripTags(pageData.blocks?.notification_bar?.content || ''),
      footerUsps: Object.values(pageData?.blocks || {})
        ?.filter(block => block?.identifier?.match(/^usps\d{1}$/i))
        .map(block => stripTags(block.content).replace('&amp;', '&')),
      customerServiceFooter: pageData.blocks?.customerServiceFooterNext?.content || null,
    },
    hrefLang: formatHrefLangData(pageData.pluginData?.hrefLang) || null,
    menus: {
      mainMenu: {
        title: pageData.menus?.default?.name || null,
        items: sortArrayByProperty(pageData.menus?.default?.items || [], 'position') || [],
      },
      footerAbout: {
        title: pageData.menus?.about_dbm?.name || null,
        items:
          sortArrayByProperty(
            pageData.menus?.about_dbm?.items?.map(item => ({
              ...item,
              url: item.url?.includes('.diamondsbyme.')
                ? item.url
                : `${afosto.localeDomains[locale].replace(/\/$/, '')}${item.url}`,
            })) || [],
            'position',
          ) || [],
      },
      footerBottom: {
        title: pageData.menus?.bottom_footer_menu?.name || null,
        items:
          sortArrayByProperty(pageData.menus?.bottom_footer_menu?.items || [], 'position') || [],
      },
      footerCustomerService: {
        title: pageData.menus?.klantenservice_footer?.name || null,
        items:
          sortArrayByProperty(pageData.menus?.klantenservice_footer?.items || [], 'position') || [],
      },
      footerKnowledgeBase: {
        title: pageData.menus?.kennisbank?.name || null,
        items: sortArrayByProperty(pageData.menus?.kennisbank?.items || [], 'position') || [],
      },
      mobileMenuFooter: {
        title: pageData.menus?.mobile_menu_footer?.name || null,
        items:
          sortArrayByProperty(pageData.menus?.mobile_menu_footer?.items || [], 'position') || [],
      },
      mobileExtra: {
        title: pageData.menus?.mobile_v2_extra?.name || null,
        items: sortArrayByProperty(pageData.menus?.mobile_v2_extra?.items || [], 'position') || [],
      },
    },
    properties: {
      currency: pageData.properties?.currency || 'EUR',
      customerServiceEmail: pageData.properties?.customer_service_email || null,
      paymentMethods: (pageData.properties?.payment_methods || []).map(method => ({
        id: method.id,
        description: method.description,
        icon: method.icon,
      })),
      phoneNumber: pageData.properties?.phone_number || null,
      shopId: pageData.properties?.shop?.id || null,
      siteName: pageData.properties?.name ? pageData.properties.name.split('-')[0] : null,
    },
    seo: {
      title: pageData?.seo_title || null,
      description: pageData?.seo_description || null,
      keywords: pageData?.seo_keywords || null,
      robots: pageData?.seo_robots || null,
      canonical: pageData?.canonical || null,
    },
    sliders: {
      menuIcons: pageData.sliders?.menu_icons?.slides || [],
    },
  };
};

export default getLayoutData;
