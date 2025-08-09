package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Nota;
import com.example.demo.Repositories.NotaRepository;
import jakarta.ws.rs.core.NoContentException;

@Service
public class NotaService {
    @Autowired
    private NotaRepository notaRepository;

    public List<Nota> findByUserId(Long userId) throws NoContentException{
        List<Nota> notas = notaRepository.findByUserId(userId);
        if(notas.isEmpty()){
            throw new NoContentException("No hay notas cargadas para el usuario.");
        }
        return notas;
    }
}
