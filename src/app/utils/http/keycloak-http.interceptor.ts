import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { KeycloakService } from '../keycloak/keycloak.service';
import { inject } from '@angular/core';

export const keycloakHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakServive:KeycloakService = inject(KeycloakService);
  const token = keycloakServive.keycloak.token;
  if(!token) {
    return next(req);
  }
  const authReq = req.clone({
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  })
  return next(authReq);
};
