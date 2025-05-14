import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';
import { ToastService, ToastType } from '../../services/toast.service';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  imports: [ButtonComponent, FormsModule],
})
export class CreateTaskModalComponent {
  tasksService = inject(TasksService);
  toastService = inject(ToastService);

  taskName = '';
  description = '';

  @Output() close = new EventEmitter<void>();

  closeModal = (): void => {
    this.close.emit();
  };

  isButtonDisabled = () => {
    return this.taskName.length === 0 || this.description.length === 0;
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
