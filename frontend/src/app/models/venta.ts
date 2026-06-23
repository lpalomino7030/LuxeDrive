import { Cliente } from './cliente';
import { Auto } from './auto';

export interface Venta {
  idVenta: number;
  idClientes: Cliente;
  idAutos: Auto;
  fechaVenta: string;
  precioVenta: number;
  descripcion: string;
}
