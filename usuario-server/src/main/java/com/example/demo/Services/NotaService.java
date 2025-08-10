package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Nota;
import com.example.demo.Repositories.NotaRepository;

@Service
public class NotaService {
    @Autowired
    private NotaRepository notaRepository;

    public List<Nota> findByUserId(Long userId) {
        return notaRepository.findByUserId(userId);
    }
}
