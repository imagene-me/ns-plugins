import { Color } from '@nativescript/core';

export enum ToastVariant {
  'SUCCESS' = 'success',
  'ERROR' = 'error',
}

export enum ToastDuration {
  'SHORT' = 'short',
  'LONG' = 'long'
}

export enum ToastColorMap {
  SuccessText = '#ffffff',
  SuccessBackground = '#4e576b',
  ErrorText = '#e12a37',
  ErrorBackground = '#fef7f7',
}

export interface ToastOptions {
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

export interface ToastVariantParams {
  backgroundColor: string;
  textColor: string;
}
