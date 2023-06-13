import MarkdownIt from 'markdown-it';
import MarkdownAnchorfrom from 'markdown-it-anchor';
import fs from 'fs';

import type { PageServerLoad } from './$types';

export const load = (({}) => {
	const md = new MarkdownIt().use(MarkdownAnchorfrom);

	const file = fs.readFileSync(`./README.md`).toString();

	const rendered = md.render(file);

	return {
		readme: rendered
	};
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = true;
