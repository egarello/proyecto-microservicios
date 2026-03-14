package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.Tarea;
import com.example.demo.Entities.User;

public interface TareaRepository extends JpaRepository<Tarea,Long>{
    public List<Tarea> findAllByUser(User user);
}
