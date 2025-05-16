import { Component, inject, signal } from '@angular/core';
import { GridWrapperComponent } from '../grid-wrapper/grid-wrapper.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { CreateTaskModalComponent } from '../create-task-modal/create-task-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddIconComponent } from '../../icons/add-icon.component';
import { ModalService } from '../../services/modal.service';
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-content',
  imports: [
    GridWrapperComponent,
    InputComponent,
    ButtonComponent,
    CreateTaskModalComponent,
    CommonModule,
    FormsModule,
    AddIconComponent,
    DeleteTaskModalComponent,
    HeaderComponent,
  ],
  templateUrl: './content.component.html',
})
export class ContentComponent {
  modalService = inject(ModalService);
  title = 'angular-task-manager';

  searchTerm = signal('');

  onClickOpenModal = () => {
    this.modalService.showModal();
  };
}
