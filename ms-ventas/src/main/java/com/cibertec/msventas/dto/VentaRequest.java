package com.cibertec.msventas.dto;

import java.util.Date;

public record VentaRequest(
        Long idVenta, Long idClientes, Long idAutos, Date fechaVenta, Double precioVenta, String descripcion
) {
}
