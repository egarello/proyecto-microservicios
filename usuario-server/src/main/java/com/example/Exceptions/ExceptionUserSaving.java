package com.example.Exceptions;

public class ExceptionUserSaving extends Exception{
    public ExceptionUserSaving(String e){
        super(e);
    }
    public ExceptionUserSaving(){
        super("Error al guardar el usuario");
    }
    
}
