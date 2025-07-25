package com.example.demo.FeignInterfaces;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.DTOs.*;


//esta clase debería eliminarse puesto a que la funcionalidad que la soporta en el otro servicio ya no está disponble.
//La dejo solo para saber como podría implementar luego otros feign clients.
@FeignClient(name = "usuario-server", url = "${usuario-server.url}")
public interface UsuarioClient {
    @GetMapping("/usuarios/por-materia/{id}")
    List<UserDTO> obtenerUsuariosPorMateria(@PathVariable("id") Long id);
}
