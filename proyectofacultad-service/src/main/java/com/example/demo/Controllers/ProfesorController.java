package com.example.demo.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entities.*;
import com.example.demo.Services.ProfesorService;

@RestController
public class ProfesorController {
    @Autowired
    private ProfesorService profesorService;
    @GetMapping("/profesores")
    public ResponseEntity<?> getProfesores(){
        try{
            return ResponseEntity.ok().body(profesorService.getProfesores());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    public Optional<Profesor> getProfesorById(Long id){
        return profesorService.getProfesorById(id);    
    }
}
