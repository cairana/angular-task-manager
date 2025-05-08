import { Component, input, output } from '@angular/core';
import { CheckIconComponent } from '../check-icon/check-icon.component';

@Component({
  selector: 'app-check-icon-button',
  standalone: true,
  imports: [CheckIconComponent],
  templateUrl: './check-icon-button.component.html',
})
export class CheckIconButtonComponent {

  // todoToggled = output<>();

  onMouseEnter() {
    console.log("Enter")
  }
  onMouseLeave() {
    console.log("leave")
  }
}
