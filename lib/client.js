import AfostoClient from '@clients/afosto';
import afosto from '../afosto.config';

const { localeDomains, defaultDomain } = afosto;

const client = locale => AfostoClient(localeDomains[locale] || defaultDomain);

export default client;
