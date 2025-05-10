import { Injectable, signal } from '@angular/core';
import { MOCK_TASKS } from '../../mock-tasks';
import { Task } from '../model/task.type';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksSignal = signal<Task[]>(MOCK_TASKS);

  tasks = this.tasksSignal;

  addTask(task: Task) {
    this.tasksSignal.set([...this.tasksSignal(), task]);
  }
  updateTask(updatedTask: Task) {
    this.tasksSignal.set(
      this.tasks().map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  deleteTask(taskId: number) {
    this.tasksSignal.set(this.tasks().filter((task) => task.id !== taskId));
  }
}
