import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTask } from './new-task';

describe('NewTask', () => {
  let component: NewTask;
  let fixture: ComponentFixture<NewTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
