package com.cibertec.msauth.service;

import com.cibertec.msauth.dto.LoginRequest;
import com.cibertec.msauth.dto.LoginResponse;
import com.cibertec.msauth.model.Usuario;
import com.cibertec.msauth.repository.AuthRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public final AuthRepository authRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(AuthRepository authRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.authRepository = authRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public Usuario registrar(
            String username,
            String password,
            String rol
    ) {
        Usuario usuario = new Usuario();
        if(authRepository.findByUsername(username).isPresent()){
            throw new RuntimeException(
                    "El usuario ya existe"
            );
        }
        usuario.setUsername(username);
        usuario.setPassword(
                passwordEncoder.encode(password)
        );
        usuario.setRol(rol);

        return authRepository.save(usuario);
    }

    public LoginResponse login (LoginRequest request){

        Usuario usuario =
                authRepository.findByUsername(
                                request.getUsername())
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Usuario no encontrado"
                                )
                        );

        boolean passwordValido =
                passwordEncoder.matches(
                        request.getPassword(),
                        usuario.getPassword()
                );

        if(!passwordValido){
            throw new RuntimeException(
                    "Credenciales inválidas"
            );
        }

        String token =
                jwtService.generateToken(
                        usuario.getUsername()
                );

        return new LoginResponse(token);
    }
}
