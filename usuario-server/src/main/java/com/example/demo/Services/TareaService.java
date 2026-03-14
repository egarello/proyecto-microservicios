package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Tarea;

import java.util.List;
import java.util.Optional;

import com.example.demo.Repositories.TareaRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Entities.User;

import jakarta.ws.rs.core.NoContentException;

@Service
public class TareaService {
    @Autowired
    private TareaRepository tareaRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Tarea> getTareas() throws NoContentException{
        List<Tarea> listaTareas = tareaRepository.findAll();
        if(listaTareas.isEmpty()){
            throw new NoContentException("No hay tareas cargadas para ningún usuario.");
        }
        return listaTareas;

    }

    public List<Tarea> getTareasByUsername(String username){

        Optional<User> userOpt = userRepository.findByUsername(username);

        if (userOpt.isEmpty()) {
            throw new RuntimeException("No existe usuario con el nombre de usuario ingresado.");
        }

        User user = userOpt.get();

        return tareaRepository.findAllByUser(user);
        
    }
}
