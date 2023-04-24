import { db } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	if (typeof id !== 'string' || !id) {
		return { cl: null };
	}

	return {
		cl: await db.classes.findUniqueOrThrow({ where: { id: id }, include: { Assignments: true } })
	};
};
