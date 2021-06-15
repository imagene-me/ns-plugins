import { Color } from '@nativescript/core';
import { ToastVariant, ToastVariantParams } from './toast.common';

export declare class Toasty {
  constructor(opts: ToastyOptions);

  position: ToastPosition;
  variant: ToastVariant;
  customVariantParams: ToastVariantParams;

  /**
   * Shows the toast.
   */
  show(): void;

  /**
   * Sets the duration of the toast.
   * @param value [ToastDuration] - Duration of toast.
   */
  setToastDuration(value: ToastDuration): this;

  setToastVariant(value: ToastVariant): this;

  setCustomVariantParams(value: ToastVariantParams): this;
}

export enum ToastDuration {
  'SHORT' = 'short',
  'LONG' = 'long'
}

export enum ToastVariant {
  'SUCCESS' = 'success',
  'ERROR' = 'error',
}

export interface ToastyOptions {
  /**
   * Message text of the Toast.
   */
  text: string;

  /**
   * Duration to show the Toast.
   */
  duration?: ToastDuration;

  /**
   * Change Toast Variant - default SUCCESS
   */
  variant?: ToastVariant;

  /**
   * Set specific background and text color
   */
  customVariantParams?: ToastVariantParams;

  /**
   * Android specific configuration options.
   */
  android?: any;

  /**
   * iOS Specific configuration options.
   */
  ios?: {
    /**
     * The number of lines to allow for the toast message.
     */
    messageNumberOfLines?: number;

    /**
     * The corner radius of the Toast.
     */
    cornerRadius?: number;

    /**
     * True to display a shadow for the Toast.
     */
    displayShadow?: boolean;

    /**
     * The color of the shadow. Only visible if `displayShadow` is true.
     */
    shadowColor?: Color | string;
  };
}
