import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  @Output() save = new EventEmitter<void>();

  taskName = '';
  description = '';

  closeModal = (): void => {
    this.close.emit();
  };

  saveTask = (): void => {
    this.save.emit();
    this.tasksService.addTask({
      created: Date(),
      description: this.description,
      id: this.tasksService.tasks().length + 1,
      name: this.taskName,
      status: 'todo',
    });
    this.close.emit();
  };
}
