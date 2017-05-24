package co.edu.unal.arqsoft.messenger.rest;

import co.edu.unal.arqsoft.messenger.businesslogic.AuthBL;
import co.edu.unal.arqsoft.messenger.businesslogic.UserBL;
import co.edu.unal.arqsoft.messenger.dto.ResultDTO;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import co.edu.unal.arqsoft.messenger.security.SecurityConfig;
import java.util.Map;
import java.util.TreeMap;

/**
 *
 * @author alex
 */
@RestController
@RequestMapping(value = "/auth")
public class AuthEP {

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(
            @RequestParam("email") String email,
            @RequestParam("password") String password
    ) {
        try {
            //ResultDTO r = AuthBL.loginLdap(email, password);
            ResultDTO r = new ResultDTO();
            if (authenticate(email, password)) {
                //UserDTO user = (UserDTO)r.data;
                Map<String, Object> claimsMap = new TreeMap<String, Object>();
                claimsMap.put("password", password);
                claimsMap.put("email", email);
                UserDTO user = UserBL.find(email);
                claimsMap.put("name", user.name);
                user.token = Jwts.builder().setClaims(claimsMap)
                        .setSubject(String.valueOf(user.id))
                        .signWith(SignatureAlgorithm.HS512, SecurityConfig.key)
                        .compact();
                return new ResponseEntity<>(user, HttpStatus.OK);
            }else {
                return new ResponseEntity<>(r, HttpStatus.NOT_FOUND);
            }
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@RequestBody UserDTO user) {
        try {
            ResultDTO r = AuthBL.registerLdap(user);
            return new ResponseEntity<>(r, HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private static boolean authenticateBus(java.lang.String mail, java.lang.String pass) {
        esr.perfiles.Friends_Service service = new esr.perfiles.Friends_Service();
        esr.perfiles.Friends port = service.getFriendsPort();
        return port.authenticateBus(mail, pass);
    }
    
    private static boolean authenticate(String email, String password){
        ResultDTO r = AuthBL.login(email, password);
        return r.result.equals("OK");
    }
    
    
    
    
}
