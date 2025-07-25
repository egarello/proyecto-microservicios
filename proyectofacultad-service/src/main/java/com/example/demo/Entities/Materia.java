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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "profesor_id",nullable = true)
    private Profesor profesor;

    @JsonIgnore //acá lo mismo. Tengo que ver si es necesario acá o en la clase Actividades.
    @OneToMany(mappedBy = "nombreMateria", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Actividades> actividades;

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
    public Profesor getProfesor() {
        return profesor;
    }
    public void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }
    public List<Actividades> getActividades() {
        return actividades;
    }
    public void setActividades(List<Actividades> actividades) {
        this.actividades = actividades;
    } 
    
}
