package com.egarello.API.Gateway.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import reactor.core.publisher.Mono;


@Component
public class JwtAuthenticationFilter implements GlobalFilter, Ordered {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange,
                             GatewayFilterChain chain) {

        String path = exchange.getRequest().getURI().getPath();

        // Permitir login
        if (path.startsWith("/auth")) {
            return chain.filter(exchange);
        }

        String authHeader =
            exchange.getRequest().getHeaders().getFirst("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            exchange.getResponse()
                .setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        String token = authHeader.substring(7);

        if (!jwtUtil.isTokenValid(token)) {
            exchange.getResponse()
                .setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        // pasar datos del usuario a los servicios
        String username = jwtUtil.extractUsername(token);
        String rol = jwtUtil.extractRol(token);
        Long id = jwtUtil.extractUserId(token);

        ServerHttpRequest mutatedRequest =
            exchange.getRequest().mutate()
                .header("X-User", username)
                .header("X-User-Id", id.toString())
                .header("X-Role", rol)
                .build();

        return chain.filter(exchange.mutate()
            .request(mutatedRequest)
            .build());
    }

    @Override
    public int getOrder() {
        return -1; // Ejecutar antes que otros filtros
    }
}