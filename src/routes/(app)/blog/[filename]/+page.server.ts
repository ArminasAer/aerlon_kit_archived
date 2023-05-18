import MarkdownIt from 'markdown-it';
import MarkdownAnchorfrom from 'markdown-it-anchor';
// @ts-ignore
import MarkdownMeta from 'markdown-it-meta';
import MarkdownPrism from 'markdown-it-prism';
import fs from 'fs';

import { error } from '@sveltejs/kit';

import type { PageServerLoad, EntryGenerator } from './$types';

export const load = (async ({ params }) => {
	const md = new MarkdownIt().use(MarkdownMeta).use(MarkdownPrism).use(MarkdownAnchorfrom);

	const file = fs.readFileSync(`./markdown/${params.filename}.md`).toString();

	const rendered = md.render(file);

	// @ts-ignore
	const postMeta = md.meta as meta;

	return {
		markdown: rendered,
		meta: postMeta
	};
}) satisfies PageServerLoad;

export const entries = (() => {
	let ent: { filename: string }[] = [];

	const dir = fs.readdirSync('./markdown');
	dir.map((f) => ent.push({ filename: f.split('.')[0] }));

	return ent;
}) satisfies EntryGenerator;

export const prerender = true;
export const ssr = true;
export const csr = true;
