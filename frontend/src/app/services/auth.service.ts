import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  saveRole(role: string) {
    localStorage.setItem('rol', role);
  }

  getRole() {
    return localStorage.getItem('rol');
  }

  logout() {
    localStorage.clear();
  }
}
