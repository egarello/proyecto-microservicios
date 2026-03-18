package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entities.Materia;
import com.example.demo.Entities.Profesor;
import com.example.demo.Exceptions.NullMateriasException;
import com.example.demo.Services.MateriaService;
import java.util.*;

@RestController
public class MateriaController {
    @Autowired
    private MateriaService materiaService;

    @Autowired
    private ProfesorController profesorController;

    @GetMapping("/materias")
    public ResponseEntity<?> getMaterias(){
        try{
            return ResponseEntity.ok(materiaService.getMaterias());    
        }
        catch(NullMateriasException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage()); 
        }
    }

    @GetMapping("/materia/{id}")
    public ResponseEntity<?> getMateriaById(@PathVariable Long id){
        try{
            Materia materia = materiaService.getMateriaById(id);
            return ResponseEntity.ok(materia);
        }
        catch(NullMateriasException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }     
    }
     
    @DeleteMapping("/materia/{id}")
    public ResponseEntity<Void> deleteMateria(@PathVariable Long id){
        try{
            materiaService.deleteMateria(id);
            return ResponseEntity.noContent().build();
        }catch(Exception e){
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/materias")
    public ResponseEntity<?> saveMateria(@RequestBody Map<String,Object> payload){
        try{
            Materia materia = new Materia();
            materia.setNombre((String) payload.get("nombre"));
            materia.setDescripcion((String) payload.get("descripcion"));
            
            return ResponseEntity.ok(materiaService.saveMateria(materia)); // la nueva materia es cargada.
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage()); //no se carga la nueva materia debido a una excepción en el service.
        }
    }   
}
