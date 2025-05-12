export type Task = {
  id: number;
  name: string;
  description: string;
  created: string;
  status: TaskStatus;
};

export type TaskStatus = 'todo' | 'inProgress' | 'completed';

export interface StatusOption {
  id: string;
  displayText: string;
}

export const StatusSelection: StatusOption[] = [
  { id: 'todo', displayText: 'Todo' },
  { id: 'inProgress', displayText: 'In Progress' },
  { id: 'completed', displayText: 'Completed' },
];
