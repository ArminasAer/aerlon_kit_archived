import MarkdownIt from 'markdown-it';
import MarkdownAnchorfrom from 'markdown-it-anchor';
// @ts-ignore
import MarkdownMeta from 'markdown-it-meta';
import MarkdownPrism from 'markdown-it-prism';
import fs from 'fs';

import type { PageServerLoad } from './$types';
import { prisma } from '$lib/prisma';

export const load = (async ({ params }) => {
	const md = new MarkdownIt().use(MarkdownMeta).use(MarkdownPrism).use(MarkdownAnchorfrom);

	const posts = await prisma.post.findMany();

	// YOU DONT NEED TO PROCESS MARKDOWN LOL
	// posts.map((p) => {
	// 	p.markdown = md.render(p.markdown);
	// });

	// Need to be sorted by date then alphabetically

	return {
		posts
	};
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = true;
