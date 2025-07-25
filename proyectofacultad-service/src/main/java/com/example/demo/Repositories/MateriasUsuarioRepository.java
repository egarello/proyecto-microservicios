package com.example.demo.Repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Entities.MateriasUsuario;

@Repository
public interface MateriasUsuarioRepository extends JpaRepository<MateriasUsuario,Long>{
      
}