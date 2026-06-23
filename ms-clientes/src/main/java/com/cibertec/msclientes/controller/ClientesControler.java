package com.cibertec.msclientes.controller;

import com.cibertec.msclientes.service.ClienteService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cibertec.msclientes.model.Clientes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/clientes") // URL base para este microservicio
public class ClientesControler {

    @Autowired
    private ClienteService clienteService;

    // GET: http://localhost:8080/clientes
    @GetMapping
    public List<Clientes> listar() {
        return clienteService.listarTodos();
    }

    // GET por ID: http://localhost:8080/clientes/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Clientes> buscarPorId(@PathVariable Long id) {
        return clienteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST: http://localhost:8080/clientes
    @PostMapping
    public Clientes crear(@RequestBody Clientes cliente) {
        return clienteService.guardar(cliente);
    }

    // DELETE: http://localhost:8080/clientes/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        clienteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Clientes> actualizar(
            @PathVariable Long id,
            @RequestBody Clientes cliente) {

        Clientes actualizado = clienteService.actualizar(id, cliente);

        return ResponseEntity.ok(actualizado);
    }
}
