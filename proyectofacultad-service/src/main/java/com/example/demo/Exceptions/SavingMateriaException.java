package com.example.demo.Exceptions;

public class SavingMateriaException extends Exception {
    public SavingMateriaException(String message) {
        super(message);
    }
    public SavingMateriaException(){
        super("Error a la hora de guardar la materia.");
    }
    
}
