import { Component } from '@angular/core';
import { GridWrapperComponent } from '../grid-wrapper/grid-wrapper.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  imports: [
    GridWrapperComponent,
    InputComponent,
    ButtonComponent,
    ModalComponent,
    CommonModule,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  title = 'angular-task-manager';

  isModalVisible = false;

  showModal = () => {
    this.isModalVisible = true;
  };

  hideModal = () => {
    console.log('hideModal');
    this.isModalVisible = false;
  };
}
