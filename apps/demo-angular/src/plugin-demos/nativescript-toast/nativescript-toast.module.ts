import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptToastComponent } from './nativescript-toast.component';

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptRouterModule.forChild(
			[{ path: '', component: NativescriptToastComponent }]
		)],
	declarations: [NativescriptToastComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptToastModule {}
