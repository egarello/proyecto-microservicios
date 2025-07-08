package com.example.demo.Exceptions;

public class NullMateriasException extends RuntimeException{
    public NullMateriasException() {
        super("No hay materias cargadas.");
    }

    // Constructor con mensaje personalizado
    public NullMateriasException(String message) {
        super(message);
    }
}