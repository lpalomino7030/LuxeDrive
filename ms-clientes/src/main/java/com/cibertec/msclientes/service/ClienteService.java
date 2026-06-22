package com.cibertec.msclientes.service;

import com.cibertec.msclientes.model.Clientes;
import com.cibertec.msclientes.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clientesRepository;


    public List<Clientes> listarTodos() {
        return clientesRepository.findAll();
    }

    public Optional<Clientes> buscarPorId(Long id) {
        return clientesRepository.findById(id);
    }

    public Clientes guardar(Clientes cliente) {
        return clientesRepository.save(cliente);
    }

    public void eliminar(Long id) {
        clientesRepository.deleteById(id);
    }
}