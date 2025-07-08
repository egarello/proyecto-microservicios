package com.example.demo.Controllers;

import java.time.LocalDate;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Services.ActividadesService;
import com.example.demo.Services.MateriaService;
import com.example.demo.Entities.Actividades;
import com.example.demo.Entities.EvSeguimiento;
import com.example.demo.Entities.Materia;
import com.example.demo.Entities.Parcial;
import com.example.demo.Entities.TrabajoPractico;
import com.example.demo.Exceptions.*;

@RestController
public class ActividadesController {
    @Autowired
    private ActividadesService actividadesService; 
    @Autowired
    private MateriaService materiaService;
    @GetMapping("/actividades")
    public ResponseEntity<?> getActividades(){
        try{
            return ResponseEntity.ok(actividadesService.getActividades());
        }catch(NullActividadesException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/materia/{id}/actividades")
    public ResponseEntity<?> getActividadesByIdMateria(@PathVariable Long id){
        try{
            return ResponseEntity.ok(actividadesService.getActividadesByIdMateria(id));
        }catch(NullActividadesDeMateriaException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PostMapping("/materia/{id}/actividades/crear")
    public ResponseEntity<?> saveActividad(@PathVariable Long id,@RequestBody Map<String,Object> actividadMap){
        String tipoActividad = (String) actividadMap.get("tipoActividad");
        Actividades newActividad; 
        Materia materia;
        try{
            materia = materiaService.getMateriaById(id);
            switch (tipoActividad) {
                case "Parcial":
                    newActividad = new Parcial(
                            (String) actividadMap.get("descripcion"),
                            LocalDate.parse((String) actividadMap.get("fecha")),
                            Double.valueOf(actividadMap.get("hora").toString()),
                            materia, // Materia se asignará en el servicio
                            Integer.parseInt(actividadMap.get("duracion").toString())
                    );
                    break; 
                case "Trabajo Práctico":
                    newActividad = new TrabajoPractico(
                            (String) actividadMap.get("descripcion"),
                            LocalDate.parse((String) actividadMap.get("fecha")),
                            Double.valueOf(actividadMap.get("hora").toString()),
                            materia, // Materia se asignará en el servicio
                            (String) actividadMap.get("dudasQueTengo")
                    );
                    break;
                case "Seguimiento":
                    newActividad = new EvSeguimiento(
                            (String) actividadMap.get("descripcion"),
                            LocalDate.parse((String) actividadMap.get("fecha")),
                            Double.valueOf(actividadMap.get("hora").toString()),
                            materia
                    );
                    break;
                default:
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Tipo de actividad no válido.");
            }
            return ResponseEntity.ok(actividadesService.saveActividad(id,newActividad));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/actividades/borrar/{idActividad}")
    public ResponseEntity<Void> deleteActividad(@PathVariable int idActividad){
        try{
            actividadesService.deleteActividad(idActividad);
            return ResponseEntity.noContent().build();
        }catch(Exception e){
            return ResponseEntity.notFound().build();
        }
    }
}
