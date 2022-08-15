const formatFilters = filters =>
  Object.keys(filters || {}).reduce((acc, key) => {
    const filter = filters[key];

    return {
      ...acc,
      [key]: {
        ...filter,
        attributes: Object.values(filter.attributes || {}),
      },
    };
  }, {});

export default formatFilters;
