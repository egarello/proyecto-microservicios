package com.example.demo.controller;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.example.demo.Controllers.MateriaController;
import com.example.demo.Services.MateriaService;

public class MateriaControllerTest {
    @Mock
    private MateriaService materiaService;
    @InjectMocks
    private MateriaController materiaController; 

    public MateriaControllerTest(){
        MockitoAnnotations.openMocks(this); //inicializamos los mocks.
    }



}
