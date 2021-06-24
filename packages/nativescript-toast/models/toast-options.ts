import { Color } from '@nativescript/core';

import { ToastDuration } from '../enums/toast-duration';
import { ToastVariant } from '../enums/toast-variant';
import { ToastVariantParams } from '../models/variant-params';

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
