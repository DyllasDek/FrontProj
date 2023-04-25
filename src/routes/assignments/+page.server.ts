import { db } from '$lib/server/database';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const id: string | undefined = cookies.get('session');
	try {
		if (!id) {
			throw new Error();
		}
		const resp = await db.user.findUniqueOrThrow({
			where: { userAuthToken: id },
			include: { Assignments: true, Classes: true }
		});
		return {
			assignments: resp.Assignments,
			id: id,
			classes: resp.Classes
		};
	} catch (e) {
		return {
			assignments: null,
			id: null,
			classes: null
		};
	}
};

export const actions: Actions = {
	create: async ({ cookies, request }) => {
		const id: string | undefined = cookies.get('session');

		if (!id) {
			return {
				status: 401,
				body: { error: 'Unauthorized' }
			};
		}
		const body = await request.formData();
		const assignment = body.get('assign') as string;
		const details = body.get('details') as string;
		const courseid = body.get('courseid') as string;
		const progress = body.get('progress') as string;
		const due = body.get('due') as string;
		const completed = body.get('completed') as string;

		if (!assignment || !details || !courseid || !progress || !due || !completed) {
			return {
				status: 400,
				body: { error: 'Missing required fields' }
			};
		}

		await db.assignments.create({
			data: {
				assignment: assignment,
				details: details,
				course: { connect: { id: courseid } },
				whom: { connect: { userAuthToken: id } },
				progress: Number(progress),
				due: new Date(due),
				completed: completed === 'true'
			}
		});

		return { status: 200 };
	},

	delete: async ({ cookies, request }) => {
		const id: string | undefined = cookies.get('session');
		console.log(1);
		if (!id) {
			return {
				status: 401,
				body: { error: 'Unauthorized' }
			};
		}

		const body = await request.formData();
		const uid = body.get('id') as string;

		if (!uid) {
			return {
				status: 400,
				body: { error: 'Missing required fields' }
			};
		}

		await db.assignments.delete({
			where: { id: uid }
		});

		return { status: 200 };
	},

	update: async ({ cookies, request }) => {
		const id: string | undefined = cookies.get('session');

		if (!id) {
			return {
				status: 401,
				body: { error: 'Unauthorized' }
			};
		}

		const body = await request.formData();
		const uid = body.get('assign_uid') as string;
		const assign = body.get('assign') as string;
		const details = body.get('details') as string;
		const courseid = body.get('courseid') as string;
		const progress = body.get('progress') as string;
		const due = body.get('due') as string;
		const completed = body.get('completed') as string;

		if (!uid || !assign || !details || !courseid || !progress || !due || !completed) {
			return {
				status: 400,
				body: { error: 'Missing required fields' }
			};
		}

		await db.assignments.update({
			where: { id: uid },
			data: {
				assignment: assign,
				details: details,
				course: { connect: { id: courseid } },
				whom: { connect: { userAuthToken: id } },
				progress: Number(progress),
				due: new Date(due),
				completed: completed === 'true'
			}
		});

		return { status: 200 };
	}
};
