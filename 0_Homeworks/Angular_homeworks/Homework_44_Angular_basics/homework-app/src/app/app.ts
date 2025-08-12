import { Component, signal } from '@angular/core';
import { Header } from './core/components/header/header';
import { TaskManagerComponent } from './feature/task-manager/components/task-manager-component/task-manager-component';
import { NewTask } from './feature/task-manager/components/new-task/new-task';
import { TaskStatistics } from './feature/task-manager/components/task-statistics/task-statistics';

@Component({
  selector: 'app-root',
  imports: [Header, TaskManagerComponent, NewTask, TaskStatistics],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
