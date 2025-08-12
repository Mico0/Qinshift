import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatistics } from './task-statistics';

describe('TaskStatistics', () => {
  let component: TaskStatistics;
  let fixture: ComponentFixture<TaskStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatistics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatistics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
