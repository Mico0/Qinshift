import { Component, inject } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { TasksService } from '../../../../core/services/tasks-service';

@Component({
  selector: 'app-new-task',
  imports: [Button],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  taskService = inject(TasksService);
  taskName = '';
  taskDescription = '';

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.taskName = target.value;
  }
  onDescriptionChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.taskDescription = target.value;
  }

  onAddTask() {
    if (this.taskName === '' || this.taskDescription === '') {
      return;
    } else {
      this.taskService.addTask(this.taskName, this.taskDescription);
    }
  }
}
