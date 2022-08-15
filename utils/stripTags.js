const stripTags = string => string.replace(/(<([^>]+)>)/gi, '');

export default stripTags;
