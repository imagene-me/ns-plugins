import { Common } from './common';
import { Observable, of } from 'rxjs';
import { GoogleLoginResult } from './models/google-login-result';
import { GoogleLoginConfig } from './models/google-login-config';


export class GoogleLogin extends Common {

  constructor(config: GoogleLoginConfig, viewController: any) {
    super(config, viewController);
  }

  login(): Observable<GoogleLoginResult> {
    return of({
      authCode: '123',
    });
  }

  logout(): Observable<boolean> {
    return of(true);
  }

  silentLogin(): Observable<GoogleLoginResult> {
    return of(undefined);
  }

}
