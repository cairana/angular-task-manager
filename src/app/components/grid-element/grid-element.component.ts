import {
  Component,
  ElementRef,
  HostListener,
  inject,
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
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component';
import { ModalService } from '../../services/modal.service';

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

  modalService = inject(ModalService);

  @Input() task!: Task;

  onClickOpenSelector = () => {
    this.openSelector = true;
  };

  onClickCloseSelector = () => {
    this.openSelector = false;
  };

  onClickDeleteTask = () => {
    this.modalService.showDeleteModal(this.task);
  };
}
