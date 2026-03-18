package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entities.Actividades;

import java.util.*;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface ActividadesRepository extends JpaRepository<Actividades,Integer>{
    List<Actividades> findByNombreMateriaId(Long id);

    @Query("""
        SELECT a
        FROM Actividades a
        JOIN a.materia m 
        JOIN MateriasUsuario mu ON mu.materia = m
        WHERE mu.idUsuario = :idUser
    """)
    List<Actividades> findByUsuarioId(Long idUser);
}
