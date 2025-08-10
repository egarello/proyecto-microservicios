package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Auth.CustomUserDetails;
import com.example.demo.Services.NotaService;

@RestController
@RequestMapping("/notas")
public class NotaController {
    @Autowired
    private NotaService notaService;

    @GetMapping
    private ResponseEntity<?> getNotasByUsuarioId(Authentication authentication){
        Long userId = ((CustomUserDetails) authentication.getPrincipal()).getId();
        return ResponseEntity.ok(notaService.findByUserId(userId));
    }
    @GetMapping("/{id}") //este método lo hago para probar si anda pasando el id por url en lugar de por el token
    private ResponseEntity<?> getNotasByUsuarioId(@PathVariable Long id){
        
        return ResponseEntity.ok(notaService.findByUserId(id));
    }
}
