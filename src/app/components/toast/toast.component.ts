import { Component, inject } from '@angular/core';
import { Toast, ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  toast: Toast | null = null;

  constructor(private toastService: ToastService) {
    this.toastService.toast$.subscribe((toast) => (this.toast = toast));
  }
}
