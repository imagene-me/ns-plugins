import { DemoSharedBase } from '../utils';
import { GoogleLogin } from '@imagene.me/nativescript-google-login';
import { Application } from '@nativescript/core';
import { Dialogs } from '@nativescript/core';

export class DemoSharedNativescriptGoogleLogin extends DemoSharedBase {
	googleLogin: GoogleLogin;

	init(): void {
		try {
			this.googleLogin = new GoogleLogin(
				{
					serverClientId: '1093279712153-m5ggq5i59cogt538c62fg3lss7tforig.apps.googleusercontent.com',
				},
				Application.android.foregroundActivity
			);
		} catch (error) {
			console.log(error);
		}
	}

	login(): void {
		this.googleLogin.login().subscribe(
			(result) => {
				console.log(result);
				Dialogs.alert({
					message: `Success: ${result.authCode}`,
				}).then(() => {});
			},
			(error) => {
				Dialogs.alert({
					message: error,
				}).then(() => {});
			}
		);
	}

	logout(): void {
		this.googleLogin.logout().subscribe(
			(result) => {
				Dialogs.alert({
					message: 'Logout Successful',
				}).then(() => {});
			},
			(error) => {
				Dialogs.alert({
					message: error,
				}).then(() => {});
			}
		);
	}

	silent(): void {
		this.googleLogin.silentLogin().subscribe(
			(result) => {
				Dialogs.alert({
					message: `Success: ${result.authCode}`,
				}).then(() => {});
			},
			(error) => {
				Dialogs.alert({
					message: error,
				}).then(() => {});
			}
		);
	}
}
