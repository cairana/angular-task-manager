import { Component, Input, input } from '@angular/core';

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
