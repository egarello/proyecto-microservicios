package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Entities.Tarea;
import java.util.List;
import com.example.demo.Repositories.TareaRepository;

import jakarta.ws.rs.core.NoContentException;

@Service
public class TareaService {
    @Autowired
    private TareaRepository tareaRepository;

    public List<Tarea> getTareas() throws NoContentException{
        List<Tarea> listaTareas = tareaRepository.findAll();
        if(listaTareas.isEmpty()){
            throw new NoContentException("No hay tareas cargadas para ningún usuario.");
        }
        return listaTareas;

    }
}
