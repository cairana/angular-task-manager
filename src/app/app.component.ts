import { Component } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [ContentComponent, ToastComponent],
  template:'<main class="h-[100dvh] bg-gray-900"><app-content/><app-toast/></main>',
})
export class AppComponent {
  title = 'angular-task-manager';
}
