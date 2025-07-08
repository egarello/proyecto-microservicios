package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Repositories.MateriaRepository;
import com.example.demo.DTOs.UserDTO;
import com.example.demo.Entities.*;
import com.example.demo.Exceptions.*;
import com.example.demo.FeignInterfaces.UsuarioClient;

import java.util.*;

@Service
public class MateriaService {
    @Autowired
    private MateriaRepository materiaRepository;
    
    @Autowired
    private UsuarioClient usuarioClient;

    public List<Materia> getMaterias(){
        List<Materia> listaMaterias = materiaRepository.findAll();
        if(listaMaterias.isEmpty()){
            throw new NullMateriasException();
        }
        return listaMaterias;
    }

   public Materia getMateriaById(Long id) throws NullMateriasException{
        Materia materia = materiaRepository.findById(id)
            .orElseThrow(() -> new NullMateriasException());
        return materia;
    }
    public Double calcularPromedio() throws NullPromedioException{
        Double promedio = materiaRepository.calcularPromedio()
            .orElseThrow(()-> new NullPromedioException());
        return promedio;
    }

    public Materia saveMateria(Materia materia) throws SavingMateriaException{
        Materia materiaGuardada = Optional.of(materiaRepository.save(materia))
            .orElseThrow(() -> new SavingMateriaException());
        return materiaGuardada;
    }
    
    public void deleteMateria(Long id) throws MateriaNoExisteException {
        Materia materia = materiaRepository.findById(id)
            .orElseThrow(() -> new MateriaNoExisteException("La materia con id " + id + " no existe"));

        materiaRepository.delete(materia);
    }

    public List<UserDTO> getUsuariosPorMateria(Long id){
        return usuarioClient.obtenerUsuariosPorMateria(id);
    }

    //cambio para probar
}
