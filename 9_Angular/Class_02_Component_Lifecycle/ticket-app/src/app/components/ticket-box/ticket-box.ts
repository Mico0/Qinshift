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
  ticket = input.required<Ticket>();

  ticketOutput = output<Ticket>();

  onTicketClick() {
    this.ticketOutput.emit(this.ticket());
  }
}
