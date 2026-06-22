package com.cibertec.msventas.dto;


public record ClienteResponse(
        Long idClientes,
        String nombre,
        String apellido,
        String dni
) {

}
