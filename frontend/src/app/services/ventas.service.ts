import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Venta } from '../models/venta';
import { VentaRequest } from '../models/ventaRequest';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  private apiUrl = 'http://localhost:8080/ventas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.apiUrl}/${id}`);
  }

  registrar(data: VentaRequest): Observable<Venta> {
    return this.http.post<Venta>(this.apiUrl, data);
  }

  actualizar(id: number, data: VentaRequest): Observable<Venta> {
    return this.http.put<Venta>(`${this.apiUrl}/${id}`, data);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
