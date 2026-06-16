package com.cibertec.msauth.controller;


import com.cibertec.msauth.dto.LoginRequest;
import com.cibertec.msauth.dto.LoginResponse;
import com.cibertec.msauth.dto.RegisterRequest;
import com.cibertec.msauth.model.Usuario;
import com.cibertec.msauth.service.AuthService;
import com.cibertec.msauth.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    /*

    {
    "username":"admin",
    "password":"123456",
    "rol":"ADMIN"
    }

    POSTMAN: http://localhost:8088/auth/login
     */

    public JwtService jwtService;
    private final AuthService authService;

    public AuthController(JwtService jwtService, AuthService authService) {
        this.jwtService = jwtService;
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){

        return ResponseEntity.ok(
                authService.login(request)
        );
    }

    @PostMapping("/validate")
    public ResponseEntity<Boolean> validate(
            @RequestHeader("Authorization")
            String authHeader
    ){

        String token =
                authHeader.replace("Bearer ","");

        return ResponseEntity.ok(
                jwtService.validateToken(token)
        );
    }

    @PostMapping("/register")
    public ResponseEntity<Usuario>  register( @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(
                authService.registrar(
                        request.getUsername(),
                        request.getPassword(),
                        request.getRol()
        )
        );
    }

}
