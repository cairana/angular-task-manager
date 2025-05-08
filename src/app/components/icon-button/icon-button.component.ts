import { Component, Input, input } from '@angular/core';
import { Task } from '../../model/task.type';

@Component({
  selector: 'app-icon-button',
  imports: [],
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {

  task = input.required<Task>()

  @Input() onClick!: () => void;

  onMouseClick(event: MouseEvent) {
    console.log("mouseClicked")

    this.onClick();

    event.preventDefault();
  }
}


