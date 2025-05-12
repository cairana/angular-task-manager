import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
} from '@angular/core';
import { StatusSelection, Task, TaskStatus } from '../../model/task.type';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-status-selector',
  imports: [CommonModule],
  templateUrl: './status-selector.component.html',
  styleUrl: './status-selector.component.css',
})
export class StatusSelectorComponent {
  tasksService = inject(TasksService);

  statuses = StatusSelection;

  task = input.required<Task>();

  updateTaskStatus = ($event: Event) => {
    const target = $event.target as HTMLSelectElement;
    const value = target.value;
    if (!value) {
      return;
    }

    const newStatus = value as TaskStatus;
    this.tasksService.updateTask({ ...this.task(), status: newStatus });
  };
}
