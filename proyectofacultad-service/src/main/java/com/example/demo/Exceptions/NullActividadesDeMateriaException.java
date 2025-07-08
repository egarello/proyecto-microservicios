package com.example.demo.Exceptions;

public class NullActividadesDeMateriaException extends Exception{
    public NullActividadesDeMateriaException(String e){
        super(e);
    }
    public NullActividadesDeMateriaException(){
        super("No existen actividades cargadas para esta materia.");
    }
}
