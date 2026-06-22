package com.cibertec.msautos.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "AUTOS")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Auto {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "idautos")
    private Long idAutos;
    private String marca;
    private String modelo;
    private String placa;
    private Integer anio;
    private Double precio;
    private String color;
    private String tipo;
    private String estado;
    private String imagen;

}


