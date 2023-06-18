import type { PageServerLoad } from './$types';
import { getBlogMetaList } from '$lib/server/models/meta';

export const load = (async () => {
	const metaList = await getBlogMetaList();

	return {
		metaList
	};
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = true;
