import { Component, signal } from '@angular/core';
import { GridWrapperComponent } from '../grid-wrapper/grid-wrapper.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../create-task-modal/create-task-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddIconComponent } from '../../icons/add-icon.component';

@Component({
  selector: 'app-grid',
  imports: [
    GridWrapperComponent,
    InputComponent,
    ButtonComponent,
    ModalComponent,
    CommonModule,
    FormsModule,
    AddIconComponent,
  ],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  title = 'angular-task-manager';

  searchTerm = signal('');

  isModalVisible = false;
  showModal = () => {
    this.isModalVisible = true;
  };

  hideModal = () => {
    this.isModalVisible = false;
  };
}
