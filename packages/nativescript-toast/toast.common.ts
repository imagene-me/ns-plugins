import { Color, Length } from '@nativescript/core';

export enum ToastVariant {
  'Success' = 'success',
  'Error' = 'error',
}

export enum ToastDuration {
  'Short' = 'short',
  'Long' = 'long'
}

export enum ToastPosition {
  'BOTTOM' = 'bottom',
  'BOTTOM_LEFT' = 'bottomLeft',
  'BOTTOM_RIGHT' = 'bottomRight',
  'CENTER' = 'center',
  'CENTER_LEFT' = 'centerLeft',
  'CENTER_RIGHT' = 'centerRight',
  'TOP' = 'top',
  'TOP_LEFT' = 'topLeft',
  'TOP_RIGHT' = 'topRight'
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
   * Text color of the Toast message.
   */
  textColor?: Color | string;

  /**
   * Background Color of the Toast.
   */
  backgroundColor?: Color | string;

  position?: ToastPosition | number;

  /**
   *  Y Position
   */
  yAxisOffset?: Length | number;
  /**
   *  X Position
   */
  xAxisOffset?: Length | number;

  /**
   *  Tap toast to dismiss
   */
  tapToDismiss?: boolean;

  /**
   * The native iOS/Android view to anchor the Toast to.
   */
  anchorView?: any;

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
