import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptHighchartsComponent } from './nativescript-highcharts.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptHighchartsComponent }])],
	declarations: [NativescriptHighchartsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptHighchartsModule {}
