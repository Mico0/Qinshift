import { Component, inject } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { TasksService } from '../../../../core/services/tasks-service';

@Component({
  selector: 'app-task-statistics',
  imports: [Button],
  templateUrl: './task-statistics.html',
  styleUrl: './task-statistics.scss',
})
export class TaskStatistics {
  taskService = inject(TasksService);

  completedTasks = this.taskService.completedTasks;
  inProgressTasks = this.taskService.inProgressTasks;
  newTasks = this.taskService.newTasks;

  onRemoveTask() {
    this.taskService.clearAllTasks();
  }
}
