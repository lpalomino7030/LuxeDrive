
package com.luxedrive.autos.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="autos")
public class Auto {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String marca;
private String modelo;
private Integer anio;
private Double precio;
private String color;
private String tipo;
private String estado;
private String imagen;
}
