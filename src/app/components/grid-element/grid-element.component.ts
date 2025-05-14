import {
  Component,
  ElementRef,
  HostListener,
  Input,
  input,
  Signal,
  signal,
} from '@angular/core';
import { Task } from '../../model/task.type';
import { ButtonComponent } from '../button/button.component';
import { TrashIconComponent } from '../../icons/trash-icon.component';
import { CommonModule, DatePipe } from '@angular/common';
import { StatusSelectorComponent } from '../status-selector/status-selector.component';
import { TaskStatus } from '../../model/status.types';

@Component({
  selector: 'app-grid-element',
  imports: [
    TrashIconComponent,
    ButtonComponent,
    CommonModule,
    StatusSelectorComponent,
    DatePipe,
  ],
  templateUrl: './grid-element.component.html',
})
export class GridElementComponent {
  openSelector = false;

  constructor(private elementRef: ElementRef) {}

  @Input() task!: Task;

  @Input() deleteTask!: (taskId: string) => void;

  onClickDelete = () => {
    const currentTask = this.task;
    if (this.deleteTask && currentTask) {
      this.deleteTask(currentTask.id);
    }
  };

  onClickOpenSelector = () => {
    this.openSelector = true;
  };

  onClickCloseSelector = () => {
    this.openSelector = false;
  };

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.openSelector = false;
    }
  }
}
