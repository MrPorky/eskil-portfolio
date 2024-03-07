import { error } from '@sveltejs/kit';
import { cases } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const caseItem = cases.find((item) => item.link === `/${params.id}`);

	if (caseItem) {
		return caseItem;
	}

	error(404, 'Not found');
};
