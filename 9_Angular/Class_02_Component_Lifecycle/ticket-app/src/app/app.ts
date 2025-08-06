import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ticket, TicketStatus } from './models/ticket.model';
import { TicketPanel } from './components/ticket-panel/ticket-panel';

@Component({
  selector: 'app-root',
  imports: [TicketPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Issue tracker';

  ticketList: Ticket[] = [
    {
      id: 1,
      title: 'Fix login bug',
      description: 'Users cannot log in with correct credentials.',
      status: TicketStatus.NEW,
    },
    {
      id: 2,
      title: 'Add password reset feature',
      description: 'Allow users to reset their password via email.',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 3,
      title: 'Optimize dashboard loading time',
      description: 'Dashboard takes too long to load on slower connections.',
      status: TicketStatus.DONE,
    },
    {
      id: 4,
      title: 'Update user onboarding flow',
      description: 'Redesign the onboarding steps to improve UX.',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 5,
      title: 'Resolve payment gateway error',
      description: 'Transactions fail intermittently with Stripe API.',
      status: TicketStatus.NEW,
    },
    {
      id: 6,
      title: 'Refactor user profile component',
      description: 'Improve readability and reusability of profile code.',
      status: TicketStatus.DONE,
    },
    {
      id: 7,
      title: 'Implement dark mode toggle',
      description:
        'Users should be able to switch between light and dark themes.',
      status: TicketStatus.NEW,
    },
  ];
}
