/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.businesslogic;

import co.edu.unal.arqsoft.messenger.model.User;
import co.edu.unal.arqsoft.messenger.dao.UserDAO;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import java.util.List;

/**
 *
 * @author alex
 */
public class UserBL {
    
    public static User create(User user){
        // TODO: validar datos del usuario
        UserDAO dao = new UserDAO();
        dao.create(user);
        return user;
    }
    
    public static List<User> getFriends(int idUser){
        UserDAO dao = new UserDAO();
        return dao.getFriends(idUser);
    }
    
    public static UserDTO find(String email){
        UserDAO daoUser = new UserDAO();
        return daoUser.find(email);
    }
    
    
}
