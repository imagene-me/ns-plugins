import { NgModule } from '@angular/core';
import { NativeShadowDirective } from './ng-shadow.directive';


@NgModule({
  imports: [],
  declarations: [
    NativeShadowDirective,
  ],
  exports: [
    NativeShadowDirective,
  ],
  providers: [],
})
export class NgShadowModule { }

// Uncomment this line if the package provides a custom view component
// registerElement('NativescriptShadow', () => NativescriptShadow);
