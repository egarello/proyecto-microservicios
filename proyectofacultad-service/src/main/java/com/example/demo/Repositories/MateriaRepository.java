package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.Entities.Materia;

@Repository
public interface MateriaRepository extends JpaRepository<Materia,Long>{


    @Query(value = "DELETE FROM materia WHERE id = :id", nativeQuery = true)
    void eliminarMateriaPorId(Long id);
    
} 
