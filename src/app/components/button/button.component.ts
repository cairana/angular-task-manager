import { Component, effect, Input, input } from '@angular/core';
import { Task } from '../../model/task.type';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() onClick!: () => void;

  buttonDisabled = input(false);

  onMouseClick(event: MouseEvent) {
    this.onClick();

    event.preventDefault();
  }
}
