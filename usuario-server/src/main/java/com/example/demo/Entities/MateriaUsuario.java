package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "materiausuario")
public class MateriaUsuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id") @JsonIgnore
    private User user;

    private Long materiaId; // Este ID viene del otro servicio

    private String estado;
    private Double nota;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Long getMateriaId() {
        return materiaId;
    }
    public void setMateriaId(Long materiaId) {
        this.materiaId = materiaId;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public Double getNota() {
        return nota;
    }
    public void setNota(Double nota) {
        this.nota = nota;
    }

    
}
