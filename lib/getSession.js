import RedisStoreFactory from 'connect-redis';
import nextSession from 'next-session';
import { expressSession, promisifyStore } from 'next-session/lib/compat';
import redis from '@lib/redis';

const RedisStore = RedisStoreFactory(expressSession);

export const getSession = nextSession({
  store: promisifyStore(new RedisStore({ client: redis })),
})
