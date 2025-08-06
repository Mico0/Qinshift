import {
  AfterViewInit,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  imports: [NgClass],
  templateUrl: './ticket-details.html',
  styleUrl: './ticket-details.scss',
})
export class TicketDetails implements OnInit, OnDestroy, AfterViewInit {
  selectedTicket = input<Ticket>(null);
  hideOutput = output();

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('On init called');
  }

  ngOnDestroy() {
    console.log('On destroy called');
  }

  ngAfterViewInit() {}

  onClearClick() {
    this.hideOutput.emit();
  }
}
