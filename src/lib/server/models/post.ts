import type { Post } from '@prisma/client';
import { getPostsCacheRaw } from '$lib/redis';

// Helper Methods
async function getParsedPosts() {
	const cacheRaw = await getPostsCacheRaw();

	if (cacheRaw) {
		return JSON.parse(cacheRaw) as Post[];
	}

	return [];
}

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

// Redis Methods
export async function getPostsMetaList() {
	const posts = await getParsedPosts();

	posts.sort(postsSorter);

	return posts;
}

// Prisma Methods
