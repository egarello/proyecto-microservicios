package com.example.demo.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Año;
import com.example.demo.Exceptions.NullAñosException;
import com.example.demo.Services.AñoService;

@RestController
public class AñoController {
    @Autowired
    AñoService añoService; 

    @GetMapping("/anios")
    public ResponseEntity<?> getAños(){
        try{ 
            return ResponseEntity.ok(añoService.getAños());
        }
        catch(NullAñosException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }   
    }

    @GetMapping("/anio/{nroAño}")
    public ResponseEntity<?> getAñoById(@PathVariable long nroAño){
        try{
            return ResponseEntity.ok(añoService.getAñoById(nroAño));
        }catch(NullAñosException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    public Optional<Año> getAñoByIdOptional(long nroAño){
        try{
            return añoService.getAñoById(nroAño);
        }catch(NullAñosException e){
            return null;
        }
        
    }
}
