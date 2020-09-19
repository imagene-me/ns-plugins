import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptHighcharts } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-highcharts',
	templateUrl: 'nativescript-highcharts.component.html',
})
export class NativescriptHighchartsComponent {
	demoShared: DemoSharedNativescriptHighcharts;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptHighcharts();
	}
}
