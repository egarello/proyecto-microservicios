package com.example.demo.Entities;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.*;
import jakarta.persistence.*;

@Entity
public class Año {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nroAño;

    @OneToMany(mappedBy = "año", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Materia> listaMaterias;


    private String nombreAño;

    public int getNroAño() {
        return nroAño;
    }
    public void setNroAño(int nroAño) {
        this.nroAño = nroAño;
    }
    public List<Materia> getListaMaterias() {
        return listaMaterias;
    }
    public void setListaMaterias(List<Materia> listaMaterias) {
        this.listaMaterias = listaMaterias;
    }
    public String getNombreAño() {
        return nombreAño;
    }
    public void setNombreAño(String nombreAño) {
        this.nombreAño = nombreAño;
    }
    
}
