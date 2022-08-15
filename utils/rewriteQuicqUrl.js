const quicqUrl = (url, config) => {
  if (url.match(/\.gif/)) {
    return url;
  }

  const params = new URLSearchParams(config).toString();
  return `${url
    .split('?')?.[0]
    .replace('https://images.prismic.io/diamondsbyme', 'https://cdn.quicq.io/dbm-prismic')}${
    params ? `?${params}` : ''
  }`;
};

export default quicqUrl;
