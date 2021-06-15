import { ToastDuration, Toasty } from 'nativescript-toasty';
import { ToastVariant } from 'nativescript-toasty/toast.common';

export function shortToast() {
  new Toasty({
    text: 'Default short toast'
  }).show();
}

export function longToast() {
  new Toasty({
    text: 'Default long toast',
    duration: ToastDuration.LONG,
  }).show();
}

export function errorToast() {
  new Toasty({
    text: 'Default error toast',
    variant: ToastVariant.ERROR
  }).show();
}

export function customToast() {
  new Toasty({
    text: 'Custom toast',
    customVariantParams: {
      backgroundColor: '#ccc123',
      textColor: '#aa22ff'
    }
  }).show();
}
