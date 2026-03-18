package com.example.demo.Entities;

import java.time.LocalDate;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE) // Estrategia de tabla única
@DiscriminatorColumn(name = "tipo_actividad", discriminatorType = DiscriminatorType.STRING) // Columna para distinguir subclases
public abstract class Actividades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String descripcion;

    private LocalDate fecha;
    
    private Double hora;
    @ManyToOne // Relación con la entidad Materia
    @JoinColumn(name = "materia_id", nullable = true) // Nombre de la columna FK
    private Materia materia;
    public Actividades(){}
    public Actividades(String descripcion, LocalDate fecha, Double hora, Materia materia) {
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.hora = hora;
        this.materia = materia;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public LocalDate getFecha() {
        return fecha;
    }
    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
    public Double getHora() {
        return hora;
    }
    public void setHora(Double hora) {
        this.hora = hora;
    }
    public Materia getMateria() {
        return materia;
    }
    public void setMateria(Materia materia) {
        this.materia = materia;
    } 

    
}
