package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.Nota;

public interface NotaRepository extends JpaRepository<Nota,Long>{
    List<Nota> findByUserId(Long userId);
}
