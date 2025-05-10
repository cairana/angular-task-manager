import { Component, Input, input } from '@angular/core';
import { Task } from '../../model/task.type';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() onClick!: () => void;

  onMouseClick(event: MouseEvent) {
    console.log('mouseClicked');

    this.onClick();

    event.preventDefault();
  }
}
