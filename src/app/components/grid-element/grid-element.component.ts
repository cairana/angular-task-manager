import { Component, Input, input } from '@angular/core';
import { TrashIconComponent } from '../trash-icon/trash-icon.component';
import { Task } from '../../model/task.type';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-grid-element',
  imports: [TrashIconComponent, ButtonComponent],
  templateUrl: './grid-element.component.html',
  styleUrl: './grid-element.component.css',
})
export class GridElementComponent {
  task = input.required<Task>();
  @Input() updateTask!: (task: Task) => void;
  @Input() deleteTask!: (taskId: number) => void;

  onClickDelete = () => {
    if (this.deleteTask) {
      this.deleteTask(this.task().id);
    }
  };
}
