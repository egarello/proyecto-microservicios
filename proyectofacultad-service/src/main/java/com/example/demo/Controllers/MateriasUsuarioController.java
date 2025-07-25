package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.MateriasUsuarioService;

@RestController
public class MateriasUsuarioController {
    @Autowired
    private MateriasUsuarioService materiasUsuarioService;
    
}
