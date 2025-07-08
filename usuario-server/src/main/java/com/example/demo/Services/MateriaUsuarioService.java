package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.MateriaUsuario;
import com.example.demo.Entities.User;
import com.example.demo.Repositories.MateriaUsuarioRepository;

@Service
public class MateriaUsuarioService {
        @Autowired
    private MateriaUsuarioRepository materiaUsuarioRepository;

    public List<User> obtenerUsuariosPorMateria(Long materiaId) {
        List<MateriaUsuario> relaciones = materiaUsuarioRepository.findByMateriaId(materiaId);
        return relaciones.stream()
            .map(MateriaUsuario::getUser)
            .toList();
    }
}
