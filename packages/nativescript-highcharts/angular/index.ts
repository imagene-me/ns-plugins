import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Highcharts } from '@mhtghn/nativescript-highcharts';
import { DIRECTIVES } from './highcharts.directive';

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES]
})
export class HighchartsModule {}

// Uncomment this line if the package provides a custom view component
registerElement('Highcharts', () => Highcharts);
