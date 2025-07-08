package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.Entities.User;
import com.example.demo.Services.MateriaUsuarioService;
import com.example.demo.Services.UserService;


@RestController
public class UserController {
    @Autowired
    private MateriaUsuarioService materiaUsuarioService;

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> obtenerUsuarios(){
        return userService.getUsers();
    }
    @GetMapping("/usuarios/por-materia/{id}")
    public List<User> obtenerUsuariosPorMateria(@PathVariable Long id) {
        return materiaUsuarioService.obtenerUsuariosPorMateria(id);
    }

}
