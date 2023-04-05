import { db } from '$lib/server/database'
import type { Classes } from '@prisma/client';
import { fail } from '@sveltejs/kit'



/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const id = cookies.get('session')


    if (
      typeof id !== 'string' ||
      !id
    ) { return {classes:null}
    }
    console.log(id)
    let resp = await db.user.findUniqueOrThrow({ where: {userAuthToken: id} , include: {Classes: true}})
    console.log(resp)
    return {
      classes: await resp.Classes!
    };
  }
