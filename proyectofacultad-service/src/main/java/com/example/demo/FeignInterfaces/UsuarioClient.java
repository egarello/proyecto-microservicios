package com.example.demo.FeignInterfaces;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.DTOs.*;

@FeignClient(name = "usuario-server", url = "${usuario-server.url}")
public interface UsuarioClient {
    @GetMapping("/usuarios/por-materia/{id}")
    List<UserDTO> obtenerUsuariosPorMateria(@PathVariable("id") Long id);
}
