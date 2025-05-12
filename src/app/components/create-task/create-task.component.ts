import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule, InputComponent],
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
  taskName = '';
  description = '';
}
