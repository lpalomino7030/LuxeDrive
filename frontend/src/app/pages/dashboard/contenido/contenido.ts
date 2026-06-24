import { ChangeDetectorRef, Component } from '@angular/core';
import { VentasService } from '../../../services/ventas.service';

@Component({
  selector: 'app-contenido',
  imports: [],
  templateUrl: './contenido.html',
  styleUrl: './contenido.css',
})
export class Contenido {
  cantidadVentas: number = 0;

  constructor(
    private ventasService: VentasService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.contarVentas();
  }

  contarVentas(): void {
    this.ventasService.contarVentas().subscribe({
      next: (cantidad: number) => {
        this.cantidadVentas = cantidad;
        this.cdr.detectChanges();

        console.log(this.cantidadVentas);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
