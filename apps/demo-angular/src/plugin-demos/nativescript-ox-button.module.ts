import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptOxButtonModule as NativeScriptOxButtonModule2 } from '@imagene.me/nativescript-ox-button/angular';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOxButtonComponent } from './nativescript-ox-button.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptOxButtonComponent }]), NativeScriptOxButtonModule2],
  declarations: [NativescriptOxButtonComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOxButtonModule {}
