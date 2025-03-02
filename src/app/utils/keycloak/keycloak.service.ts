import { Injectable } from '@angular/core';
import Keycloak  from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private  keycloakAuth: Keycloak | undefined;

  constructor() { }

  get keycloak(): Keycloak {
    if (!this.keycloakAuth) {
      this.keycloakAuth = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'whatsapp-clone',
        clientId: 'whatsapp-clone-app'
      });
    }
    return this.keycloakAuth;
  }

  async init(): Promise<void> {
    const authenticated: boolean = await this.keycloak.init({
      onLoad: 'login-required'
    });
  }

  async login(): Promise<void> {
    await this.keycloak.login();
  }

  get userId(): string {
    return this.keycloak?.tokenParsed?.sub as string;
  }

  get isTokenValid(): boolean {
    return !this.keycloak.isTokenExpired();
  }

  get fullName(): string {
    return this.keycloak?.tokenParsed?.['name'] as string;
  }

  logout() {
    return this.keycloak.login(({redirectUri:'http://localhost:4200'}));
  }

  accountManagement() {
    return this.keycloak.accountManagement();
  }
}
