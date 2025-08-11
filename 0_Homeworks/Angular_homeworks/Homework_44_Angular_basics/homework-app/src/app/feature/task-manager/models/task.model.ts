export enum TaskStatus {
  NEW = 'new',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

export interface Task {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
}
