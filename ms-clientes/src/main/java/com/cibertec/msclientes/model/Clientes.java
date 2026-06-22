package com.cibertec.msclientes.model;

import jakarta.persistence.*;

@Entity
@Table(name = "clientes")
public class Clientes {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "idClientes")
    private Long idClientes;
    private String nombre;
    private String apellido;
    private String dni;

    public Clientes() {
    }

    public Clientes(Long idClientes, String nombre, String apellido, String dni) {
        this.idClientes = idClientes;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    public Long getIdClientes() {
        return idClientes;
    }

    public void setIdClientes(Long idClientes) {
        this.idClientes = idClientes;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }
}
