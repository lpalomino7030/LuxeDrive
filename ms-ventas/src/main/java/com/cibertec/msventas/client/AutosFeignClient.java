package com.cibertec.msventas.client;

import com.cibertec.msventas.dto.AutoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-autos")
public interface AutosFeignClient {
    @GetMapping("/autos/{id}")
    AutoResponse obtenerAuto(@PathVariable Long id);

}