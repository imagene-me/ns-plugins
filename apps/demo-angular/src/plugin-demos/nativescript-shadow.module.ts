import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptShadowComponent } from './nativescript-shadow.component';
import { NgShadowModule } from '@imagene.me/nativescript-shadow/angular'

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptRouterModule.forChild([{ path: '', component: NativescriptShadowComponent }]),
		NgShadowModule
	],
	declarations: [NativescriptShadowComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptShadowModule {}
