package com.example.demo.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
        try{
            Long userId = ((CustomUserDetails) authentication.getPrincipal()).getId();
            return ResponseEntity.ok(notaService.findByUserId(userId));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(e.getMessage());
        }
    }
}
