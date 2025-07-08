package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Exceptions.NullAñosException;
import com.example.demo.Repositories.AñoRepository;
import java.util.*;
import com.example.demo.Entities.Año;

@Service
public class AñoService {
    @Autowired
    private AñoRepository añoRepository;

    public List<Año> getAños() throws NullAñosException{
        List<Año> listaAños = añoRepository.findAll();
        if(listaAños.isEmpty()){
            throw new NullAñosException();
        }
        else{
            return listaAños;
        }  
    }
    
    public Optional<Año> getAñoById(Long nroAño) throws NullAñosException{
        Optional<Año> año = añoRepository.findById(nroAño);
        año.orElseThrow(() -> new NullAñosException("El año indicado no ha sido encontrado."));
        return año;
    }
   
}
