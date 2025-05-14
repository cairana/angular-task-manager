import { Injectable, signal } from '@angular/core';
import { Task } from '../model/task.type';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalVisible = signal(false);
  isDeleteModalVisible = signal(false);
  taskToDelete = signal<Task | null>(null);

  showModal() {
    this.isModalVisible.set(true);
  }

  hideModal() {
    this.isModalVisible.set(false);
  }

  showDeleteModal(task: Task) {
    this.isDeleteModalVisible.set(true);
    this.taskToDelete.set(task);
  }

  hideDeleteModal() {
    this.isDeleteModalVisible.set(false);
    this.taskToDelete.set(null);
  }
}
