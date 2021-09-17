import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptShadow } from '@demo/shared';
import {} from '@imagene.me/nativescript-shadow';

@Component({
	selector: 'demo-nativescript-shadow',
	templateUrl: 'nativescript-shadow.component.html',
})
export class NativescriptShadowComponent {
	demoShared: DemoSharedNativescriptShadow;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptShadow();
	}
}
