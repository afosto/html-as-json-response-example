import dasherize from '@utils/dasherize';
import { CUSTOMER_SERVICE_NAMES, EDUCATION_CENTER_NAMES } from '../constants';

const getPrismicHref = ({
  link_type: linkType = null,
  type = null,
  data = {},
  url = null,
  lang,
}) => {
  switch (`${linkType}-${type}`) {
    case 'Document-educationCenterContent':
      return `${dasherize(EDUCATION_CENTER_NAMES[lang])}/${data?.url}`;
    case 'Document-customerServicePage':
      return `${dasherize(CUSTOMER_SERVICE_NAMES[lang])}/${data?.url}`;
    case 'Web-null':
      return url;
    default:
      return null;
  }
};

export default getPrismicHref;
