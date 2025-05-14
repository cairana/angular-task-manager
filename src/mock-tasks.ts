import { Task } from './app/model/task.type';

export const MOCK_TASKS: Task[] = [
  {
    id: '1a2b3c4d',
    name: 'Buy groceries',
    description: 'Get milk, eggs, and bread from the store',
    created: '2025-05-04T15:00:00Z',
    status: 'todo',
  },
  {
    id: '2b3c4d5e',
    name: 'Write report',
    description: 'Draft the quarterly sales report',
    created: '2025-05-03T12:30:00Z',
    status: 'inProgress',
  },
  {
    id: '3c4d5e6f',
    name: 'Book flight',
    description: 'Reserve tickets for the upcoming business trip',
    created: '2025-04-30T08:15:00Z',
    status: 'completed',
  },
  {
    id: '4d5e6f7g',
    name: 'Fix bug #204',
    description: 'Resolve the login authentication issue',
    created: '2025-05-01T10:45:00Z',
    status: 'todo',
  },
  {
    id: '5e6f7g8h',
    name: 'Schedule meeting',
    description: 'Set up a project status review meeting',
    created: '2025-05-02T14:00:00Z',
    status: 'completed',
  },
  {
    id: '6f7g8h9i',
    name: 'Update documentation',
    description: 'Revise API documentation for new endpoints',
    created: '2025-05-03T16:20:00Z',
    status: 'inProgress',
  },
  {
    id: '7g8h9i0j',
    name: 'Pay bills',
    description: 'Submit payment for utilities and internet',
    created: '2025-04-29T18:00:00Z',
    status: 'completed',
  },
  {
    id: '8h9i0j1k',
    name: 'Review PR #452',
    description: 'Check the latest code changes and merge if approved',
    created: '2025-05-04T09:00:00Z',
    status: 'todo',
  },
];
