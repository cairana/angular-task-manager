export enum ToastType {
  INFO = 'info',
  WARNING = 'warning',
}

export interface Toast {
  message: string;
  type: ToastType;
}
