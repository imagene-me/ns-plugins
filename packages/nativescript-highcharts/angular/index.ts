import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Highcharts } from '@imagene.me/nativescript-highcharts';
import { HighchartsDirective } from './highcharts.directive';

@NgModule({
	declarations: [HighchartsDirective],
	exports: [HighchartsDirective],
})
export class HighchartsModule {}

// Uncomment this line if the package provides a custom view component
registerElement('Highcharts', () => Highcharts);
