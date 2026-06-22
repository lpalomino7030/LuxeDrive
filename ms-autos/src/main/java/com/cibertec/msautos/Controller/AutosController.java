package com.cibertec.msautos.Controller;

import com.cibertec.msautos.model.Auto;
import com.cibertec.msautos.service.AutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/autos")
public class AutosController {


    private final AutoService service;

    public AutosController(AutoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Auto> listar(){
        return service.listar();
    }

    @GetMapping("/{id}")
    public Auto obtener(@PathVariable Long id){
        return service.buscar(id);
    }

    @PostMapping
    public Auto crear(@RequestBody Auto auto){
        return service.guardar(auto);
    }

    @PutMapping("/{id}")
    public Auto actualizar(@PathVariable Long id,@RequestBody Auto auto){
        Auto actual=service.buscar(id);
        actual.setMarca(auto.getMarca());
        actual.setModelo(auto.getModelo());
        actual.setAnio(auto.getAnio());
        actual.setPrecio(auto.getPrecio());
        actual.setColor(auto.getColor());
        actual.setTipo(auto.getTipo());
        actual.setEstado(auto.getEstado());
        actual.setImagen(auto.getImagen());
        return service.guardar(actual);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        service.eliminar(id);
    }


}
