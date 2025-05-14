import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';
import { ToastService, ToastType } from '../../services/toast.service';
import { Task } from '../../model/task.type';
import { TaskStatus } from '../../model/status.types';

@Component({
  selector: 'app-modal',
  templateUrl: './create-task-modal.component.html',
  imports: [ButtonComponent, FormsModule],
})
export class ModalComponent {
  tasksService = inject(TasksService);
  toastService = inject(ToastService);

  @Output() close = new EventEmitter<void>();

  taskName = '';
  description = '';

  isButtonDisabled = () => {
    return this.taskName.length === 0 || this.description.length === 0;
  };

  closeModal = (): void => {
    this.close.emit();
  };

  saveTask = (): void => {
    this.tasksService.addTask(this.description, this.taskName);

    this.toastService.showToast(
      `Task created successfully - ${this.taskName}`,
      ToastType.INFO
    );

    this.close.emit();
  };
}
