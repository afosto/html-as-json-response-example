const priceToCents = value => {
  if (!value) {
    return undefined;
  }

  return value * 100;
};

export default priceToCents;
