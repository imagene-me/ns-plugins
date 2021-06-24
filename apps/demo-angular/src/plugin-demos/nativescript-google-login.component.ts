import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptGoogleLogin } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-google-login',
	templateUrl: 'nativescript-google-login.component.html',
})
export class NativescriptGoogleLoginComponent {
	demoShared: DemoSharedNativescriptGoogleLogin;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptGoogleLogin();
		this.demoShared.init();
	}
}
