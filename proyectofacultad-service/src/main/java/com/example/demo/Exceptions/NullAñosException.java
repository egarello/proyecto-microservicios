package com.example.demo.Exceptions;

public class NullAñosException extends Exception {
    public NullAñosException(){
        super("No hay años cargados.");
    }
    public NullAñosException(String e){
        super(e);
    }
}
