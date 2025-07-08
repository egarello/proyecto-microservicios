package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import com.example.demo.Entities.Profesor;
import com.example.demo.Repositories.ProfesorRepository;
import com.example.demo.Exceptions.*;

@Service
public class ProfesorService {
    @Autowired
    private ProfesorRepository profesorRepository;
    public List<Profesor> getProfesores() throws NullProfesoresException{
        List<Profesor> profesores = profesorRepository.findAll();
        if(profesores.isEmpty()){
            throw new NullProfesoresException("No hay profesores en la base de datos");
        }
        return profesores;
    }

    public Optional<Profesor> getProfesorById(Long id){
        Optional<Profesor> profesor = profesorRepository.findById(id);
        return profesor;
    }
}
