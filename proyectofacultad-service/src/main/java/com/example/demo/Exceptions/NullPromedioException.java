package com.example.demo.Exceptions;

public class NullPromedioException extends Exception {
    public NullPromedioException(){
        super("No hay notas cargadas.");
    }
    public NullPromedioException(String message){
        super(message);
    }
}
