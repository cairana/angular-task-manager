import {
  Component,
  ElementRef,
  HostListener,
  Input,
  input,
} from '@angular/core';
import { Task, TaskStatus } from '../../model/task.type';
import { ButtonComponent } from '../button/button.component';
import { TrashIconComponent } from '../../icons/trash-icon.component';
import { DotsIconComponent } from '../../icons/dots-icon.component';
import { CommonModule } from '@angular/common';
import { SelectorPopupComponent } from '../selector-popup/selector-popup.component';

@Component({
  selector: 'app-grid-element',
  imports: [
    TrashIconComponent,
    ButtonComponent,
    DotsIconComponent,
    CommonModule,
    SelectorPopupComponent,
  ],
  templateUrl: './grid-element.component.html',
  styleUrl: './grid-element.component.css',
})
export class GridElementComponent {
  openSelector = false;

  constructor(private elementRef: ElementRef) {}

  task = input.required<Task>();

  @Input() updateTask!: (task: Task, status: TaskStatus) => void;
  @Input() deleteTask!: (taskId: number) => void;

  onClickUpdate = (status: TaskStatus) => {
    if (this.updateTask) {
      this.updateTask(this.task(), status);
    }
  };

  onClickDelete = () => {
    if (this.deleteTask) {
      this.deleteTask(this.task().id);
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
