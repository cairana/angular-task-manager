import { Component, inject, Input, input } from '@angular/core';
import { StatusSelection, Task } from '../../model/task.type';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';
import { TaskStatus } from '../../model/status.types';
import { ToastService, ToastType } from '../../services/toast.service';

@Component({
  selector: 'app-status-selector',
  imports: [CommonModule],
  templateUrl: './status-selector.component.html',
})
export class StatusSelectorComponent {
  tasksService = inject(TasksService);
  toastService = inject(ToastService);

  statuses = StatusSelection;
  @Input() task!: Task;

  updateTaskStatus = ($event: Event) => {
    const target = $event.target as HTMLSelectElement;
    const value = target.value;
    if (!value) {
      return;
    }

    const newStatus = value as TaskStatus;
    this.tasksService.updateTask({ ...this.task, status: newStatus });

    this.toastService.showToast(
      `Task updated successfully - ${newStatus}`,
      ToastType.INFO
    );
  };
}
