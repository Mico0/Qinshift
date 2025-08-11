import { Component, signal } from '@angular/core';
import { Header } from './core/components/header/header';
import { TaskManagerComponent } from './feature/task-manager/components/task-manager-component/task-manager-component';

@Component({
  selector: 'app-root',
  imports: [Header, TaskManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
