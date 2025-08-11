package com.example.demo.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Nota;
import com.example.demo.Entities.User;
import com.example.demo.Repositories.NotaRepository;
import com.example.demo.Repositories.UserRepository;

import jakarta.ws.rs.NotFoundException;

@Service
public class NotaService {
    @Autowired
    private NotaRepository notaRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Nota> findByUserId(Long userId) {
        return notaRepository.findByUserId(userId);
    }
    public void deleteNotaById(Long notaId) throws NotFoundException{
        Nota notaAEliminar = notaRepository.findById(notaId)
            .orElseThrow(() -> new NotFoundException("No se ha encontrado la nota con el id: " + notaId));
        notaRepository.delete(notaAEliminar);
    }
    public Nota crearNota(Nota nuevaNota, Long userId){
        User usuario = userRepository.findById(userId)
        .orElseThrow(() -> new NotFoundException("Usuario no encontrado"));
        
        nuevaNota.setUser(usuario);
        Nota notaCreada = notaRepository.save(nuevaNota);
        return notaCreada;
    }
}
