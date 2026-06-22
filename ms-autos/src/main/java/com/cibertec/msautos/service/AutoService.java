package com.cibertec.msautos.service;

import com.cibertec.msautos.model.Auto;
import com.cibertec.msautos.repository.AutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutoService {

    private final AutoRepository repository;

    public AutoService(AutoRepository repository) {
        this.repository = repository;
    }

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
