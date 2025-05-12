import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './create-task-modal.component.html',
  imports: [ButtonComponent, FormsModule],
})
export class ModalComponent {
  tasksService = inject(TasksService);

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
    const timestamp = new Date().toISOString();

    this.tasksService.addTask({
      created: timestamp,
      description: this.description,
      id: this.tasksService.tasks().length + 1,
      name: this.taskName,
      status: 'todo',
    });
    this.close.emit();
  };
}
