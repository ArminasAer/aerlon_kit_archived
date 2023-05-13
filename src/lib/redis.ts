import Redis from 'ioredis';
import chalk from 'chalk';

import type { Post } from '@prisma/client';

const redisClient = new Redis();

const REDIS_CACHE = 'posts_published';

redisClient.on('error', (err) => {
	// @ts-ignore
	if (err.code === 'ECONNREFUSED') {
		console.log(chalk.red('💾 [redis][startup]: is the redis server not running?'));
		process.exit(1);
	}
});

export async function getPostsCacheRaw() {
	const postsCacheRaw = await redisClient.get(REDIS_CACHE);

	return postsCacheRaw;
}

export async function initializePublishedPostCache(posts: Post[]) {
	const publishedPosts = posts.filter((p) => p.published);

	await redisClient.set(REDIS_CACHE, JSON.stringify(publishedPosts));

	console.log(chalk.green(`💾 [redis][startup]: posts cached in redis`));
}

export { redisClient };
