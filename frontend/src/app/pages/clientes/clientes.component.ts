import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class ClientesComponent implements OnInit {
  formCliente!: FormGroup;
  clientes$!: Observable<Cliente[]>;

  editando = false;
  idEditando: number | null = null;

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    console.log('NGONINIT CLIENTES');

    this.clientes$ = this.clienteService.listarClientes();

    this.formCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
    });
  }

  crearCliente() {
    if (this.formCliente.invalid) return;

    if (this.editando) {
      this.actualizarCliente();
      return;
    }

    this.clienteService.crearCliente(this.formCliente.value).subscribe({
      next: () => {
        this.clientes$ = this.clienteService.listarClientes();
        this.formCliente.reset();
      },
    });
  }

  editar(cliente: Cliente) {
    this.editando = true;
    this.idEditando = cliente.idClientes!;

    this.formCliente.patchValue({
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      dni: cliente.dni,
    });
  }

  actualizarCliente() {
    if (this.formCliente.invalid || this.idEditando === null) return;

    this.clienteService.actualizarCliente(this.idEditando, this.formCliente.value).subscribe({
      next: () => {
        this.clientes$ = this.clienteService.listarClientes();
        this.formCliente.reset();
        this.editando = false;
        this.idEditando = null;
      },
    });
  }

  eliminar(id: number) {
    this.clienteService.eliminarCliente(id).subscribe({
      next: () => {
        this.clientes$ = this.clienteService.listarClientes();
      },
    });
  }

  cancelar() {
    this.editando = false;
    this.idEditando = null;
    this.formCliente.reset();
  }
}
