import cache from '@lib/cache';
import client from '@lib/client';

const handler = async (request, response) => {
  const body = JSON.parse(request.body);
  const { slug, locale } = body || {};
  const type = await cache
    .fetch(
      cache.getCacheKeyForUrl(`${slug}${locale}`, 'type', 'dbm'),
      async () => {
        const pageResponse = await client(locale).getPage(slug.replace(/^\/+/, ''), {});
        return pageResponse?.data.type;
      },
      60 * 60 * 24 * 30,
    )
    .catch(() => null);

  return response.status(200).json({ type });
};

export default handler;
