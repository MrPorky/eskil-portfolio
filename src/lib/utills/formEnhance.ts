import { applyAction } from '$app/forms';
import type { SubmitFunction } from '@sveltejs/kit';

/**
 * A function that applies an action to the result and reloads the window.
 *
 * @param {Object} result - The result object
 * @return {Promise<void>} A promise that resolves after the action is applied and the window is reloaded
 */
export const noRouting: SubmitFunction = () => {
	return async ({ result }) => {
		await applyAction(result);
		window.location.reload();
	};
};
