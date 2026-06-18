package com.cibertec.gateway.config;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class JwtAuthenticationFilter implements GlobalFilter {

    private final WebClient.Builder webClientBuilder;

    public JwtAuthenticationFilter(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }


    @Override
    public Mono<Void> filter(
            ServerWebExchange exchange,
            GatewayFilterChain chain
    ) {
        if (exchange.getRequest().getMethod() == HttpMethod.OPTIONS) {
            return chain.filter(exchange);
        }

        String path =
                exchange.getRequest()
                        .getURI()
                        .getPath();

        if(path.startsWith("/auth")){
            return chain.filter(exchange);
        }

        String authHeader =
                exchange.getRequest()
                        .getHeaders()
                        .getFirst("Authorization");

        if(authHeader == null ||
                !authHeader.startsWith("Bearer "))
        {
            exchange.getResponse()
                    .setStatusCode(HttpStatus.UNAUTHORIZED);

            return exchange.getResponse().setComplete();
        }

        return webClientBuilder.build()
                .post()
                .uri(
                        "http://MS-AUTH/auth/validate"
                )
                .header(
                        "Authorization",
                        authHeader
                )
                .retrieve()
                .bodyToMono(Boolean.class)
                .flatMap(valid -> {

                    if(Boolean.TRUE.equals(valid)){
                        return chain.filter(exchange);
                    }

                    exchange.getResponse()
                            .setStatusCode(
                                    HttpStatus.UNAUTHORIZED
                            );

                    return exchange.getResponse()
                            .setComplete();
                });
    }


}
