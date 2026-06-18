import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
        localStorage.setItem('token', response.token);
        localStorage.setItem('rol', response.rol);

        alert('Login correcto');

        if (response.rol === 'ADMIN') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/cliente']);
        }

      },

      error: (err) => {
        console.error(err);

        alert('Usuario o contraseña incorrectos');
      },
    });
  }
}
