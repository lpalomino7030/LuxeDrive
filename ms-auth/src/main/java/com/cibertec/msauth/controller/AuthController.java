package com.cibertec.msauth.controller;

import com.cibertec.msauth.dto.LoginRequest;
import com.cibertec.msauth.dto.LoginResponse;
import com.cibertec.msauth.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(
            AuthService authService) {

        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request){

        return ResponseEntity.ok(
                authService.login(request)
        );
    }

    /*
    {
        "username":"admin",
            "password":"123456"
    }
*/
}
