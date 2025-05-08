export type Task = {
    id: number;
    name: string;
    description: string;
    created: string;
    status: 'todo' | 'inProgress' | 'completed';
  };