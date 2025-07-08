package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entities.Actividades;
import java.util.*;

@Repository
public interface ActividadesRepository extends JpaRepository<Actividades,Integer>{
    List<Actividades> findByNombreMateriaId(Long id);
}
