import { Component, signal } from '@angular/core';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TemplateForm, ReactiveForm, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  showTemplateForm = signal(false);

  toggleForm() {
    this.showTemplateForm.update((prev) => !prev);
  }
}
