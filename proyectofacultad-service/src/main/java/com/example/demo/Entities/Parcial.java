package com.example.demo.Entities;

import java.time.LocalDate;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Parcial")// Valor discriminador para esta subclase
public class Parcial extends Actividades{
    private int duracion;

    public Parcial(){
        super();
    }
    public Parcial(String descripcion, LocalDate fecha, Double hora, Materia nombreMateria, int duracion) {
        super(descripcion, fecha, hora, nombreMateria);
        this.duracion = duracion;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }
    
}
