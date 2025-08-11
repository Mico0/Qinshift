import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../../../core/services/tasks-service';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-manager-component',
  imports: [TaskItem],
  templateUrl: './task-manager-component.html',
  styleUrl: './task-manager-component.scss',
})
export class TaskManagerComponent implements OnInit {
  taskService = inject(TasksService);

  tasks = this.taskService.tasks;

  ngOnInit(): void {
    this.taskService.loadTasks();
  }
}
