package com.example.demo.Exceptions;

public class DeletingActividadException extends Exception {
    public DeletingActividadException(String message){
        super(message);
    }
    public DeletingActividadException(){
        super("No se ha podido eliminar la actividad.");
    }
    
}
