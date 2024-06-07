# Imagene-nativescript-toast based on nativescript-toasty

## Install

### [NativeScript 7.0+](https://github.com/imagene-me/ns-plugins/tree/master/packages/nativescript-toast)

`tns plugin add @imagene-me/nativescript-toast`

## Usage

TypeScript

```js
import { Toasty } from '@imagene-me/nativescript-toast';
// Toasty accepts an object for customizing its behavior/appearance. The only REQUIRED value is `text` which is the message for the toast.
const toast = new Toasty({
  text: 'Toast message',
  variant: ToastVariant.Success,
});
toast.show();

// or you can set the properties of the Toasty instance
const toasty = new Toasty({
  text: 'Somethign something...',
  ios: {
    displayShadow: true,
    shadowColor: '#fff000',
    cornerRadius: 24,
  },
});
```

JavaScript

```js
var toasty = require('@imagene-me/nativescript-toast').Toasty;
var toast = new toasty({ text: 'Toast message' });
toast.show();
```

### API

```typescript
export enum ToastDuration {
  'Short',
  'Long',
}

export enum ToastVariant {
  'Success' = 'success',
  'Error' = 'error',
}

/**
 * Custom Variant params
 */
export interface ToastVariantParams {
  backgroundColor: string;
  textColor: string;
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
     * The native iOS view to anchor the Toast to.
     */
    anchorView?: any;

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
```
