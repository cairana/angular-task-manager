import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent],
  template: '<app-header/> <main><app-content/></main>',
})
export class AppComponent {
  title = 'angular-task-manager';
}
