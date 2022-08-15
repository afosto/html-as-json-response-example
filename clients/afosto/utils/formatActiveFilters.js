const formatActiveFilters = filters =>
  Object.keys(filters || {}).reduce((acc, key) => {
    const filter = filters[key];

    return {
      ...acc,
      [key]: {
        key,
        values: Object.values(filter || {}),
      },
    };
  }, {});

export default formatActiveFilters;
