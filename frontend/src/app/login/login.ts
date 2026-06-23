import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from './auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {}

  login() {
    const body = {
      username: this.username,
      password: this.password,
    };

    this.http.post<any>('http://localhost:8080/auth/login', body).subscribe({
      next: (response) => {
        const token = response.token;
        this.authService.saveToken(token);

        const decoded: any = jwtDecode(token);
        const userRol = decoded.rol;

        this.authService.saveRole(userRol);

        alert('Login correcto');

        if (userRol?.toUpperCase() === 'ADMIN') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/perfil']);
        }
      },

      error: (err) => {
        console.error(err);

        alert('Usuario o contraseña incorrectos');
      },
    });
  }
}
