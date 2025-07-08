package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.Entities.Materia;
import java.util.*;

@Repository
public interface MateriaRepository extends JpaRepository<Materia,Long>{

    @Query("SELECT AVG(m.notaFinal) FROM Materia m WHERE m.notaFinal IS NOT NULL")
    Optional<Double> calcularPromedio();

    @Query(value = "DELETE FROM materia WHERE id = :id", nativeQuery = true)
    void eliminarMateriaPorId(Long id);
    
} 
