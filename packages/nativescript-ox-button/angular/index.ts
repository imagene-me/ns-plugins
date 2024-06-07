import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { NativescriptOxButton } from '@imagene.me/nativescript-ox-button';

@NgModule({
  declarations: [],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptOxButtonModule {}

registerElement('NsOxButton', () => NativescriptOxButton);

// Uncomment this line if the package provides a custom view component
// registerElement('NativescriptOxButton', () => NativescriptOxButton);
