package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entities.MateriaUsuario;


@Repository
public interface MateriaUsuarioRepository extends JpaRepository<MateriaUsuario,Long>{
    List<MateriaUsuario> findByMateriaId(Long materiaId);
} 
