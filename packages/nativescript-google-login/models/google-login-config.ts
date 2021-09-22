import { GoogleLoginIosConfig } from '@imagene.me/nativescript-google-login/models/google-login-ios-config';

export interface GoogleLoginConfig extends Partial<Pick<GoogleLoginIosConfig, 'clientId'>> {
  serverClientId: string;
}
