package com.example.demo.Entities;

import jakarta.persistence.*;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Materia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nombre;
    private String descripcion;

    @JsonIgnore
    @OneToMany(mappedBy = "materia", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Actividades> actividades;

    @JsonIgnore
    @OneToMany(mappedBy="materia", cascade = CascadeType.ALL, orphanRemoval=true)
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
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public List<Actividades> getActividades() {
        return actividades;
    }
    public void setActividades(List<Actividades> actividades) {
        this.actividades = actividades;
    } 

    public List<AsignacionProfesor> getAsignacionProfesores() {
        return asignacionProfesores;
    }

    public void setAsignacionProfesores(List<AsignacionProfesor> asignacionProfesores) {
        this.asignacionProfesores = asignacionProfesores;
    }

}
