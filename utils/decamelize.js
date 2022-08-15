const decamelize = value => value.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

export default decamelize;
