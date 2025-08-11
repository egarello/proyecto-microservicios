package com.example.demo.Controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.Auth.CustomUserDetails;
import com.example.demo.Entities.Nota;
import com.example.demo.Services.NotaService;

import jakarta.ws.rs.NotFoundException;

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
    @PostMapping
    private ResponseEntity<Nota> crearNota(@RequestBody Nota nuevaNota, Authentication authentication){
        CustomUserDetails user = ((CustomUserDetails) authentication.getPrincipal());
        Nota notaCreada = notaService.crearNota(nuevaNota, user.getId());
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(notaCreada.getId())
                    .toUri();
        return ResponseEntity.created(location).body(notaCreada);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteNotaById(@PathVariable Long id){
        try{
            notaService.deleteNotaById(id);
            return ResponseEntity.noContent().build();
        }catch(NotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
