import sortArrayByProperty from '@utils/sortArrayByProperty';
import stripTags from '@utils/stripTags';
import axios from 'axios';
import afosto from '../afosto.config';

export const getShopData = async (locale, slug = '') => {
  const localizedDomain = afosto.localeDomains[locale];
  const response = await axios(`${localizedDomain}${slug}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = response || {};
  const {
    menus,
    seo_title,
    seo_description,
    seo_keywords,
    seo_robots,
    canonical,
    properties,
    blocks,
    sliders,
    pluginData,
  } = data;
  const { phone_number, customer_service_email, name, payment_methods } = properties;
  const { hrefLang } = pluginData;

  return {
    seo: {
      title: seo_title,
      description: seo_description,
      keywords: seo_keywords,
      robots: seo_robots,
      canonical,
    },
    hrefLang,
    menus: {
      main: sortArrayByProperty(Object.values(menus?.default?.items || {}), 'position'),
      footerBottom: sortArrayByProperty(
        Object.values(menus?.bottom_footer_menu?.items || {}),
        'position',
      ),
      footerCustomerService: {
        title: menus.klantenservice_footer.name,
        items: sortArrayByProperty(
          Object.values(menus?.klantenservice_footer?.items || {}),
          'position',
        ),
      },
      footerKnowledgeBase: {
        title: menus.kennisbank.name,
        items: sortArrayByProperty(Object.values(menus?.kennisbank?.items || {}), 'position'),
      },
      footerAbout: {
        title: menus.about_dbm.name,
        items: sortArrayByProperty(Object.values(menus?.about_dbm?.items || {}), 'position'),
      },
      mobileExtra: menus?.mobile_v2_extra?.items || {},
      mobileMenuFooter: menus?.mobile_menu_footer?.items || {},
    },
    sliders: {
      menuIcons: sliders?.menu_icons?.slides || [],
    },
    properties: {
      phoneNumber: phone_number,
      customerServiceEmail: customer_service_email,
      siteName: name.split('-')[0],
      paymentMethods: payment_methods,
    },
    blocks: {
      notificationBar: stripTags(blocks?.notification_bar.content),
      footerUsps: Object.values(blocks)
        ?.filter(block => block.identifier.match(/^usps\d{1}$/i))
        .map(block => stripTags(block.content).replace('&amp;', '&')),
      customerServiceFooter: blocks?.customerServiceFooterNext?.content || null,
    },
  };
};
