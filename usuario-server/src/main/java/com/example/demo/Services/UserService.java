package com.example.demo.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Exceptions.ExceptionUserSaving;
import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }
    
    public User guardarUsuario(User usuario) throws ExceptionUserSaving {
        if (usuario == null) {
            throw new ExceptionUserSaving("El usuario es nulo.");
        }
        try {
            return userRepository.save(usuario);
        } catch (Exception e) {
            throw new ExceptionUserSaving();
        }
    }
}
