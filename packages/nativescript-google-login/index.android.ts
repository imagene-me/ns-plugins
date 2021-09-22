import { AndroidActivityResultEventData, AndroidApplication, Application } from '@nativescript/core';
import { GoogleLoginConfig } from './models/google-login-config';
import { GoogleLoginResult } from './models/google-login-result';
import { Observable, Subscriber } from 'rxjs';
import { Common } from './common';
import { GoogleLoginError } from './enums/google-login-error';


declare const java;
declare var com: any;

const actionRunnable = (function() {
  return java.lang.Runnable.extend({
    action: undefined,
    run() {
      this.action();
    },
  });
})();

class GoogleLogin extends Common {
  private googleClient: any; // com.google.android.gms.common.api.GoogleApiClient
  private mGoogleApiClient: any;
  private rcGoogleSignIn: number = 597; // < 16 bits
  private handleResult: boolean = false;

  private readonly gms = com.google.android.gms;

  constructor(config: GoogleLoginConfig, activity: any) {
    super(config, activity);
  }

  onLoginResult = (subscriber: Subscriber<GoogleLoginResult>) =>
    ({ requestCode, resultCode, intent }: AndroidActivityResultEventData) => {
      if (!this.handleResult) {
        subscriber.complete();
        return;
      }
      if (requestCode === this.rcGoogleSignIn) {
        this.handleResult = false;

        try {
          if (requestCode === this.rcGoogleSignIn) {
            // @ts-ignore
            if (resultCode === android.app.Activity.RESULT_OK) {
              const signInResult = this.gms.auth.api.Auth.GoogleSignInApi.getSignInResultFromIntent(intent);
              if (signInResult.isSuccess()) {
                const account = signInResult.getSignInAccount();
                subscriber.next({
                  authCode: account.getServerAuthCode(),
                });
              } else {
                subscriber.error(new Error(GoogleLoginError.NoSuccess));
              }
              // @ts-ignore
            } else if (resultCode === android.app.Activity.RESULT_CANCELED) {
              subscriber.error(new Error(GoogleLoginError.Cancelled));
            }
          }
        } catch (e) {
          subscriber.error(new Error(GoogleLoginError.UnknownError));
        }

        subscriber.complete();
      }
    }

  private getGoogleSignInOptions(): any {
    let gso = new this.gms.auth.api.signin.GoogleSignInOptions
      .Builder(this.gms.auth.api.signin.GoogleSignInOptions.DEFAULT_SIGN_IN)
      .requestEmail();
    gso = gso.requestScopes(
      new this.gms.common.api.Scope(this.gms.common.Scopes.FITNESS_ACTIVITY_READ),
      [new this.gms.common.api.Scope(this.gms.common.Scopes.FITNESS_LOCATION_READ)]
    );
    gso = gso.requestServerAuthCode(
      this.config.serverClientId,
    );
    gso = gso.build();
    return gso;
  }

  silentLogin(): Observable<GoogleLoginResult> {
    return new Observable<GoogleLoginResult>((subscriber) => {
      try {
        this.initGoogleApiClient();

        const onResult = (signInResult) => {
          if (signInResult.isSuccess()) {
            const account = signInResult.getSignInAccount();
            subscriber.next({
              authCode: account.getServerAuthCode(),
            });
          } else {
            subscriber.error(new Error(GoogleLoginError.NoSuccess));
          }
          subscriber.complete();
        };

        const resultCallback = new this.gms.common.api.ResultCallback({
          onResult,
        });

        const pendingTask = this.gms.auth.api.Auth.GoogleSignInApi.silentSignIn(this.mGoogleApiClient);
        if (pendingTask.isDone()) {
          onResult(pendingTask.get());
        } else {
          pendingTask.setResultCallback(resultCallback);
        }

      } catch (error) {
        subscriber.error(error);
        subscriber.complete();
      }
    });
  }

  login(): Observable<GoogleLoginResult> {
    return new Observable((subscriber) => {
      try {
        this.initGoogleClient();
        this.handleResult = true; // to avoid calling the call back 2 times

        Application.android.on(AndroidApplication.activityResultEvent, this.onLoginResult(subscriber));
        Application.android.off(AndroidApplication.activityResultEvent, this.onLoginResult(subscriber));

        const uiAction = new actionRunnable();
        uiAction.action = () => {
          try {
            const signInIntent = this.googleClient.getSignInIntent();
            this.activity.startActivityForResult(signInIntent, this.rcGoogleSignIn);
          } catch (e) {
            throw new Error('[ERROR] runOnUiThread(): ' + e);
          }
        };
        this.activity.runOnUiThread(uiAction);
      } catch (error) {
        subscriber.error(error);
        subscriber.complete();
      }
    });
  }

  logout(): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      try {
        this.googleClient.signOut();
        this.handleResult = true;
        subscriber.next(true);
        subscriber.complete();
      } catch (error) {
        subscriber.error(error);
        subscriber.complete();
      }
    });
  }

  setAndroidActivity(activity: any): void {
    this.activity = activity;
  }

  setIosUIViewController(uIViewController: any) {
    this.activity = uIViewController;
  }

  private initGoogleClient(): void {
    try {
      if (!this.googleClient) {
        this.googleClient =
          this.gms.auth.api.signin.GoogleSignIn.getClient(this.activity, this.getGoogleSignInOptions());
      }
    } catch (error) {
      throw new Error(GoogleLoginError.InitError);
    }
  }

  private initGoogleApiClient(): void {
    try {
      if (!this.mGoogleApiClient) {
        const connectionFailedListener = new this.gms.common.api.GoogleApiClient.OnConnectionFailedListener({}); // TODO implement callbacks
        this.mGoogleApiClient = new this.gms.common.api.GoogleApiClient.Builder(this.activity)
          .enableAutoManage(this.activity, connectionFailedListener)
          .addApi(this.gms.auth.api.Auth.GOOGLE_SIGN_IN_API, this.getGoogleSignInOptions())
          .build();
      }
    } catch (error) {
      throw new Error(GoogleLoginError.InitError);
    }
  }

}

export {
  GoogleLoginError,
  GoogleLogin,
}
