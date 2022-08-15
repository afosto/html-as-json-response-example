const formatSort = sort => {
  const options = Object.values(sort?.options || {});
  return { ...(sort || {}), options };
};

export default formatSort;
