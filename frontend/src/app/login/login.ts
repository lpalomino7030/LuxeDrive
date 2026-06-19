import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

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
  rol = 'ADMIN';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login() {
    const body = {
      username: this.username,
      password: this.password,
      rol: this.rol,
    };

    this.http.post<any>('http://localhost:8080/auth/login', body).subscribe({
      next: (response) => {
        const token = response.token;
        localStorage.setItem('token', token);

        const decoded: any = jwtDecode(token);

        const userRol = decoded.rol;
        console.log(decoded);

        localStorage.setItem('rol', userRol);

        alert('Login correcto');

        if (userRol === 'ADMIN' || "admin") {
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
