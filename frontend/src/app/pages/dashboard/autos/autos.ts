import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 1. Importa HttpHeaders

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.html',
  styleUrl: './autos.css',
})
export class Autos {
  autos: any[] = [];

  constructor(private http: HttpClient) {
    this.cargar();
  }

  cargar() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<any[]>('http://localhost:8080/autos', { headers }).subscribe({
      next: (data) => {
        this.autos = data;
      },
      error: (err) => {
        console.error('Error al cargar autos:', err);
        if (err.status === 403 || err.status === 401) {
          alert('Tu sesión ha caducado. Vuelve a iniciar sesión.');
          window.location.href = '/login';
        }
      },
    });
  }
}
