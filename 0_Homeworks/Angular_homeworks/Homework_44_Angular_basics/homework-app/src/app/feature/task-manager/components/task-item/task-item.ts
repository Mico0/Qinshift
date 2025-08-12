import { Component, inject, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgClass } from '@angular/common';
import { TasksService } from '../../../../core/services/tasks-service';
import { Button } from '../../../../shared/components/button/button';
import { LoggerService } from '../../../../core/services/logger-service';

@Component({
  selector: 'app-task-item',
  imports: [NgClass, Button],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  task = input.required<Task>();
  taskService = inject(TasksService);
  loggerService = inject(LoggerService);

  tasks = this.taskService.tasks;
  onUpdateClick(task: Task, taskStatus: string) {
    // console.log('On update clicked with status: ', taskStatus);

    this.taskService.updateStatus(task.id, taskStatus);
    this.loggerService.logAction(taskStatus);
  }
}
