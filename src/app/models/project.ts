import {ProjectTask} from "./project-task";
export class Project {
    tasks: ProjectTask[];
    constructor(public id: string, public name: String, public owner: String, public status:string) {
        this.tasks = [];
    }
}
