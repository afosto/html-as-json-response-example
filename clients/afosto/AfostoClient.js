import formatPage from './utils/formatPage';

const AfostoClient = baseURL => {
  const request = async (url, options = {}) => {
    const { params, ...otherOptions } = options || {};
    const requestUrl = new URL(`${baseURL}${url}`);

    if (params) {
      requestUrl.search = new URLSearchParams(params).toString();
    }

    const fetchRequest = await fetch(requestUrl, {
      ...otherOptions,
      headers: {
        'content-type': 'application/json',
        ...(otherOptions.headers || {}),
      },
    });
    let responseData = {};

    try {
      responseData = await fetchRequest.json();
    } catch (error) {
      // Do nothing.
    }

    return { ...fetchRequest, data: responseData };
  };

  const getCartHash = async (options = {}) => {
    const cartHashResponse = await request('cart/hash', options);
    const { hash } = cartHashResponse?.data || {};

    return hash;
  };

  const addToCart = async (item, options = {}) =>
    request('cart/add', {
      ...options,
      headers: {
        ...(options.headers || {}),
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams(item).toString(),
      method: 'POST',
    });

  const addMultipleToCart = async (payload, options = {}) => {
    const { items = [], ...otherPayload } = payload || {};
    const formattedItems = items.reduce((acc, item, index) => {
      Object.keys(item).forEach(key => {
        acc[`item[${index}][${key}]`] = item[key];
      });

      return acc;
    }, {});
    const itemsParam = new URLSearchParams(formattedItems);

    return request('cart/add-multiple', {
      ...options,
      headers: {
        ...(options.headers || {}),
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams({ ...Object.fromEntries(itemsParam), ...otherPayload }).toString(),
      method: 'POST',
    });
  };

  const getCart = async (options = {}) =>
    request('cart', {
      ...options,
      headers: {
        ...(options.headers || {}),
        'content-type': 'application/json',
      },
    });

  const getPage = async (slug = '', params = {}, options = {}) => {
    const response = await request(slug, {
      ...options,
      params,
    });

    return { ...response, data: formatPage(response.data) };
  };

  return {
    addMultipleToCart,
    addToCart,
    getCart,
    getCartHash,
    getPage,
    request,
  };
};

export default AfostoClient;
