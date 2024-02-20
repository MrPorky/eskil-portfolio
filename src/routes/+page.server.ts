import type { Actions } from './$types';

export const actions: Actions = {
	toggleTheme: async ({ cookies }) => {
		const theme = cookies.get('theme');
		const newTheme = theme === 'light' ? 'dark' : 'light';
		cookies.set('theme', newTheme, { path: '/' });
	}
};
