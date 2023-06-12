import type { PageServerLoad } from './$types';
import type { Post } from '@prisma/client';
import { prisma } from '$lib/prisma';

function postsSorter(a: Post, b: Post) {
	if (a.date > b.date) {
		return -1;
	} else if (a.date < b.date) {
		return 1;
	} else {
		if (a.title < b.title) {
			return -1;
		} else {
			return 1;
		}
	}
}

export const load = (async () => {
	const posts = await prisma.post.findMany();

	posts.sort(postsSorter);

	return {
		posts
	};
}) satisfies PageServerLoad;

export const config = {
	isr: {
		expiration: 60
	}
};

export const prerender = true;
export const ssr = true;
export const csr = true;
