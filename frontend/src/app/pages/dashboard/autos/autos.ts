import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autos.html',
  styleUrls: ['./autos.css'],
})
export class AutosComponent {
  autos: any[] = [];

  auto: any = {
    marca: '',
    modelo: '',
    anio: '',
    precio: '',
    color: '',
    tipo: '',
    estado: '',
    imagen: '',
  };

  mostrarFormulario = false;
  editando = false;

  constructor(private http: HttpClient) {
    this.cargar();
  }

  cargar() {
    this.http.get<any[]>('http://localhost:8082/autos').subscribe({
      next: (data) => {
        this.autos = data;
      },
      error: (err) => {
        console.error('Error al cargar autos:', err);
      },
    });
  }

  verAuto(auto: any) {
    alert(`
Marca: ${auto.marca}
Modelo: ${auto.modelo}
Año: ${auto.anio}
Precio: ${auto.precio}
Color: ${auto.color}
Tipo: ${auto.tipo}
Estado: ${auto.estado}
`);
  }

  nuevoAuto() {
    this.auto = {
      marca: '',
      modelo: '',
      anio: '',
      precio: '',
      color: '',
      tipo: '',
      estado: 'Disponible',
      imagen: '',
    };

    this.editando = false;
    this.mostrarFormulario = true;
  }

  editarAuto(auto: any) {
    this.auto = { ...auto };

    this.editando = true;
    this.mostrarFormulario = true;
  }

  guardarAuto() {
    this.http.post('http://localhost:8082/autos', this.auto).subscribe({
      next: () => {
        this.cargar();

        this.mostrarFormulario = false;

        this.auto = {
          marca: '',
          modelo: '',
          anio: '',
          precio: '',
          color: '',
          tipo: '',
          estado: '',
          imagen: '',
        };

        alert('Auto registrado correctamente');
      },
      error: (err) => {
        console.error('ERROR POST:', err);
      },
    });
  }

  actualizarAuto() {
    this.http.put(`http://localhost:8082/autos/${this.auto.idAutos}`, this.auto).subscribe({
      next: () => {
        this.cargar();

        this.mostrarFormulario = false;
        this.editando = false;

        alert('Auto actualizado correctamente');
      },
      error: (err) => {
        console.error('ERROR PUT:', err);
      },
    });
  }

  eliminarAuto(idAutos: number) {
    const confirmar = confirm('¿Desea eliminar este auto?');

    if (!confirmar) {
      return;
    }

    this.http.delete(`http://localhost:8082/autos/${idAutos}`).subscribe({
      next: () => {
        this.cargar();

        alert('Auto eliminado correctamente');
      },
      error: (err) => {
        console.error('ERROR DELETE:', err);
      },
    });
  }

  cancelar() {
    this.mostrarFormulario = false;
    this.editando = false;
  }
}
