import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { GridComponent } from './components/grid/grid.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, GridComponent],
  template: '<app-header/> <main><app-grid/></main>',
})
export class AppComponent {
  title = 'angular-task-manager';
}
