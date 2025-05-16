import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ToastService, ToastType } from '../../services/toast.service';
import { TasksService } from '../../services/tasks.service';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-delete-task-modal',
  imports: [DatePipe, ButtonComponent],
  templateUrl: './delete-task-modal.component.html',
})
export class DeleteTaskModalComponent {
  tasksService = inject(TasksService);
  toastService = inject(ToastService);
  modalService = inject(ModalService);

  taskName = '';
  description = '';

  @Output() close = new EventEmitter<void>();

  taskToDelete = this.modalService.taskToDelete;

  closeModal = (): void => {
    this.close.emit();
  };

  deleteTask = (): void => {
    const taskId = this.modalService.taskToDelete()?.id;

    if (taskId === undefined) {
      this.toastService.showToast(
        `Task not found - could not deleted`,
        ToastType.INFO
      );
    } else {
      this.tasksService.deleteTask(taskId);

      this.toastService.showToast(`Task deleted successfully`, ToastType.INFO);
    }

    this.close.emit();
  };
}
