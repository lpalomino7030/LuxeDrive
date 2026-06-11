package com.cibertec.msventas.dto;

import java.util.Date;

public record VentaResponse (
        Long idVenta,
        ClienteResponse idClientes,
        AutoResponse idAutos,
        Date fechaVenta,
        Double precioVenta,
        String descripcion
) {
}
