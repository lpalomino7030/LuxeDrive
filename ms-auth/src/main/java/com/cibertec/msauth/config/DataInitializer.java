package com.cibertec.msauth.config;

import com.cibertec.msauth.model.Usuario;
import com.cibertec.msauth.repository.AuthRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {

private final AuthRepository repository;
private final PasswordEncoder passwordEncoder;

    public DataInitializer(AuthRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void init(){
    if(repository.findByUsername("admin").isEmpty()){
        Usuario user = new Usuario();

        user.setUsername("admin");
        user.setPassword(
                passwordEncoder.encode("123456")
        );
        user.setRol("ADMIN");

        repository.save(user);


    }
    }

}
