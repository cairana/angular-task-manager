import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ToastType {
  INFO = 'info',
  WARNING = 'warning',
}

export interface Toast {
  message: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast | null>(null);
  toast$ = this.toastSubject.asObservable();

  showToast(message: string, type: ToastType) {
    console.log('showToast', message, type);
    this.toastSubject.next({ message, type });
    setTimeout(() => this.toastSubject.next(null), 3000);
  }
}
