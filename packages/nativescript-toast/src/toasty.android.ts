import { Color, Utils } from '@nativescript/core';
import { ToastDuration, ToastVariant, ToastOptions, ToastVariantParams } from './toast.common';

export * from './toast.common';

export class Toasty {
  private _duration: ToastDuration;
  private _text: string;
  private _androidOpts: any;
  private _toast: android.widget.Toast;
  private _variant: ToastVariant;
  private _customVariantParams: ToastVariantParams;

  constructor(opts?: ToastOptions) {
    this._text = opts?.text;
    this._duration = opts?.duration ?? ToastDuration.SHORT;
    this._variant = opts?.variant ?? ToastVariant.SUCCESS;
    this._customVariantParams = opts?.customVariantParams;
    this._androidOpts = opts?.android ?? {};
    // create the android Toast
    this._toast = android.widget.Toast.makeText(
      Utils.android.getApplicationContext(),
      this._text,
      android.widget.Toast.LENGTH_SHORT
    );

    const ref = new WeakRef<Toasty>(this);
    this._toast.getView().setOnTouchListener(
      new android.view.View.OnTouchListener({
        onTouch(
          param0: android.view.View,
          param1: android.view.MotionEvent
        ): boolean {
          ref.get()?._toast?.cancel();

          return false;
        }
      })
    );

    // set the values
    this.setToastDuration(this._duration)
      .setToastPosition()
      .setVariant(this._variant, this._customVariantParams);

    return this;
  }

  get duration() {
    return this._duration;
  }

  set duration(value: ToastDuration) {
    if (value) {
      this._duration = value;
      this.setToastDuration(value);
    }
  }

  show() {
    if (!this._text) {
      throw new Error('Toasty Text is not set.');
    } else {
      this._toast?.show();
    }
  }

  setVariant(value: ToastVariant, customParams?: ToastVariantParams) {
    if (customParams) {
      this.setVariantTemplate(
        {
          backgroundColor: customParams.backgroundColor,
          textColor: customParams.textColor
        }
      )

      return this;
    }

    if (value) {
      switch (value) {
        case ToastVariant.SUCCESS:
          this.setVariantTemplate({
            backgroundColor: '#4e576b',
            textColor: '#ffffff'
          });
          break;
        case ToastVariant.ERROR:
          this.setVariantTemplate({
            backgroundColor: '#fef7f7',
            textColor: '#e12a37'
          });
          break;
      }
    }

    return this;
  }

  setTextColor(value: Color | string) {
    if (value) {
      const view = this._toast?.getView();
      const text = view?.findViewById(
        android.R.id.message
      ) as android.widget.TextView;
      // set the text color
      if (typeof value === 'string') {
        const nativeColor = new Color(value).android;
        text?.setTextColor(nativeColor);
      } else {
        text?.setTextColor(value.android);
      }
    }

    return this;
  }

  setBackgroundColor(value: Color | string) {
    if (value) {
      const view = this._toast?.getView();
      if (typeof value === 'string') {
        const nativeColor = new Color(value).android;
        // Gets the actual oval background of the Toast then sets the colour filter
        view
          ?.getBackground()
          .setColorFilter(nativeColor, android.graphics.PorterDuff.Mode.SRC_IN);
      } else {
        view
          ?.getBackground()
          .setColorFilter(
            value.android,
            android.graphics.PorterDuff.Mode.SRC_IN
          );
      }
    }

    return this;
  }

  setToastDuration(value: ToastDuration) {
    switch (value) {
      case ToastDuration.SHORT:
        this._toast?.setDuration(android.widget.Toast.LENGTH_SHORT);
        break;
      case ToastDuration.LONG:
        this._toast?.setDuration(android.widget.Toast.LENGTH_LONG);
        break;
      default:
        this._toast?.setDuration(android.widget.Toast.LENGTH_SHORT);
        break;
    }

    return this;
  }

  setToastPosition() {
    this._toast?.setGravity(android.view.Gravity.BOTTOM, 0, 50);
    return this;
  }

  private setVariantTemplate(params: ToastVariantParams) {
    this.setTextColor(params.textColor);
    this.setBackgroundColor(params.backgroundColor);
  }
}
