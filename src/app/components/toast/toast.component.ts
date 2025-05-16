import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { Toast } from '../../model/toast.types';

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
