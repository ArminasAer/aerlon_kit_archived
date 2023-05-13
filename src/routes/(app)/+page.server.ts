import { getPostsCacheRaw } from '$lib/redis';
import type { Post } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { getPostsMetaList } from '$lib/server/models/post';

export const load = (async ({ params }) => {
	const posts = await getPostsMetaList();

	return {
		posts
	};
}) satisfies PageServerLoad;

export const prerender = false;
export const ssr = true;
export const csr = true;
