import redis from './redis';

const getCacheKeyForUrl = (url, type, prefix = 'prefix') => {
  const urlWithoutTrailingSlash = url.startsWith('/') ? url.substring(1, url.length) : url;
  return `${prefix}_slug_${urlWithoutTrailingSlash.replace(/\//, '_')}_${type}`;
};

const get = async key => {
  let value = null;

  try {
    value = await redis.get(key);
  } catch (error) {
    // Maybe log something to APM
  }

  if (value === null) {
    return null;
  }

  return JSON.parse(value);
};

const set = async (key, fetcher, expires) => {
  const value = await fetcher();

  try {
    await redis.set(key, JSON.stringify(value), 'EX', expires);
  } catch (error) {
    // Maybe log something to APM
  }

  return value;
};

const fetch = async (key, fetcher, expires) => {
  const value = await get(key);

  if (value !== null) {
    return value;
  }

  return set(key, fetcher, expires);
};

const remove = async key => {
  try {
    await redis.del(key);
  } catch (error) {
    // Maybe log something to APM
  }
};

export default {
  fetch,
  get,
  getCacheKeyForUrl,
  remove,
  set,
};
