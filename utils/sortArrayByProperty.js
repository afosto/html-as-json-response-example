const sortProperty = (a, b, direction) => {
  if (typeof a === 'string' && typeof b === 'string') {
    if (direction === 'asc') {
      return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    }

    return a.toLowerCase() < b.toLowerCase() ? 1 : -1;
  }

  if (direction === 'asc') {
    return a > b ? 1 : -1;
  }

  return a < b ? 1 : -1;
};

const sortArrayByProperty = (list, property, direction = 'asc') => {
  if (direction === 'asc') {
    return [...list].sort((a, b) => sortProperty(a[property], b[property], direction));
  }

  return [...list].sort((a, b) => sortProperty(a[property], b[property], direction));
};

export default sortArrayByProperty;
