import fs from 'fs';

import { error } from '@sveltejs/kit';

import type { PageServerLoad, EntryGenerator } from './$types';
import { getBlogPost } from '$lib/server/models/meta';

export const load = (async ({ params }) => {
	const postObject = await getBlogPost(params.filename);

	if (!postObject) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		...postObject
	};
}) satisfies PageServerLoad;

export const entries = (async () => {
	let ent: { filename: string }[] = [];

	const dir = fs.readdirSync('./markdown/blog');
	dir.map((f) => ent.push({ filename: f.split('.')[0] }));

	return ent;
}) satisfies EntryGenerator;

export const prerender = true;
export const ssr = true;
export const csr = true;
