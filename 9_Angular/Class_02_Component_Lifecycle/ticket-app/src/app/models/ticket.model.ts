export enum TicketStatus {
  NEW = 'new',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
}
