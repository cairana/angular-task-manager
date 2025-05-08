import { Component, OnInit, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { GridComponent } from './components/grid/grid.component';
import { TasksService } from './services/tasks.service';
import { Task } from './model/task.type';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, GridComponent],
  template: '<app-header/><main><app-grid/></main>'
})
export class AppComponent {
  title = 'angular-task-manager';




}
