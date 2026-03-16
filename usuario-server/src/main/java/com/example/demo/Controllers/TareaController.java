package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Tarea;
import com.example.demo.Services.TareaService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/tareas")
public class TareaController {
    
    @Autowired
    private TareaService tareaService;

    @GetMapping
    public ResponseEntity<?> getTareas(HttpServletRequest request){
        try{
            String username = request.getHeader("X-User"); // header agregado por el api-gateway
            
            if(username == null){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            List<Tarea> tareas = tareaService.getTareasByUsername(username);
            return ResponseEntity.ok(tareas);

        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(e.getMessage());
        }
    }
}
