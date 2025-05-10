import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [ButtonComponent, InputComponent],
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  closeModal = (): void => {
    this.close.emit();
  };

  
  saveTask = (): void => {
    console.log('saveTask');
    this.save.emit();
  };
}
