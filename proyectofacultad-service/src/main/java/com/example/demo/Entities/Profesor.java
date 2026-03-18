package com.example.demo.Entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Profesor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; 
    private String nombre;

    @JsonIgnore
    @OneToMany(mappedBy = "profesor", cascade= CascadeType.ALL, orphanRemoval=true)
    private List<AsignacionProfesor> asignacionProfesores; 
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<AsignacionProfesor> getAsignacionProfesores() {
        return asignacionProfesores;
    }

    public void setAsignacionProfesores(List<AsignacionProfesor> asignacionProfesores) {
        this.asignacionProfesores = asignacionProfesores;
    }
}
