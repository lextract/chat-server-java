/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.businesslogic;

import co.edu.unal.arqsoft.messenger.dao.AuthDAO;
import co.edu.unal.arqsoft.messenger.dao.UserDAO;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.model.Auth;
import co.edu.unal.arqsoft.messenger.model.User;

/**
 *
 * @author alex
 */
public class AuthBL {
    
    public static UserDTO login(String email, String password){
        // TODO: validar datos ingresados, arrojar exepcion en caso de ser invalidos
        AuthDAO dao = new AuthDAO();
        UserDTO user = dao.validateUser(email, password);
        return user;
    }
    public static User register(UserDTO user){
        // TODO: validar datos ingresados, arrojar exepcion en caso de ser invalidos
        UserDAO daoUser = new UserDAO();
        User u = new User();
        u.setEmail(user.email);
        u.setName(user.name);
        daoUser.create(u);
        
        AuthDAO dao = new AuthDAO();
        Auth auth = dao.create(u.getId(), user.password);
        
        return u;
    }
}
