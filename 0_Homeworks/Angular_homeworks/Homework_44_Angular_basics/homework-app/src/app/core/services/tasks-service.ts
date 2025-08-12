import { computed, inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../../feature/task-manager/models/task.model';
import { tasksMock } from '../../feature/task-manager/tasks.mock';
import { LoggerService } from './logger-service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([]);
  loggerService = inject(LoggerService);

  loadTasks() {
    this.tasks.set(tasksMock);
    console.log(this.tasks());
  }

  completedTasks = computed(() =>
    this.tasks().reduce(
      (acc, el) => acc + (el.status === TaskStatus.DONE ? 1 : 0),
      0,
    ),
  );

  inProgressTasks = computed(() =>
    this.tasks().reduce(
      (acc, el) => acc + (el.status === TaskStatus.IN_PROGRESS ? 1 : 0),
      0,
    ),
  );
  newTasks = computed(() =>
    this.tasks().reduce(
      (acc, el) => acc + (el.status === TaskStatus.NEW ? 1 : 0),
      0,
    ),
  );

  updateStatus(taskId: number, taskStatus: string) {
    this.tasks.update((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }
        if (taskStatus === 'done') {
          return { ...task, status: TaskStatus.DONE };
        }
        if (taskStatus === 'in-progress') {
          return { ...task, status: TaskStatus.IN_PROGRESS };
        }
        if (taskStatus === 'new') {
          return { ...task, status: TaskStatus.NEW };
        }
        return task;
      }),
    );
  }

  addTask(taskName: string, taskDescription: string) {
    // console.log(this.tasks()[this.tasks().length - 1].id);
    const tasks = this.tasks();
    const newTask: Task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: taskName,
      description: taskDescription,
      status: TaskStatus.NEW,
    };

    // console.log(newTask);
    this.tasks.update((prevTasks) => {
      return [...prevTasks, newTask];
    });
    this.loggerService.logAction(`Added a new task: {
      id: ${newTask.id},
      name: ${newTask.name},
      description: ${newTask.description},
      status: ${newTask.status},
    }`);
  }

  clearAllTasks() {
    this.tasks.set([]);
    this.loggerService.logAction('Clear Tasks');
  }
}
