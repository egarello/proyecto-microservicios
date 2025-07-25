package com.example.demo.Entities;

import java.time.LocalDate;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("TrabajoPracico")
public class TrabajoPractico extends Actividades{

    public TrabajoPractico(){
        super();
    }

    public TrabajoPractico(String descripcion, LocalDate fecha, Double hora, Materia nombreMateria, String dudasQueTengo) {
        super(descripcion, fecha, hora, nombreMateria);
    }
    
}
