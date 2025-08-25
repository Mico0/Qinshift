import { Component, inject, model, OnInit, signal } from '@angular/core';
import { RxjsService } from '../../services/rxjs-service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-subjects',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './subjects.html',
  styleUrl: './subjects.scss',
})
export class Subjects implements OnInit {
  private rxjsService = inject(RxjsService);

  fruitsSubject$ = this.rxjsService.fruitsSubject$;

  nameArr = signal<string[]>([]);

  nameValue = model<string>();
  fruitValue = model<string>();

  ngOnInit() {
    this.rxjsService.nameSubject$.subscribe((value) => {
      this.nameArr.set(value);
    });
    this.rxjsService.getNames();
  }

  onAddName() {
    if (!this.nameValue()) return;

    this.rxjsService.addName(this.nameValue());

    this.nameValue.set('');
  }

  onAddFruit() {
    if (!this.fruitValue()) return;

    this.rxjsService.addFruit(this.fruitValue());

    this.fruitValue.set('');
  }
}
