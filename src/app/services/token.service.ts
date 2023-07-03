import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLogged(): boolean {
    return this.getToken() !== null;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getNombreUsuario(): string | null { 
    if (!this.isLogged()) { 
      return null;
    }
    try {
      const token = this.getToken();
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const valuesJson = JSON.parse(decodedPayload);
      const nombre = valuesJson.nombre;
      return nombre;
    } catch (error) {
      console.error('Error decoding token payload:', error);
      return null;
    }
  }

  getNombreRol(): string | null { 
    if (!this.isLogged()) { 
      return null;
    }
    try {
      const token = this.getToken();
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const valuesJson = JSON.parse(decodedPayload);
      const nombreRol = valuesJson.nombreRol;
      return nombreRol;
    } catch (error) {
      console.error('Error decoding token payload:', error);
      return null;
    }
  }

  isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    try {
      const token = this.getToken();
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const valuesJson = JSON.parse(decodedPayload);
      const roles = valuesJson.roles;
      return roles.includes('administrador');
    } catch (error) {
      console.error('Error decoding token payload:', error);
      return false;
    }
  }

  isVoter(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    try {
      const token = this.getToken();
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const valuesJson = JSON.parse(decodedPayload);
      const roles = valuesJson.roles;
      return roles.includes('votante');
    } catch (error) {
      console.error('Error decoding token payload:', error);
      return false;
    }
  }

  isCandidate(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    try {
      const token = this.getToken();
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const valuesJson = JSON.parse(decodedPayload);
      const roles = valuesJson.roles;
      return roles.includes('candidato');
    } catch (error) {
      console.error('Error decoding token payload:', error);
      return false;
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
  }
}
