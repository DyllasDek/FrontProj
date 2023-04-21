
import { db } from '$lib/server/database'

export function createAssignment(){
    return {
        _info: db.assignments.create({
            data: {
                name: "Assignment 1",
                description: "This is the first assignment",
                dueDate: "2021-10-10",
                course: { connect: { id: 1 } },
                assignmentType: { connect: { id: 1 } },
                assignmentFiles: { connect: { id: 1 } },
                assignmentSubmissions: { connect: { id: 1 } },
            }
        })
    }

}
export function getCurrentCourses(){
    return {
        //find where the user is a current student
        _info: db.classes.findMany({ where: { whoId: db.
    }
}