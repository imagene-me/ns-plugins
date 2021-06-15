import { Color } from '@nativescript/core';
import { ToastDuration, ToastOptions, ToastVariant, ToastVariantParams } from './toast.common';

export * from './toast.common';

export class Toasty {
  private _text: string;
  private _duration: ToastDuration | number;
  private _iOSOpts: ToastOptions['ios'];
  private _toastStyle;
  private _variant: ToastVariant;
  private _customVariantParams: ToastVariantParams;

  constructor(opts?: ToastOptions) {
    this._toastStyle = ToastStyle.new();

    // set the default constructor args for private members
    this._text = opts?.text;
    this._duration = opts?.duration ?? 2;
    this._iOSOpts = opts?.ios ?? {};
    this._variant = opts?.variant ?? ToastVariant.SUCCESS;
    this._customVariantParams = opts?.customVariantParams;

    // set the defaults for the toasty, if passed in constructor those values are used
    this.setToastDuration(this._duration)
      .setToastPosition()
      .setVariant(this._variant, this._customVariantParams);

    // check ios configuration
    // if displaying shadow also check if user wants to change default shadow color
    if (this._iOSOpts.displayShadow) {
      this._toastStyle.displayShadow = this._iOSOpts.displayShadow;
      if (this._iOSOpts.shadowColor) {
        if (typeof this._iOSOpts.shadowColor === 'string') {
          this._toastStyle.shadowColor = new Color(
            this._iOSOpts.shadowColor
          ).ios;
        } else {
          this._toastStyle.shadowColor =
            (this._iOSOpts?.shadowColor as any)?.ios ?? new Color('black').ios;
        }
      }
    }

    if (this._iOSOpts.cornerRadius || this._iOSOpts.cornerRadius === 0) {
      this._toastStyle.cornerRadius = this._iOSOpts.cornerRadius;
    }

    if (this._iOSOpts.messageNumberOfLines) {
      this._toastStyle.messageNumberOfLines = this._iOSOpts.messageNumberOfLines;
    }

    ToastManager.shared.style = this._toastStyle;

    return this;
  }

  get duration() {
    return this._duration;
  }

  set duration(value: ToastDuration | number) {
    if (value) {
      this._duration = value;
      this.setToastDuration(value);
    }
  }

  show() {
    if (!this._text) {
      throw new Error('Text is not set');
    } else {
      this._getView()?.makeToastWithOffset(
        this._text,
        CGPointMake(0, 50)
      );
    }
  }

  setTextColor(value: Color | string) {
    if (value) {
      this._textColor = value;
      // set the text color
      if (typeof value === 'string') {
        this._toastStyle.messageColor = new Color(value).ios;
      } else {
        this._toastStyle.messageColor = value.ios;
      }

      // setting the shared style so the colors apply properly
      ToastManager.shared.style = this._toastStyle;
    }

    return this;
  }

  setBackgroundColor(value: Color | string) {
    if (value) {
      this._backgroundColor = value;
      // set the text color
      if (typeof value === 'string') {
        this._toastStyle.backgroundColor = new Color(value).ios;
      } else {
        this._toastStyle.backgroundColor = value.ios;
      }

      // setting the shared style so the colors apply properly
      ToastManager.shared.style = this._toastStyle;
    }

    return this;
  }

  private _updateToastPosition() {
    ToastManager.shared.position = 2;
  }

  setToastPosition() {
    this._updateToastPosition();
    return this;
  }

  setToastDuration(value: ToastDuration | number) {
    switch (value) {
      case ToastDuration.SHORT:
        ToastManager.shared.duration = 2.0;
        break;
      case ToastDuration.LONG:
        ToastManager.shared.duration = 4.0;
        break;
      default:
        ToastManager.shared.duration = 2.0;
        break;
    }
    return this;
  }

  private _getView(): any {
    const root = this.topViewController;
    if (!root) {
      throw new Error('There is no topmost');
    }
    return root.view.window;
  }

  private static get rootViewController(): UIViewController | undefined {
    const keyWindow = UIApplication.sharedApplication.keyWindow;
    return keyWindow != null ? keyWindow.rootViewController : undefined;
  }

  private get topViewController(): UIViewController | undefined {
    const root = Toasty.rootViewController;
    if (root == null) {
      return undefined;
    }
    return this.findTopViewController(root);
  }

  private findTopViewController(
    root: UIViewController
  ): UIViewController | undefined {
    const presented = root.presentedViewController;
    if (presented != null) {
      return this.findTopViewController(presented);
    }
    if (root instanceof UISplitViewController) {
      const last = root.viewControllers.lastObject;
      if (last == null) {
        return root;
      }
      return this.findTopViewController(last);
    } else if (root instanceof UINavigationController) {
      const top = root.topViewController;
      if (top == null) {
        return root;
      }
      return this.findTopViewController(top);
    } else if (root instanceof UITabBarController) {
      const selected = root.selectedViewController;
      if (selected == null) {
        return root;
      }
      return this.findTopViewController(selected);
    } else {
      return root;
    }
  }
}
