import { Component, input, output } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ticket-box',
  imports: [NgClass],
  templateUrl: './ticket-box.html',
  styleUrl: './ticket-box.scss',
})
export class TicketBox {
  ticketOutput = output<Ticket>();

  ticket = input.required<Ticket>();

  onTicketClick() {
    this.ticketOutput.emit(this.ticket());
  }
}
