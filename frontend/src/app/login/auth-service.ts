import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  saveRole(role: string): void {
    localStorage.setItem('rol', role);
  }

  getUser(): any {
    const token = this.getToken();

    if (!token) return null;

    return jwtDecode(token);
  }

  getUsername(): string {
    return this.getUser()?.sub ?? '';
  }

  getRol(): string {
    return this.getUser()?.rol ?? '';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
  }
}
