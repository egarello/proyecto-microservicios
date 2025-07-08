package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Actividades;
import com.example.demo.Exceptions.*;
import com.example.demo.Repositories.ActividadesRepository;
import java.util.*;
import java.util.stream.Collectors;
@Service
public class ActividadesService {
    @Autowired
    private ActividadesRepository actividadesRepository;

    public List<Actividades> getActividadesByIdMateria(Long id) throws NullActividadesDeMateriaException{
        List<Actividades> actividadesDeLaMateria = actividadesRepository.findByNombreMateriaId(id);
        if(actividadesDeLaMateria.isEmpty()){
            throw new NullActividadesDeMateriaException();
        }
        else{
            return actividadesDeLaMateria;
        }
    }

    public List<Actividades> getActividades() throws NullActividadesException{
        List<Actividades> actividadesAll = actividadesRepository.findAll();
        if(actividadesAll.isEmpty()){
            throw new NullActividadesException();
        }
        else{
            actividadesAll = actividadesAll.stream().sorted((a1,a2) -> a1.getFecha().compareTo(a2.getFecha())).collect(Collectors.toList());
            return actividadesAll;
        }
    }
    public Actividades saveActividad(Long id, Actividades actividad) throws SavingActividadException{
        Actividades actividadGuardada = actividadesRepository.save(actividad);
        if(actividadGuardada == null){
            throw new SavingActividadException("No se ha podido guardar la actividad.");
        }
        return actividadGuardada;
    }

    public void deleteActividad(int id) throws DeletingActividadException{
        try{
            Actividades actividad = actividadesRepository.findById(id).orElseThrow(() -> new DeletingActividadException("La actividad con id " + id + " no existe."));
            actividadesRepository.delete(actividad);
        }catch(Exception e){
            throw new DeletingActividadException("No se ha podido eliminar la actividad.");
        }
    }
}
