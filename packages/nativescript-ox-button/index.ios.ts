import { NativescriptOxButtonCommon } from './common';

export class NativescriptOxButton extends NativescriptOxButtonCommon {
  createNativeView() {
    return UIButton.buttonWithType(UIButtonType.Custom);
  }
}
