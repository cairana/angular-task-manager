import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
} from '@angular/core';
import { StatusSelection, Task, TaskStatus } from '../../model/task.type';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-selector-popup',
  imports: [CommonModule],
  templateUrl: './selector-popup.component.html',
  styleUrl: './selector-popup.component.css',
})
export class SelectorPopupComponent {
  tasksService = inject(TasksService);
  statuses = StatusSelection;

  task = input.required<Task>();

  @Input() updateTask!: (task: Task, status: TaskStatus) => void;

  updateTaskStatus = (status: TaskStatus) => {
    console.log("herer", status)
    this.updateTask(this.task(), status);
  };

  @Input() show = false;
  @Output() close = new EventEmitter<void>();
}
