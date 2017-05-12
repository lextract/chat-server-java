package co.edu.unal.arqsoft.messenger.rest;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unal.arqsoft.messenger.businesslogic.UserBL;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.model.User;
import co.edu.unal.arqsoft.messenger.security.JwtFilter;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author alex
 */
@RestController
@RequestMapping(value = "/user")
public class UserEP {

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFriends(HttpServletRequest req) {
        try {
            UserDTO u = JwtFilter.extractUser(req);
            List<User> friends = UserBL.getFriends(u.id);
            return new ResponseEntity<>(friends, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
}
