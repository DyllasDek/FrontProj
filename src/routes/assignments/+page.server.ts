import { db } from '$lib/server/database'
import type { Assignments } from '@prisma/client';
import { fail } from '@sveltejs/kit'



/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const id = cookies.get('session')


    if (
      typeof id !== 'string' ||
      !id
    ) {
      return fail(400, { invalid: true })
    }
    console.log(id)
    let resp = await db.user.findUniqueOrThrow({ where: {userAuthToken: id} , include: {Assignments: true}})
    console.log(resp)
    return {
      assignments: await resp.Assignments!
    };
  }
