package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entities.Año;
@Repository
public interface AñoRepository extends JpaRepository<Año,Long>{
    
}
