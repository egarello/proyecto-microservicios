package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.TareaService;

@RestController
public class TareaController {
    @Autowired
    private TareaService tareaService;

    @GetMapping("/tareas")
    public ResponseEntity<?> getTareas(){
        try{
            return ResponseEntity.ok(tareaService.getTareas());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(e.getMessage());
        }
    }
}
