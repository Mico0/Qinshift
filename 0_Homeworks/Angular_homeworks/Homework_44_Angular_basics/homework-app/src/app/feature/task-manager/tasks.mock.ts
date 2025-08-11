import { Task, TaskStatus } from './models/task.model';

export const tasksMock: Task[] = [
  {
    id: 1,
    name: 'Set up project repository',
    description:
      'Initialize the Git repository and configure branch protection rules.',
    status: TaskStatus.NEW,
  },
  {
    id: 2,
    name: 'Create initial project structure',
    description: 'Set up folder structure and install necessary dependencies.',
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: 3,
    name: 'Design database schema',
    description:
      'Create ER diagrams and define database tables with relationships.',
    status: TaskStatus.DONE,
  },
  {
    id: 4,
    name: 'Implement authentication',
    description: 'Add user registration, login, and JWT-based authentication.',
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: 5,
    name: 'Set up CI/CD pipeline',
    description:
      'Integrate GitHub Actions for automated builds and deployments.',
    status: TaskStatus.NEW,
  },
  {
    id: 6,
    name: 'Develop task management module',
    description: 'Create APIs and UI for managing tasks with CRUD operations.',
    status: TaskStatus.NEW,
  },
  {
    id: 7,
    name: 'Write unit tests',
    description: 'Cover core business logic with Jest unit tests.',
    status: TaskStatus.DONE,
  },
  {
    id: 8,
    name: 'Integrate external API',
    description:
      'Connect with a third-party API for additional data processing.',
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: 9,
    name: 'Optimize performance',
    description:
      'Analyze and improve API response times and frontend load speeds.',
    status: TaskStatus.NEW,
  },
  {
    id: 10,
    name: 'Prepare project documentation',
    description:
      'Write user guide, API documentation, and developer setup instructions.',
    status: TaskStatus.DONE,
  },
];
