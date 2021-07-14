import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptGoogleLoginComponent } from './nativescript-google-login.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptGoogleLoginComponent }])],
	declarations: [NativescriptGoogleLoginComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptGoogleLoginModule {}
