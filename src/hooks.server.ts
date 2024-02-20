import type { Handle } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			const theme = event.cookies.get('theme');

			return html.replace('<html', `<html ${theme ? `data-theme="${theme}"` : ''} `);
		}
	});
	return response;
};
