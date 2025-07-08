package com.example.demo.Exceptions;

public class SavingActividadException  extends Exception{
    public SavingActividadException(String message){
        super(message);
    }
    public SavingActividadException(){
        super("No se ha podido guardar la actividad.");
    }
}
