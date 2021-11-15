import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOxButtonComponent } from './nativescript-ox-button.component';
import { NativeScriptOxButtonModule as NgOxButtonModule } from '@imagene.me/nativescript-ox-button/angular';

console.log(NgOxButtonModule)

@NgModule({
	imports: [
    NgOxButtonModule,
	  NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([
      {
        path: '',
        component: NativescriptOxButtonComponent
      }
    ])
  ],
	declarations: [NativescriptOxButtonComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOxButtonModule {}
