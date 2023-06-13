import MarkdownIt from 'markdown-it';
import MarkdownAnchorfrom from 'markdown-it-anchor';
// @ts-ignore
import MarkdownMeta from 'markdown-it-meta';
import MarkdownPrism from 'markdown-it-prism';
import fs from 'fs';

export interface meta {
	fileName: string;
	title: string;
	date: Date;
	series: string;
	categories: string[];
	postSnippet: string;
	featured: boolean;
	published: boolean;
	markdown?: string;
}

function postsSorter(a: meta, b: meta) {
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

const md = new MarkdownIt().use(MarkdownMeta).use(MarkdownPrism).use(MarkdownAnchorfrom);

export async function getBlogMetaList() {
	const dir = fs.readdirSync('./markdown/blog');

	let content: meta[] = [];

	dir.map((f) => {
		const file = fs.readFileSync(`./markdown/blog/${f}`).toString();
		md.render(file);

		// @ts-ignore
		const meta = md.meta as meta;
		meta.fileName = f.split('.')[0];

		content.push(meta);
	});

	content.sort(postsSorter);

	return content;
}

export async function getBlogPost(filename: string) {
	try {
		const file = fs.readFileSync(`./markdown/blog/${filename}.md`).toString();

		const rendered = md.render(file);

		// @ts-ignore
		const postMeta = md.meta as meta;

		return {
			markdown: rendered,
			meta: postMeta
		};
	} catch (error) {
		return undefined;
	}
}
