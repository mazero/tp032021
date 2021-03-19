import { environment } from '@env/environment';
import { UserService } from '@services';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.userService.userValue;
    const isLoggedIn = user && user.access_token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if(isLoggedIn && isApiUrl) {
      // set a new header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.access_token}`
        }
      })
    }
    return next.handle(request);
  }
}
