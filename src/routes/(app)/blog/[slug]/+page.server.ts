import MarkdownIt from 'markdown-it';
import MarkdownAnchorfrom from 'markdown-it-anchor';
// @ts-ignore
import MarkdownMeta from 'markdown-it-meta';
import MarkdownPrism from 'markdown-it-prism';
import fs from 'fs';

import { error } from '@sveltejs/kit';

import type { PageServerLoad, EntryGenerator } from './$types';
import { prisma } from '$lib/prisma';

export const load = (async ({ params }) => {
	const md = new MarkdownIt().use(MarkdownMeta).use(MarkdownPrism).use(MarkdownAnchorfrom);

	const post = await prisma.post.findUnique({
		where: {
			slug: params.slug
		}
	});

	if (!post) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		markdown: md.render(post.markdown),
		meta: post
	};
}) satisfies PageServerLoad;

export const entries = (async () => {
	const posts = await prisma.post.findMany();
	let ent: { slug: string }[] = [];

	posts.map((p) => ent.push({ slug: p.slug }));

	return ent;
}) satisfies EntryGenerator;

export const config = {
	isr: {
		expiration: 60,
		allowQuery: ['']
	}
};

export const prerender = false;
export const ssr = true;
export const csr = true;
