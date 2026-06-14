
package com.luxedrive.autos.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import com.luxedrive.autos.entity.Auto;
import com.luxedrive.autos.service.AutoService;

@RestController
@RequestMapping("/api/autos")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AutoController {

private final AutoService service;

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
