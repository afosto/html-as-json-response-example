const findObjectInArray = (list, propertyKey, value) =>
  list.find(listItem => listItem[propertyKey] === value);

export default findObjectInArray;
