import { db } from '$lib/server/database';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const id: string | undefined = cookies.get('session');

	if (!id) {
		return {
			classes: null,
			id: null
		};
	}

	const resp = await db.user.findUniqueOrThrow({
		where: { userAuthToken: id },
		include: { Classes: true }
	});

	return {
		classes: resp.Classes,
		id: id
	};
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
		const courseid = body.get('courseid') as string;
		const coursedesc = body.get('coursedesc') as string;
		const category = body.get('category') as string;
		const schedule = body.get('schedule') as string;
		const period = body.get('period') as string;
		const from = body.get('from') as string;
		const to = body.get('to') as string;

		if (!courseid || !coursedesc || !category || !schedule || !period || !from || !to) {
			return {
				status: 400,
				body: { error: 'Missing required fields' }
			};
		}

		await db.classes.create({
			data: {
				courseid: courseid,
				coursedesc: coursedesc,
				category: category,
				schedule: schedule,
				period: period,
				from: from,
				to: to,
				whom: { connect: { userAuthToken: id } }
			}
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
		const uid = body.get('uid') as string;
		const courseid = body.get('courseid') as string;
		const coursedesc = body.get('coursedesc') as string;
		const category = body.get('category') as string;
		const schedule = body.get('schedule') as string;
		const period = body.get('period') as string;
		const from = body.get('from') as string;
		const to = body.get('to') as string;

		if (!uid || !courseid || !coursedesc || !category || !schedule || !period || !from || !to) {
			return {
				status: 400,
				body: { error: 'Missing required fields' }
			};
		}

		await db.classes.update({
			where: { id: uid },
			data: {
				courseid: courseid,
				coursedesc: coursedesc,
				category: category,
				schedule: schedule,
				period: period,
				from: from,
				to: to,
				whom: { connect: { userAuthToken: id } }
			}
		});

		return { status: 200 };
	}
};
