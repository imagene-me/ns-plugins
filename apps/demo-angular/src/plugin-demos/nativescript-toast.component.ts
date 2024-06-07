import { Component } from '@angular/core';
import { Toasty } from '@imagene.me/nativescript-toast';

@Component({
  selector: 'demo-nativescript-toast',
  templateUrl: 'nativescript-toast.component.html',
})
export class NativescriptToastComponent {
  constructor() {}

  ngOnInit() {}

  shortToast(): void {
    new Toasty({
      text: 'Default short toast',
    }).show();
  }

  longToast() {
    new Toasty({
      text: 'Default long toast... Lorem ipsum dolor sit amet, consectetur adip eum. Lorem ipsum dolor sit amet, con sectetur adip eum. Lorem ipsum dolor sit am',
      duration: ToastDuration.Long,
    }).show();
  }

  errorToast() {
    new Toasty({
      text: 'Default error toast',
      variant: ToastVariant.Error,
    }).show();
  }

  customToast() {
    new Toasty({
      text: 'Custom toast',
      customVariantParams: {
        backgroundColor: '#ccc123',
        textColor: '#aa22ff',
      },
    }).show();
  }
}

export enum ToastVariant {
  'Success' = 'success',
  'Error' = 'error',
}

export enum ToastDuration {
  'Short' = 'short',
  'Long' = 'long',
}
