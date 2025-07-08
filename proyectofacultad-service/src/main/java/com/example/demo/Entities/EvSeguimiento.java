package com.example.demo.Entities;

import java.time.LocalDate;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;


@Entity
@DiscriminatorValue("EvSeguimiento")
public class EvSeguimiento extends Actividades{
    public EvSeguimiento(){
        super();
    }
    public EvSeguimiento(String descripcion, LocalDate fecha, Double hora, Materia nombreMateria){
        super(descripcion, fecha, hora, nombreMateria);
    }
}
