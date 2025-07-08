package com.example.demo.Exceptions;

public class MateriaNoExisteException extends Exception {
    public MateriaNoExisteException(String message) {
        super(message);
    }
    public MateriaNoExisteException(){
        super("La materia no existe.");
    }
    
}
