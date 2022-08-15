import capitalize from '@utils/capitalize';

const getAttributes = (attributes, startsWith = '') =>
  attributes
    .filter(attribute => !!attribute.available && attribute.label.startsWith(startsWith))
    .map(attribute => ({
      ...attribute,
      label: capitalize(attribute.label.replace(startsWith, '')),
    }));

export default getAttributes;
