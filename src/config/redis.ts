import { createClient } from 'redis';

const redis = createClient();

redis.on('error', (err) => console.log('Redis Client Error', err));

const redisConection = async () => await redis.connect();
redisConection();

export { redis };
