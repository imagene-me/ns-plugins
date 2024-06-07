import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Highcharts } from '@imagene.me/nativescript-highcharts';
import { registerElement } from '@nativescript/angular';

@NgModule({
  declarations: [],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HighchartsModule {}

// Uncomment this line if the package provides a custom view component
registerElement('Highcharts', () => Highcharts);
