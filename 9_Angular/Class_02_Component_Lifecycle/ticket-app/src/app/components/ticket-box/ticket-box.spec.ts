import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBox } from './ticket-box';

describe('TicketBox', () => {
  let component: TicketBox;
  let fixture: ComponentFixture<TicketBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
