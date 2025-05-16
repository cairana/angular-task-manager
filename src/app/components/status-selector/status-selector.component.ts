import { Component, inject, Input } from '@angular/core';
import { StatusSelection, Task } from '../../model/task.type';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';
import { StatusOption, TaskStatus } from '../../model/status.types';
import { ToastService } from '../../services/toast.service';
import { ToastType } from '../../model/toast.types';

@Component({
  selector: 'app-status-selector',
  imports: [CommonModule],
  templateUrl: './status-selector.component.html',
})
export class StatusSelectorComponent {
  tasksService = inject(TasksService);
  toastService = inject(ToastService);

  statuses: StatusOption[] = StatusSelection;
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
      `Task moved to ${
        StatusSelection.find((s) => s.id === newStatus)?.displayText
      }`,
      ToastType.INFO
    );
  };
}
