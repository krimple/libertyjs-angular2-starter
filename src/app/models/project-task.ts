export class ProjectTask {
  order: number;
  priority: number;
  dueDate: Date;
  description: string;
  completed: boolean;
  completedDate: Date;

  constructor(description: string, dueDate?: Date, priority?: number, order?: number) {
    this.description = description ? description : undefined;
    this.dueDate = dueDate ? dueDate : new Date();
    this.priority = priority ? priority : 1;
    this.order = order ? order : 100;
  }

  complete() {
    this.completed = true;
    this.completedDate = new Date();
  }
}
