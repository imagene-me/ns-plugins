# Imagene-me nativescript-toasty based on nativescript-toasty

![Build CI](https://github.com/triniwiz/nativescript-toasty/workflows/Build%20CI/badge.svg)
[![npm](https://img.shields.io/npm/v/nativescript-toasty.svg)](https://www.npmjs.com/package/nativescript-toasty)
[![npm](https://img.shields.io/npm/dt/nativescript-toasty.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-toasty)

## Install

### [NativeScript 7.0+](https://github.com/imagene-me/ns-plugins)

`tns plugin add @imagene-me/nativescript-toasty`

### NativeScript < 7.0

`tns plugin add nativescript-toasty@1.0.0-alpha`

## Usage

TypeScript

```js
/* use package name "nativescript-toasty" for NS < 7.0 */
import { Toasty } from "@imagene-me/nativescript-toasty"

import { isIOS } from '@nativescript/core/platform';
// Toasty accepts an object for customizing its behavior/appearance. The only REQUIRED value is `text` which is the message for the toast.
const toast = new Toasty(
    {
        text: 'Toast message',
        variant: ToastVariant.SUCCESS
    }
);
toast.show();

// you can also chain the methods together and there's no need to create a reference to the Toasty instance with this approach
new Toasty({ text: 'Some Message' })
  .setToastDuration(ToastDuration.LONG)
  .show();

// or you can set the properties of the Toasty instance
const toasty = new Toasty({
  text: 'Somethign something...',
  ios: {
    displayShadow: true,
    shadowColor: '#fff000',
    cornerRadius: 24,
  },
});

toasty.duration = ToastDuration.SHORT;
toasty.textColor = '#fff';
toasty.backgroundColor = new Color('purple');
toasty.show();
```

JavaScript

```js
/* use package name "nativescript-toasty" for NS < 7.0 */
var toasty = require('@imagene-me/nativescript-toasty').Toasty;
var toast = new toasty({ text: 'Toast message' });
toast.show();
```

### API

```typescript

  constructor(opts: ToastyOptions);

  position: ToastPosition;

  duration: ToastDuration;


  /**
   * Show the Toasty
   */
  show();

```

```typescript
export enum ToastDuration {
  'SHORT',
  'LONG',
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
