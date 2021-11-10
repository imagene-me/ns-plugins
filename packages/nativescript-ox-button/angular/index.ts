import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { NativescriptOxButton } from '@imagene.me/nativescript-ox-button';

@NgModule({
    declarations: [],
    exports: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NativeScriptOxButtonModule {}

registerElement('NsOxButton', () => NativescriptOxButton);
