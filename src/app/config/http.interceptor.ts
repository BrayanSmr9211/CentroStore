// src/app/config/http.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    let headers = req.headers
      .set('X-Content-Type-Options', 'nosniff')
      .set('X-Frame-Options', 'DENY');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    const secureReq = req.clone({ headers });
    return next.handle(secureReq);
  }
}
