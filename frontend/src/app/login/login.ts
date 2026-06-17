import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  login() {

    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>(
      'http://localhost:8088/auth/login',
      body
    ).subscribe({

      next: (response) => {

        localStorage.setItem(
          'token',
          response.token
        );

        alert('Login correcto');

      },

      error: (err) => {

        console.error(err);

        alert('Usuario o contraseña incorrectos');

      }

    });

  }

}
