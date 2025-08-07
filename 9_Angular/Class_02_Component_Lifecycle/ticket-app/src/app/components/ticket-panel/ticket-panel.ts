import { Component, input } from '@angular/core';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-panel',
  imports: [],
  templateUrl: './ticket-panel.html',
  styleUrl: './ticket-panel.scss',
})
export class TicketPanel {
  ticketList = input<Ticket[]>([]);
}
