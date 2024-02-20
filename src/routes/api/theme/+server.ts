import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

/**
 * Handles the POST request by setting the theme cookie based on the user's preference for dark or light mode. If the "prefersDark" property is missing from the request body, an error response with status code 500 is returned. If the "theme" cookie is missing, it is set based on the user's preference.
 *
 * @param {Object} param0 - An object containing the cookies and request properties
 * @return {Response} A new Response object
 */
export const POST: RequestHandler = async ({ cookies, request }) => {
	const prefersDark = (await request.json()).prefersDark;

	if (prefersDark === undefined) {
		return error(500, 'Missing "prefersDark" property');
	}

	if (cookies.get('theme') == undefined) {
		cookies.set('theme', prefersDark ? 'dark' : 'light', { path: '/' });
	}

	return new Response();
};
