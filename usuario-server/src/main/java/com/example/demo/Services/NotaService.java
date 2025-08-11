package com.example.demo.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Nota;
import com.example.demo.Repositories.NotaRepository;

import jakarta.ws.rs.NotFoundException;

@Service
public class NotaService {
    @Autowired
    private NotaRepository notaRepository;

    public List<Nota> findByUserId(Long userId) {
        return notaRepository.findByUserId(userId);
    }
    public void deleteNotaById(Long notaId) throws NotFoundException{
        Nota notaAEliminar = notaRepository.findById(notaId)
            .orElseThrow(() -> new NotFoundException("No se ha encontrado la nota con el id: " + notaId));
        notaRepository.delete(notaAEliminar);
    }
    public Nota crearNota(Nota nuevaNota){
        Nota notaCreada = notaRepository.save(nuevaNota);
        return notaCreada;
    }
}
