import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'nativescript-google-login',
		},
		{
			name: 'nativescript-highcharts',
		},
		{
			name: 'nativescript-shadow',
		},
		{
			name: 'nativescript-toast',
		},
	];
}
