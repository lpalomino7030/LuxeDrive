import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  private apiUrl = 'http://localhost:8082/autos';

  constructor(private http: HttpClient) {}
  cargarAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.apiUrl);
  }
}
