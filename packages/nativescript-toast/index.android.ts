import { Color, Utils } from '@nativescript/core';
import { ToastDuration } from './enums/toast-duration';
import { ToastVariant } from './enums/toast-variant';
import { ToastVariantParams } from './models/variant-params';
import { ToastOptions } from './models/toast-options';
import { COLOR_MAP } from './const/color-map';

export class Toasty {
	private _duration: ToastDuration;
	private _text: string;
	private _androidOpts: any;
	private _toast: android.widget.Toast;
	private _variant: ToastVariant;
	private _customVariantParams: ToastVariantParams;

	constructor(opts?: ToastOptions) {
		this._text = opts?.text;
		this._duration = opts?.duration ?? ToastDuration.Short;
		this._variant = opts?.variant ?? ToastVariant.Success;
		this._customVariantParams = opts?.customVariantParams;
		this._androidOpts = opts?.android ?? {};
		// create the android Toast
		this._toast = android.widget.Toast.makeText(Utils.android.getApplicationContext(), this._text, android.widget.Toast.LENGTH_SHORT);

		const ref = new WeakRef<Toasty>(this);
		this._toast.getView().setOnTouchListener(
			new android.view.View.OnTouchListener({
				onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean {
					ref.get()?._toast?.cancel();

					return false;
				},
			})
		);

		// set the values
		this.setToastDuration(this._duration).setVariant(this._variant, this._customVariantParams).setToastPosition().setTextPosition();

		return this;
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
			this.setVariantTemplate({
				backgroundColor: customParams.backgroundColor,
				textColor: customParams.textColor,
			});

			return this;
		}

		if (value) {
			this.setVariantTemplate({
				backgroundColor: COLOR_MAP[value].background,
				textColor: COLOR_MAP[value].text,
			});
		}

		return this;
	}

	setTextColor(value: Color | string) {
		if (value) {
			const view = this._toast?.getView();
			const text = view?.findViewById(android.R.id.message) as android.widget.TextView;
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

	setTextPosition() {
		const view = this._toast?.getView();
		const text = view?.findViewById(android.R.id.message) as android.widget.TextView;

		if (text != null) {
			text.setGravity(android.view.Gravity.CENTER);
		}

		return this;
	}

	setBackgroundColor(value: Color | string) {
		if (value) {
			const view = this._toast?.getView();
			if (typeof value === 'string') {
				const nativeColor = new Color(value).android;
				// Gets the actual oval background of the Toast then sets the colour filter
				view?.getBackground().setColorFilter(nativeColor, android.graphics.PorterDuff.Mode.SRC_IN);
			} else {
				view?.getBackground().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
			}
		}

		return this;
	}

	setToastDuration(value: ToastDuration) {
		switch (value) {
			case ToastDuration.Short:
				this._toast?.setDuration(android.widget.Toast.LENGTH_SHORT);
				break;
			case ToastDuration.Long:
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
