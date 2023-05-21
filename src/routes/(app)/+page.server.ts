import MarkdownIt from 'markdown-it';
import MarkdownAnchorfrom from 'markdown-it-anchor';
// @ts-ignore
import MarkdownMeta from 'markdown-it-meta';
import MarkdownPrism from 'markdown-it-prism';
import fs from 'fs';

import type { PageServerLoad } from './$types';

export const load = (({}) => {
	const md = new MarkdownIt().use(MarkdownMeta).use(MarkdownPrism).use(MarkdownAnchorfrom);

	const file = fs.readFileSync(`./src/routes/(app)/index_snippet.md`).toString();

	const rendered = md.render(file);

	return {
		markdown: rendered
	};
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = true;
