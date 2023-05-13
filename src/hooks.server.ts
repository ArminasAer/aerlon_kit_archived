import { building } from '$app/environment';
import { PORT } from '$env/static/private';
import { prisma } from '$lib/prisma';
import { initializePublishedPostCache } from '$lib/redis';

const posts = await prisma.post.findMany();
await initializePublishedPostCache(posts);
