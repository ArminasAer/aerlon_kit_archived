import MarkdownIt from 'markdown-it';
import MarkdownAnchorfrom from 'markdown-it-anchor';
// @ts-ignore
import MarkdownMeta from 'markdown-it-meta';
import MarkdownPrism from 'markdown-it-prism';
import fs from 'fs';

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const md = new MarkdownIt().use(MarkdownMeta).use(MarkdownPrism).use(MarkdownAnchorfrom);

	const dir = fs.readdirSync('./markdown');

	let content: meta[] = [];

	dir.map((p) => {
		const file = fs.readFileSync(`./markdown/${p}`).toString();
		md.render(file);

		// @ts-ignore
		const meta = md.meta as meta;
		meta.fileName = p.split('.')[0];

		content.push(meta);
	});

	return {
		posts: content
	};
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = true;
