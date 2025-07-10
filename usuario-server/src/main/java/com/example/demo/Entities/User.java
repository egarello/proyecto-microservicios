package com.example.demo.Entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="users") //Esta tabla se llama users con el propósito de evitar problemas en la base de datos
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private String username;
    private String password;
    private String rol; //si es profesor o alumno
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<MateriaUsuario> listaMaterias;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPass() {
        return pass;
    }
    public void setPass(String pass) {
        this.pass = pass;
    }
    public String getRol() {
        return rol;
    }
    public void setRol(String rol) {
        this.rol = rol;
    }
    public List<MateriaUsuario> getListaMaterias() {
        return listaMaterias;
    }
    public void setListaMaterias(List<MateriaUsuario> listaMaterias) {
        this.listaMaterias = listaMaterias;
    }

    

}
