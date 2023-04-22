
import { db } from '$lib/server/database'

export async function load({ cookies}) {
    const id = cookies.get('session')
    if (
      typeof id !== 'string' ||
      !id
    ) {
      return {assignments:null}
    }
    let resp = await db.user.findUniqueOrThrow({ where: {userAuthToken: id} , include: {Classes: true}})
    return {
        classes: await resp.Classes!
    };
}

export function createAssignment(){
    alert("createAssignment")

}
export function getCurrentCourses(){
    return {
        
    }
}