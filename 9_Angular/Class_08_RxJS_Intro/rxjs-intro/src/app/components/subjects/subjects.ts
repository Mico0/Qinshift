import {
  Component,
  DestroyRef,
  inject,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { RxjsService } from '../../services/rxjs-service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subjects',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './subjects.html',
  styleUrl: './subjects.scss',
})
export class Subjects implements OnInit {
  private dr = inject(DestroyRef);
  private rxjsService = inject(RxjsService);

  fruitsSubject$ = this.rxjsService.fruitsSubject$;

  nameArr = signal<string[]>([]);

  nameValue = model<string>();
  fruitValue = model<string>();

  unsubscribe$ = new Subject<null>();

  ngOnInit() {
    this.rxjsService.nameSubject$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        console.log('TAKE UNTIL SUBSCRIPTION');
        this.nameArr.set(value);
      });

    this.rxjsService.nameSubject$
      .pipe(takeUntilDestroyed(this.dr))
      .subscribe((value) => {
        console.log('TAKE UNTIL DESTROYED SUBSCRIPTION');
        this.nameArr.set(value);
      });

    this.rxjsService.getNames();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
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
