
package com.luxedrive.autos.service;

import java.util.List;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import com.luxedrive.autos.entity.Auto;
import com.luxedrive.autos.repository.AutoRepository;

@Service
@RequiredArgsConstructor
public class AutoService {

private final AutoRepository repository;

public List<Auto> listar(){
 return repository.findAll();
}

public Auto buscar(Long id){
 return repository.findById(id)
 .orElseThrow(() -> new RuntimeException("Auto no encontrado"));
}

public Auto guardar(Auto auto){
 return repository.save(auto);
}

public void eliminar(Long id){
 repository.deleteById(id);
}
}
