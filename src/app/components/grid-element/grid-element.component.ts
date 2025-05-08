import { Component, input, signal } from '@angular/core';
import { TrashIconComponent } from '../trash-icon/trash-icon.component';
import { Task } from '../../model/task.type';


@Component({
  selector: 'app-grid-element',
  imports: [TrashIconComponent],
  templateUrl: './grid-element.component.html',
  styleUrl: './grid-element.component.css',
})
export class GridElementComponent {


  task = input.required<Task>()
}
