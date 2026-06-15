package com.cibertec.msauth.controller;


import com.cibertec.msauth.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    public JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
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

    /*
    {
        "username":"admin",
         "password":"123456"
    }
*/
}
