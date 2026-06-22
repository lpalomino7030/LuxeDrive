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
    // 2. Recupera el token guardado en el login
    const token = localStorage.getItem('token');

    // 3. Define los encabezados con el formato Bearer
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // 4. Pasa los headers en la petición
    this.http.get<any[]>('http://localhost:8082/autos', { headers }).subscribe({
      next: (data) => {
        this.autos = data;
      },
      error: (err) => {
        console.error('Error al cargar autos:', err);
        if (err.status === 403 || err.status === 401) {
          alert('Tu sesión ha caducado. Vuelve a iniciar sesión.');
          window.location.href = '/login'; // Ajusta a tu ruta de login
        }
      },
    });
  }
}
