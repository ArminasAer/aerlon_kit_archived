import { getPostsCacheRaw } from '$lib/redis';
import type { Post } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const postsRaw = (await getPostsCacheRaw()) || '';

	return {
		posts: (await JSON.parse(postsRaw)) as Post[]
	};
}) satisfies PageServerLoad;

export const prerender = false;
export const ssr = true;
export const csr = true;
