package com.example.demo.Controllers;

import java.util.List;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.Entities.User;
import com.example.demo.Services.UserService;


@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> obtenerUsuarios(){
        return userService.getUsers();
    }

    @PostMapping("/users")
    public ResponseEntity<?> guardarUsuario(@RequestBody User usuario){
        try{
            userService.guardarUsuario(usuario);
            return ResponseEntity.ok(usuario);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR).body("Error: "+e.getMessage());
        }
    }
}
