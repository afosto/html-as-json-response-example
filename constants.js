// eslint-disable-next-line import/prefer-default-export
import { FlagBE, FlagDE, FlagEU, FlagFR, FlagGB, FlagNL } from '@icons/index';


export const EDUCATION_CENTER_NAMES = {
  'nl-nl': 'Kennisbank',
  'nl-be': 'Kennisbank',
  de: 'Datenbank',
  'de-de': 'Datenbank',
  fr: 'Centre de connaisance',
  'fr-fr': 'Centre de connaissance',
  'en-us': 'Education Center',
  'en-gb': 'Education Center',
};

export const CUSTOMER_SERVICE_NAMES = {
  'nl-nl': 'Klantenservice',
  'nl-be': 'Klantenservice',
  de: 'Kundenservice',
  'de-de': 'Kundenservice',
  fr: 'Service clients',
  'fr-fr': 'Service clients',
  'en-us': 'Customer service',
  'en-gb': 'Customer service',
};

export const LOCALE_LABELS = {
  nl: 'NL Nederlands',
  be: 'BE Belgisch',
  de: 'DE Deutsch',
  fr: 'FR Français',
  us: 'EU English',
  en: 'EU English',
  gb: 'UK English ',
};

export const SHORT_LOCALE_TO_LONG_LOCALE = {
  nl: 'nl-nl',
  be: 'nl-be',
  de: 'de-de',
  fr: 'fr-fr',
  us: 'en-us',
  en: 'en-us',
  gb: 'en-gb',
};

// eslint-disable-next-line import/prefer-default-export
export const LOCALE_FLAG_COMPONENT_MAPPING = {
  nl: <FlagNL />,
  be: <FlagBE />,
  de: <FlagDE />,
  fr: <FlagFR />,
  us: <FlagEU />,
  en: <FlagEU />,
  gb: <FlagGB />,
};
