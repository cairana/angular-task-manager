import { Injectable, signal } from '@angular/core';
import { MOCK_TASKS } from '../../mock-tasks';
import { Task } from '../model/task.type';
import { TaskStatus } from '../model/status.types';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksSignal = signal<Task[]>(MOCK_TASKS);

  tasks = this.tasksSignal;

  addTask(name: string, description: string) {
    const newTask: Task = {
      name,
      description,
      id: uuidv4(),
      created: new Date().toISOString(),
      status: 'todo' as TaskStatus,
    };

    this.tasksSignal.set([...this.tasksSignal(), newTask]);
  }
  updateTask(updatedTask: Task) {
    this.tasksSignal.set(
      this.tasks().map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  deleteTask(taskId: string) {
    this.tasksSignal.set(this.tasks().filter((task) => task.id !== taskId));
  }
}
