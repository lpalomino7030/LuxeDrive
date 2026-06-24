import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-encabezado',
  imports: [],
  templateUrl: './titulo-encabezado.html',
  styleUrl: './titulo-encabezado.css',
})
export class TituloEncabezado {
  @Input() titulo: string = '';


}
