package com.example.demo.Exceptions;

public class NullActividadesException extends RuntimeException {
    public NullActividadesException(String e){
        super(e);
    }
    public NullActividadesException(){
        super("No hay actividades cargadas en el sistema.");
    }
}
