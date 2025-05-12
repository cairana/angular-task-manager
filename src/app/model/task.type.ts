import { StatusOption, TaskStatus } from './status.types';

export type Task = {
  id: number;
  name: string;
  description: string;
  created: string;
  status: TaskStatus;
};

export const StatusSelection: StatusOption[] = [
  { id: 'todo', displayText: 'Todo' },
  { id: 'inProgress', displayText: 'In Progress' },
  { id: 'completed', displayText: 'Completed' },
];
