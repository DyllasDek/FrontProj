import { db } from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const id = params.id;

	if (typeof id !== 'string' || !id) {
		return { _info: null };
	}

	return {
		_info: await db.assignments.findUniqueOrThrow({ where: { id: id } })
	};
}
