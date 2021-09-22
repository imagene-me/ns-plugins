import { GoogleLoginResult } from './models/google-login-result';
import { GoogleLoginConfig } from './models/google-login-config';
import { GoogleLoginError } from './enums/google-login-error';
import { Observable as NsObservable } from '@nativescript/core';
import { Observable } from 'rxjs';

export abstract class Common extends NsObservable {
  protected config: GoogleLoginConfig;
  protected activity: any;
  constructor(config: GoogleLoginConfig, activity?: any) {
    super();
    this.config = config;
    this.activity = activity;
  }
  abstract login(): Observable<GoogleLoginResult>;
  abstract logout(): Observable<boolean>;
  abstract setAndroidActivity(activity: any): void;
  abstract setIosUIViewController(uIViewController: any): void;
}

export {
  GoogleLoginConfig,
  GoogleLoginResult,
  GoogleLoginError,
}
