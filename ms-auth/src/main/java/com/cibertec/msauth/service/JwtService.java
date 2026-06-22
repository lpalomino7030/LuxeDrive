package com.cibertec.msauth.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.expiration}")
    private long expiration;

    public String generateToken(Map<String, Object> claims, String username){
    SecretKey key = Keys.hmacShaKeyFor(secret.getBytes());

    return Jwts.builder().claims(claims)
            .subject(username)
            .issuedAt(new Date())
            .expiration(
                    new Date(
                            System.currentTimeMillis() + expiration
                    )
            )
            .signWith(key)
            .compact();
}

    public boolean validateToken(String token){

        try {

            SecretKey key =
                    Keys.hmacShaKeyFor(
                            secret.getBytes()
                    );

            Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token);

            return true;

        } catch (Exception e){
            return false;
        }
    }

    public String extractUsername(String token){

        SecretKey key =
                Keys.hmacShaKeyFor(
                        secret.getBytes()
                );

        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

}
