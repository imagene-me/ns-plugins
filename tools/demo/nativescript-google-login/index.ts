import { DemoSharedBase } from '../utils';
import { GoogleLogin } from '@imagene.me/nativescript-google-login';
import { Application, isIOS } from '@nativescript/core';

export class DemoSharedNativescriptGoogleLogin extends DemoSharedBase {
	googleLogin: GoogleLogin;

	init(): void {
		try {
			if (isIOS) {
				this.googleLogin = new GoogleLogin(
					{
						serverClientId: '1093279712153-m5ggq5i59cogt538c62fg3lss7tforig.apps.googleusercontent.com',
						clientId: '1093279712153-qgrdtsrg76kleref0ip14k2jgpktq8h0.apps.googleusercontent.com',
					},
					Application.ios.rootController
				);
			} else {
				this.googleLogin = new GoogleLogin(
					{
						serverClientId: '1093279712153-m5ggq5i59cogt538c62fg3lss7tforig.apps.googleusercontent.com',
					},
					Application.android.foregroundActivity
				);
			}
		} catch (error) {
			console.log(error);
		}
	}

	login(): void {
		if (isIOS) {
			this.googleLogin.setIosUIViewController(Application.ios.rootController);
		}
		this.googleLogin.login().subscribe(
			(result) => {
				console.log('Success', result);
			},
			(error) => {
				console.log('Error', error);
			}
		);
	}

  silentLogin(): void {
    if (isIOS) {
      this.googleLogin.setIosUIViewController(Application.ios.rootController);
    }
    this.googleLogin.silentLogin().subscribe(
      (result) => {
        console.log('Success', result);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

	logout(): void {
		this.googleLogin.logout().subscribe(
			(result) => {
				console.log('Success', result);
			},
			(error) => {
				console.log('Error', error);
			}
		);
	}
}
