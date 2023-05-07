import MarkdownIt from 'markdown-it';
import { default as anchorPlugin } from 'markdown-it-anchor';
import hljs from 'highlight.js';
import type { PageServerLoad } from './$types';
import { getPostsCacheRaw } from '$lib/redis';
import type { Post } from '@prisma/client';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const md = MarkdownIt({
		html: true,
		linkify: true,
		typographer: true,
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, { language: lang }).value;
				} catch (__) {}
			}

			return '';
		}
	}).use(anchorPlugin);

	const cache = (await getPostsCacheRaw()) || '';

	const parsed = JSON.parse(cache) as Post[];

	const post = parsed.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, {
			message: `${params.slug} not found`
		});
	}

	post.markdown = md.render(post.markdown);

	return { post };
}) satisfies PageServerLoad;
