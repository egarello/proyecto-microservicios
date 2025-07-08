package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.Controllers.MateriaController;
import com.example.demo.Exceptions.NullPromedioException;
import com.example.demo.Services.MateriaService;

public class MateriaControllerTest {
    @Mock
    private MateriaService materiaService;
    @InjectMocks
    private MateriaController materiaController; 

    public MateriaControllerTest(){
        MockitoAnnotations.openMocks(this); //inicializamos los mocks.
    }

    @Test
    void calcularPromedioTest_Success() throws NullPromedioException{
        Double promedioEsperado = 8.0;
        when(materiaService.calcularPromedio()).thenReturn(promedioEsperado);

        ResponseEntity<?> response = materiaController.calcularPromedioMaterias();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(Optional.of(promedioEsperado),response.getBody());
        verify(materiaService, times(1)).calcularPromedio();
    }

    @Test
    void calcularPromedioTest_NullPromedioException() throws NullPromedioException{
        when(materiaService.calcularPromedio()).thenThrow(new NullPromedioException("No se ha podido calcular el promedio."));

        ResponseEntity<?> response = materiaController.calcularPromedioMaterias();

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("No se ha podido calcular el promedio.",response.getBody());
        verify(materiaService,times(1)).calcularPromedio();

    }

}
