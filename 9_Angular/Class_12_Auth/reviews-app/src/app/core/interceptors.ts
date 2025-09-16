import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { AuthService } from './services/auth-service';
import { inject } from '@angular/core';

export const authInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);

  if (
    req.url.includes('login') ||
    req.url.includes('register') ||
    req.url.includes('refresh-token')
  )
    return next(req);

  if (!authService.userData()) return next(req);

  console.log('this is the req', req);

  const token = authService.userData().token;

  //We make a clone of the original http request as request are immutable and by cloning we set the value of the autorization header so that the jwt is sent back to the backend
  const clone = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(clone);
};
