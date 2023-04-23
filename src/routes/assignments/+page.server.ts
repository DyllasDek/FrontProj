import { db } from '$lib/server/database'
import type { Actions } from './$types'


/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const id : string | undefined = cookies.get('session')

    if (!id) {
      return {
      assignments: null,
      id : null,
      classes : null
      }
    }

    let resp = await db.user.findUniqueOrThrow({ where: {userAuthToken: id} , include: {Assignments: true, Classes: true}})

    return {
      assignments: await resp.Assignments!,
      id : id!,
      classes : await resp.Classes!
    };
}

export const actions : Actions = {
  create: async ({ cookies, request }) => {
    const id : string | undefined = cookies.get('session')
    console.log('add asdasdijasidnj')
    if (!id) {
      return {
        status: 401,
        body: { error: 'Unauthorized' }
      }
    }
    console.log('add 1')
    const body = await request.formData()
    const assignment = body.get('assign') as string
    const details = body.get('details') as string
    const courseid = body.get('courseid') as string
    const progress = body.get('progress') as string
    const due = body.get('due') as string
    const completed = body.get('completed') as string

    if (!assignment || !details || !courseid || !progress || !due || !completed) {
      return {
        status: 400,
        body: { error: 'Missing required fields' }
      }
    }

    await db.assignments.create({ 
        data:{
        assignment: assignment,
        details: details,
        course : {connect: {id: courseid}},
        whom : {connect: {userAuthToken: id}},
        progress: progress,
        due: new Date(due),
        completed: (completed === 'true')
      }    
    });

   return {status: 200}
  },


  update: async ({ cookies, request }) => {
    const id : string | undefined = cookies.get('session')
    console.log("1")
    if (!id) {
      return {
        status: 401,
        body: { error: 'Unauthorized' }
      }
    }
    console.log("2")
    const body = (await request.formData())
    const uid = body.get('assign_uid') as string
    const assign = body.get('assign') as string 
    const details = body.get('details') as string
    const courseid = body.get('courseid') as string 
    const progress = body.get('progress') as string 
    const due = body.get('due') as string
    const completed = body.get('completed') as string
    console.log(body)

    console.log(uid)
    console.log(assign)
    console.log(details)
    console.log(courseid)
    console.log(progress)
    console.log(due)
    console.log(completed)

    if ( !uid || !assign || !details || !courseid || !progress || !due || !completed) {
      return {
        status: 400,
        body: { error: 'Missing required fields' }
      }
    }
    console.log("3")

    await db.assignments.update({
      where: {id: uid}, 
      data:{
        assignment: assign,
        details: details,
        course : {connect: {id: courseid}},
        whom : {connect: {userAuthToken: id}},
        progress: Number(progress),
        due: new Date(due),
        completed: (completed === 'true')
      }    
    });

    return {status: 200}
  }

}

