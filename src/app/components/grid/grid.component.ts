import {  Component, inject, OnInit, signal } from '@angular/core';
import { GridWrapperComponent } from '../grid-wrapper/grid-wrapper.component';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../model/task.type';

@Component({
  selector: 'app-grid',
  
  imports: [GridWrapperComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit {
  title = 'angular-task-manager';

  tasksService = inject(TasksService);
  tasks = signal<Task[]>([])


  ngOnInit() {
    this.tasks.set(this.tasksService.getTasks());
  }
}
