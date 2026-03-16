package com.example.demo.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTOs.JwtResponse;
import com.example.demo.DTOs.LoginRequest;
import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepository;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthToken(@RequestBody LoginRequest loginRequest) {

        System.out.println("Login recibido: " + loginRequest.getUsername());

        try {
            // 🔎 Buscar usuario en DB
            User user = userRepository
                    .findByUsername(loginRequest.getUsername())
                    .orElse(null);

            if (user == null) {
                return ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body("Usuario no encontrado");
            }

            // 🔐 Validar password (SIN encriptación por ahora)
            if (!user.getPass().equals(loginRequest.getPassword())) {
                return ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body("Credenciales inválidas");
            }

            // 🪪 Generar JWT usando el usuario real
            final String jwt = jwtUtil.generateToken(user);

            // 📦 Respuesta
            return ResponseEntity.ok(new JwtResponse(
                    jwt,
                    user.getId(),
                    user.getUsername(),
                    user.getRol()
            ));

        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error interno");
        }
    }
}