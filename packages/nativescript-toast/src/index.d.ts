import { ToastDuration, ToastVariant, ToastVariantParams, ToastOptions } from './toast.common';

export declare class Toasty {
  constructor(opts: ToastOptions);

  duration: ToastDuration;
  variant: ToastVariant;
  customVariantParams: ToastVariantParams;

  /**
   * Shows the toast.
   */
  show(): void;
}
