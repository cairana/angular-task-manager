import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, ToastComponent],
  template: '<app-header/> <main><app-content/></main>  <app-toast/>',
})
export class AppComponent {
  title = 'angular-task-manager';
}
