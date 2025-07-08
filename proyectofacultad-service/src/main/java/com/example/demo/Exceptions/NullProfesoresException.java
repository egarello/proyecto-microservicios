package com.example.demo.Exceptions;

public class NullProfesoresException extends Exception {
    public NullProfesoresException(String message) {
        super(message);
    }
    public NullProfesoresException(){
        super();
    }
}
