import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { exec, execSync, spawn } from 'child_process';

function execShellCommand(cmd: any) {
	return new Promise((resolve, reject) => {
		exec(cmd, (error: any, stdout: unknown, stderr: unknown) => {
			if (error) {
				console.warn(error);
			}
			resolve(stdout ? stdout : stderr);
		});
	});
}

export const GET = (async ({ request }) => {
	// await execShellCommand('pnpm build');
	await execShellCommand('node build');

	return json(12);
}) satisfies RequestHandler;
