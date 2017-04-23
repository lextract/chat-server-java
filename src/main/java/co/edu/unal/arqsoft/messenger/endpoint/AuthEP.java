/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.endpoint;

import co.edu.unal.arqsoft.messenger.businesslogic.AuthBL;
import co.edu.unal.arqsoft.messenger.businesslogic.UserBL;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alex
 */
@RestController
public class AuthEP {
    @RequestMapping(value = "/auth/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<?> login(
            @RequestParam("email") String email,
            @RequestParam("password") String password) {
        try{
            UserDTO user = AuthBL.login(email, password);
            if (user.id == 0)
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            else {
                // TODO: crear JWT y devolver
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        }
        catch (Exception ex){
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @RequestMapping(value = "/auth/", method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody UserDTO user) {
        try{
            User nuevo = AuthBL.register(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
        catch (Exception ex){
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
