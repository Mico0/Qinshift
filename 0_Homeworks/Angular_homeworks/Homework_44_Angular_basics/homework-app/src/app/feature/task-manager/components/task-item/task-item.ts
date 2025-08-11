import { Component, inject, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgClass } from '@angular/common';
import { TasksService } from '../../../../core/services/tasks-service';

@Component({
  selector: 'app-task-item',
  imports: [NgClass],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  task = input.required<Task>();
  taskService = inject(TasksService);

  tasks = this.taskService.tasks;
  //! ASK ABOUT IF ONLY THE FUNCTION CAN BE PULLED FROM THE SERVICE
  onUpdateClick(task: Task) {
    this.taskService.updateStatus(task.id);
  }
}
