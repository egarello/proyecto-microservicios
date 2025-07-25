package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repositories.MateriasUsuarioRepository;

@Service
public class MateriasUsuarioService {
    @Autowired
    private MateriasUsuarioRepository materiasUsuarioRepository;

}
