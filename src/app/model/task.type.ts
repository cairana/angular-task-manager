export type Task = {
  id: number;
  name: string;
  description: string;
  created: string;
  status: TaskStatus;
};

export type TaskStatus = 'todo' | 'inProgress' | 'completed';
