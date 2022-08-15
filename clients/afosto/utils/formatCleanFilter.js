const formatCleanFilter = filters =>
  Object.values(filters || {}).find(filter => !!filter.is_clean_url);

export default formatCleanFilter;
