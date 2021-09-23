import { Common } from './common';
import { GoogleLoginConfig } from './models/google-login-config';
import { GoogleLoginResult } from './models/google-login-result';
import { Observable, Subscriber } from 'rxjs';
import { GoogleLoginError } from './enums/google-login-error';

class GoogleLogin extends Common {

  private readonly scopes: string[] = [
    'https://www.googleapis.com/auth/fitness.activity.read',
    'https://www.googleapis.com/auth/fitness.activity.write',
  ];

  constructor(config: GoogleLoginConfig, activity: any) {
    super(config, activity);
  }

  login(): Observable<GoogleLoginResult> {
    return new Observable((subscriber) => {
      try {
        this.signIn(this.signInCallback(subscriber));
      } catch (error) {
        this.handleError(subscriber)(error);
      }
    });
  }

  silentLogin(): Observable<GoogleLoginResult> {
    return new Observable<GoogleLoginResult>((subscriber) => {
      subscriber.error(new Error(GoogleLoginError.SilentLoginNotSupported));
      subscriber.complete();
    });
  }

  logout(): Observable<boolean> {
    return new Observable((subscriber) => {
      try {
        GIDSignIn.sharedInstance.signOut();
        subscriber.next(true);
      } catch (error) {
        subscriber.error(error);
      }
      subscriber.complete();
    });
  }

  setAndroidActivity(activity: any): void {
    this.activity = activity;
  }

  setIosUIViewController(uIViewController: any) {
    this.activity = uIViewController;
  }

  private createGIDConfigurationFromConfig(): GIDConfiguration {
    return new GIDConfiguration({
      clientID: this.config.clientId,
      serverClientID: this.config.serverClientId,
    }).initWithClientIDServerClientID(this.config.clientId, this.config.serverClientId);
  }

  private signIn(callback: (user: GIDGoogleUser, error: NSError) => void): void {
    GIDSignIn.sharedInstance.signInWithConfigurationPresentingViewControllerCallback(
      this.createGIDConfigurationFromConfig(),
      this.activity,
      callback,
    );
  }

  private addScopes(callback: (user: GIDGoogleUser, error: NSError) => void): void {
    GIDSignIn.sharedInstance.addScopesPresentingViewControllerCallback(
      this.scopes,
      this.activity,
      callback,
    );
  }

  private signInCallback = (subscriber: Subscriber<GoogleLoginResult>) => (user: GIDGoogleUser, error: NSError): void => {
    if (error) {
      this.handleError(subscriber)(error);
      return;
    }
    this.addScopes(this.addScopesCallback(subscriber));
  }

  private addScopesCallback = (subscriber: Subscriber<GoogleLoginResult>) => (user: GIDGoogleUser, error: NSError): void => {
    if (error) {
      this.handleError(subscriber)(error);
      return;
    }
    this.onSuccessLogin(subscriber)(user);
  }

  private onSuccessLogin = (subscriber: Subscriber<GoogleLoginResult>) => (user: GIDGoogleUser) => {
    subscriber.next({
      authCode: user.serverAuthCode,
    });
    subscriber.complete();
  }

  private handleError = (subscriber: Subscriber<GoogleLoginResult>) => (error: NSError) => {
    subscriber.error(this.getError(error));
    subscriber.complete();
  }

  private getError(error: NSError | Error): NSError | Error {
    if ('code' in error) {
      switch (error.code.toString()) {
        case '-1':
          return Error(GoogleLoginError.UnknownError);
        case '-5':
          return Error(GoogleLoginError.Cancelled);
        default:
          return Error(error.localizedDescription);
      }
    }
    return error;
  }
}

export {
  GoogleLoginError,
  GoogleLogin,
}
