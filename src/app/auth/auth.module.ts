import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../shared/auth.service';
import { TokenInterceptor } from './token.interceptor';
import { appInitializer } from '../shared/app-initializer';
import { UnauthorizedInterceptor } from './unothorized.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule { 
  constructor(@Optional() @SkipSelf() core: AuthModule) {
    if (core) {
      throw new Error('Core Module can only be imported to AppModule.');
    }
  }

}