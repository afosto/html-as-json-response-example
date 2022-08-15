import capitalize from '@utils/capitalize';

const filterAttributesByLabels = (attributes, skipLabels = []) =>
  attributes
    .filter(
      attribute =>
        !!attribute.available &&
        skipLabels.every(skipLabel => !attribute.label.includes(skipLabel)),
    )
    .map(attribute => ({
      ...attribute,
      label: capitalize(attribute.label),
    }));

export default filterAttributesByLabels;
