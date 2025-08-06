import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPanel } from './ticket-panel';

describe('TicketPanel', () => {
  let component: TicketPanel;
  let fixture: ComponentFixture<TicketPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
