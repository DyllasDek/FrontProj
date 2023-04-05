import { db } from '$lib/server/database'
import type { Classes } from '@prisma/client';
import { fail } from '@sveltejs/kit'



/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const id = params.id

    if (
      typeof id !== 'string' ||
      !id
    ) {return {cl:null}}
    
    return {
      cl: await db.classes.findUniqueOrThrow({ where: {id: id} })
    };
  }
