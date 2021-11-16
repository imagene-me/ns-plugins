import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOxButton } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-ox-button',
	templateUrl: 'nativescript-ox-button.component.html',
})
export class NativescriptOxButtonComponent {
	demoShared: DemoSharedNativescriptOxButton;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptOxButton();
	}
}
