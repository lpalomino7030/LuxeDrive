import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Venta } from '../../../models/venta';
import { VentasService } from '../../../services/ventas.service';
import { TituloEncabezado } from '../titulo-encabezado/titulo-encabezado';
import {ClienteService} from '../../../services/cliente.service';
import { AutoService } from '../../../services/auto.service';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, TituloEncabezado, FormsModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas implements OnInit {
  ventas: Venta[] = [];
  clientes: any[] = [];
  autos: any[] = [];
  formVenta = {
    idClientes: 0,
    idAutos: 0,
    fechaVenta: '',
    precioVenta: 0,
    descripcion: '',
  };
  modalCrear = false;
  modalEditar = false;
  modalDetalle = false;

  ventaSeleccionada: Venta | null = null;

  constructor(
    private ventasService: VentasService,
    private clienteService: ClienteService,
    private autoService: AutoService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.cargarVentas();
    this.cargarClientes();
    this.cargarAutos();
  }

  cargarVentas() {
    this.ventasService.listar().subscribe({
      next: (data) => {
        console.log('VENTA:', data);

        this.ventas = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  cargarAutos() {
    this.autoService.cargarAutos().subscribe({
      next: (data) => {
        console.log('AUTOS:', data);
        this.autos = data;
      },
      error: (err) => {
        console.error('Error al cargar autos:', err);
      },
    });
  }

  cargarClientes() {
    this.clienteService.listarClientes().subscribe({
      next: (data) => {
        this.clientes = data;
        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  abrirModalCrear() {
    this.ventaSeleccionada = null;
    this.modalCrear = true;
  }

  cerrarModalCrear() {
    this.modalCrear = false;
  }

  editar(id: number) {
    const venta = this.ventas.find((v) => v.idVenta === id);

    if (!venta) return;

    this.ventaSeleccionada = venta;
    this.modalEditar = true;
  }

  cerrarModalEditar() {
    this.modalEditar = false;
  }

  verDetalle(id: number) {
    const venta = this.ventas.find((v) => v.idVenta === id);

    if (!venta) return;

    this.ventaSeleccionada = venta;
    this.modalDetalle = true;
  }

  cerrarModalDetalle() {
    this.modalDetalle = false;
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar venta?')) {
      return;
    }

    this.ventasService.eliminar(id).subscribe({
      next: () => this.cargarVentas(),
    });
  }

  guardarVenta() {
    if (!this.formVenta.idClientes) {
      alert('Seleccione un cliente');
      return;
    }

    if (!this.formVenta.idAutos) {
      alert('Seleccione un vehículo');
      return;
    }

    if (!this.formVenta.precioVenta || this.formVenta.precioVenta <= 0) {
      alert('Ingrese un precio válido');
      return;
    }

    this.ventasService.registrar(this.formVenta).subscribe({
      next: () => {
        this.cerrarModalCrear();
        this.cerrarModalCrear();
        this.formVenta = {
          idClientes: 0,
          idAutos: 0,
          fechaVenta: '',
          precioVenta: 0,
          descripcion: '',
        };

        this.cargarVentas();
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
