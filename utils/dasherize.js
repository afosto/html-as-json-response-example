import decamelize from './decamelize';

const dasherize = value => decamelize(value).replace(/[ _]/g, '-');

export default dasherize;
