package com.cibertec.msventas.client;

import com.cibertec.msventas.dto.ClienteResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-clientes")
public interface ClienteFeignClient {

    @GetMapping("/clientes/{id}")
    ClienteResponse obtenerCliente(@PathVariable Long id);

}
