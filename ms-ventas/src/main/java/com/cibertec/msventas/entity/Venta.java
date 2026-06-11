package com.cibertec.msventas.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "VENTAS")
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idventa")
    private Long idVentas;
    @Column(name = "idClientes")
private Long idClientes;
    @Column(name = "idAutos")
private Long idAutos;
    @Column(name = "fechaVenta")
private Date fechaVenta;
    @Column(name = "precioVenta")
private Double precioVenta;
    @Column(name = "descripcion")
private String descripcion;

    public Venta(Long idVentas, Long idClientes, Long idAutos, Date fechaVenta, Double precioVenta, String descripcion) {
        this.idVentas = idVentas;
        this.idClientes = idClientes;
        this.idAutos = idAutos;
        this.fechaVenta = fechaVenta;
        this.precioVenta = precioVenta;
        this.descripcion = descripcion;
    }

    public Venta() {

    }

    public Long getIdVentas() {
        return idVentas;
    }

    public void setIdVentas(Long idVentas) {
        this.idVentas = idVentas;
    }

    public Long getIdClientes() {
        return idClientes;
    }

    public void setIdClientes(Long idClientes) {
        this.idClientes = idClientes;
    }

    public Long getIdAutos() {
        return idAutos;
    }

    public void setIdAutos(Long idAutos) {
        this.idAutos = idAutos;
    }

    public Date getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(Date fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public Double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(Double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }






}
