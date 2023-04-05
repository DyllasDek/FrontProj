import { db } from '$lib/server/database'
import type { Assignments } from '@prisma/client';
import { fail } from '@sveltejs/kit'



/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const id = params.id

    if (
      typeof id !== 'string' ||
      !id
    ) {
      return fail(400, { invalid: true })
    }
    
    return {
      _info: await db.assignments.findUniqueOrThrow({ where: {id: id} })
    };
  }
