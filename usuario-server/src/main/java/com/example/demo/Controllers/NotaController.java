package com.example.demo.Controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.Entities.Nota;
import com.example.demo.Services.NotaService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.NotFoundException;

@RestController
@RequestMapping("/notas")
public class NotaController {

    @Autowired
    private NotaService notaService;

    @GetMapping
    public ResponseEntity<?> getNotasByUsuario(HttpServletRequest request){
        // Leer el id del usuario desde el header X-User-Id que puso el Gateway
        Long userId = Long.valueOf(request.getHeader("X-User-Id"));
        return ResponseEntity.ok(notaService.findByUserId(userId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getNotasByUsuarioId(@PathVariable Long id){
        return ResponseEntity.ok(notaService.findByUserId(id));
    }

    @PostMapping
    public ResponseEntity<Nota> crearNota(@RequestBody Nota nuevaNota, HttpServletRequest request){
        Long userId = Long.valueOf(request.getHeader("X-User-Id"));
        Nota notaCreada = notaService.crearNota(nuevaNota, userId);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(notaCreada.getId())
                    .toUri();
        return ResponseEntity.created(location).body(notaCreada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNotaById(@PathVariable Long id){
        try{
            notaService.deleteNotaById(id);
            return ResponseEntity.noContent().build();
        }catch(NotFoundException e){
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
}