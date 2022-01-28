import { NgModule } from '@angular/core';
import { NativeShadowDirective } from './ng-shadow.directive';

@NgModule({
	imports: [],
	declarations: [NativeShadowDirective],
	exports: [NativeShadowDirective],
	providers: [],
})
export class NgShadowModule {}
export { NativeShadowDirective } from './ng-shadow.directive';

// Uncomment this line if the package provides a custom view component
// registerElement('NativescriptShadow', () => NativescriptShadow);
