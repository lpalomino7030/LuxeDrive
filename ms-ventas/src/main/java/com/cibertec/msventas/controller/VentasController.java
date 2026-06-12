package com.cibertec.msventas.controller;

import com.cibertec.msventas.dto.VentaRequest;
import com.cibertec.msventas.dto.VentaResponse;
import com.cibertec.msventas.service.VentaService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/venta")
public class VentasController {

    private final VentaService ventaService;

    public VentasController(VentaService ventaService) {
        this.ventaService = ventaService;
    }

    @PostMapping
    public ResponseEntity<VentaResponse> registrarVenta (@RequestBody VentaRequest request, HttpEntity<Object> httpEntity){

    VentaResponse response = ventaService.registrarVenta(request);

    return new ResponseEntity<>(
        response, HttpStatus.CREATED
        );

    }




}
