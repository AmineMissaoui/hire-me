import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'src/environments/environment';
import { AuthService } from '../shared/auth.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
  
    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      // add JWT auth header if a user is logged in for API requests
      const accessToken = localStorage.getItem('access_token');
      const isApiUrl = request.url.startsWith(config);
      if (accessToken && isApiUrl) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${accessToken}` },
        });
      }
  
      return next.handle(request);
    }
  }