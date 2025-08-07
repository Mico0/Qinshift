import { Component, input, OnInit, signal } from '@angular/core';
import { Ticket, TicketStatus } from '../../models/ticket.model';
import { TicketBox } from '../ticket-box/ticket-box';
import { TicketDetails } from '../ticket-details/ticket-details';

@Component({
  selector: 'app-ticket-panel',
  imports: [TicketBox, TicketDetails],
  templateUrl: './ticket-panel.html',
  styleUrl: './ticket-panel.scss',
})
export class TicketPanel implements OnInit {
  readonly ticketStatus = TicketStatus;

  ticketList = input<Ticket[]>([]);
  filteredTickets = signal<Ticket[]>([]);

  isDetailsShown = signal(false);
  selectedTicket = signal<Ticket>(null);

  ngOnInit(): void {
    //We only set the filtered tickets after the inputs have their values in ngOnInit
    this.filteredTickets.set(this.ticketList());
  }

  onTicketSelect(ticket: Ticket) {
    this.isDetailsShown.set(true);
    this.selectedTicket.set(ticket);
  }

  filterTicketByStatus(status: TicketStatus) {
    this.filteredTickets.set(
      this.ticketList().filter((ticket) => ticket.status === status),
    );
    this.isDetailsShown.set(false);
  }
}
