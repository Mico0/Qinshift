import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../../feature/task-manager/models/task.model';
import { tasksMock } from '../../feature/task-manager/tasks.mock';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([]);

  loadTasks() {
    this.tasks.set(tasksMock);
    console.log(this.tasks());
  }

  updateStatus(taskId: number) {
    this.tasks.update((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        } else {
          return { ...task, status: TaskStatus.DONE };
        }
      })
    );
  }
}
