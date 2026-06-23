import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Venta } from '../../../models/venta';
import { VentasService } from '../../../services/ventas.service';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas implements OnInit {

  ventas: Venta[] = [];

  constructor(
    private ventasService: VentasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas() {
    this.ventasService.listar().subscribe({
      next: (data) => {
        this.ventas = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  eliminar(id: number) {

    if (!confirm('¿Eliminar venta?')) {
      return;
    }

    this.ventasService.eliminar(id).subscribe({
      next: () => {
        this.cargarVentas();
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  editar(id: number) {
    this.router.navigate(['/ventas/editar', id]);
  }

  verDetalle(id: number) {
    this.router.navigate(['/ventas/detalle', id]);
  }

  nuevaVenta() {
    this.router.navigate(['/ventas/nueva']);
  }

}
