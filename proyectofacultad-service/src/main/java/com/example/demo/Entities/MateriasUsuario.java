package com.example.demo.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="materias_usuario")
public class MateriasUsuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_id")
    private Long idUsuario;
    @Column(name= "anio_cursado") //año en que el alumno cursa la materia
    private Integer anioCursado;
    private String estado;
    @ManyToOne
    @JoinColumn(name="materia_id", nullable=false)
    private Materia materia;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }
    public Integer getAnioCursado() {
        return anioCursado;
    }
    public void setAnioCursado(Integer anioCursado) {
        this.anioCursado = anioCursado;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public Materia getMateria() {
        return materia;
    }
    public void setMateria(Materia idMateria) {
        this.materia = idMateria;
    }

    
}
